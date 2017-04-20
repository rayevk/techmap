import React, { PureComponent, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import groupBy from 'lodash.groupby';
import { uniq } from '../../utils';

import LoadingIndicator from '../LoadingIndicator';
import Wrapper from './Wrapper';
import Watermark from './Watermark';
import PanZoom from './pan-zoom';


class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      svg: null,
      grabbing: false
    };
  }

  componentDidMount() {
    fetch(this.props.svgurl)
    .then(res => res.text())
    .then(svg => {
      this.setState({
        loading: false,
        svg: svg
      });
      this.initPanZoom();
      this.bindMarkers();
      this.initMarkers();
    })
    .catch(err => {
      console.log(`There has been a problem with a fetch operation: ${err.message}`);
    });
  }

  componentDidUpdate() {
    if (!this.markers) return;
    this.filterMarkers(this.props.globalStore.markersFilter);
  }

  initPanZoom() {
    // TODO:
    // reflect zoom, coordinates etc. to state.
    this.panZoom = new PanZoom(this.wrapper);
    this.panZoom.update({ scale: 1.3 });
  }

  initMarkers() {
    const { companies } = this.props.globalStore;
    const companiesByStation = groupBy(companies, 'station');
    const stations = uniq(companies.map(company => company.station))
      .filter(station => station !== '');

    const scale = (n) => ((n / 40) + 0.7);
    const markers = [...this.wrapper.querySelectorAll('[data-station]')]
      .filter(el => stations.includes(el.dataset.station))
      .map(el => ({
        el: el,
        station: el.dataset.station,
        industries: uniq(companiesByStation[el.dataset.station].map(company => company.industry)),
        companies: companiesByStation[el.dataset.station].map(company => company.name),
        companiesTotal: companiesByStation[el.dataset.station].length
      }));

    markers.forEach(marker => {
      marker.el.style.display = 'block';
      marker.el.style.transform = `scale(${scale(marker.companiesTotal)})`;
    });

    this.markers = markers;

    // this.filterMarkers(this.props.globalStore.markersFilter);
  }

  filterMarkers({ key = 'all', value = '' } = {}) {
    const visibleMarkers = this.markers.filter(markerFilters(key, value));

    this.markers.forEach(marker => {
      if (!visibleMarkers.includes(marker)) {
        marker.el.style.display = 'none';
      }
      else {
        marker.el.style.display = 'block';
        // marker.el.style.fill = 'hotpink';
        // marker.el.style.stroke = 'black';
      }
    });
  }

  bindMarkers() {
    document.addEventListener('click', function(e) {
      const station = e.target.dataset.station;
      if (!station) return;

      browserHistory.push(`/london/station/${encodeURIComponent(station)}`);
    });
  }

  render() {
    const { loading, svg, grabbing } = this.state;
    return (
      <div style={{height: '100%'}}>
        {loading ?
          <LoadingIndicator /> :
          <Wrapper
            innerRef={comp => this.wrapper = comp}
            dangerouslySetInnerHTML={{__html: svg}}
            grabbing={grabbing}
          />
        }
        <Watermark aria-hidden="true" />
      </div>
    );
  }
}

Map.propTypes = {
  svgurl: PropTypes.string.isRequired,
  globalStore: PropTypes.object
};

function markerFilters(key, value) {
  const filters = {
    industry: marker => marker.industries.includes(value),
    company: marker => marker.companies.includes(value),
    station: marker => marker.station === value,
    all: marker => marker
  }
  return filters[key];
}

export default Map;
