import React, { PureComponent, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { uniq } from '../../utils';

import LoadingIndicator from '../LoadingIndicator';
import Wrapper from './Wrapper';
import Watermark from './Watermark';
import PanZoom from './pan-zoom';

import groupBy from 'lodash.groupby';


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
      this.setMarkers();
    })
    .catch(err => {
      console.log(`There has been a problem with a fetch operation: ${err.message}`);
    });
  }

  initPanZoom() {
    // TODO:
    // reflect zoom, coordinates etc. to state.
    this.panZoom = new PanZoom(this.wrapper);
    this.panZoom.update({ scale: 1.3 });
  }

  setMarkers() {
    const { companies } = this.props.globalStore;
    const companiesByStation = groupBy(companies, 'station');
    const stations = uniq(companies.map(company => company.station))
      .filter(station => station !== '');

    const markers = [...this.wrapper.querySelectorAll('[data-station]')]
      .filter(el => stations.includes(el.dataset.station))
      .map(el => ({
        el: el,
        station: el.dataset.station,
        industries: companiesByStation[el.dataset.station].map(company => company.industry),
        companiesTotal: companiesByStation[el.dataset.station].length
      }));

    markers.forEach(marker => {
      marker.el.style.display = 'block';
      marker.el.style.transform = `scale(${this.scaleMarker(marker.companiesTotal)})`;
    });
  }

  scaleMarker(n) {
    return ((n / 40) + 0.7);
  }

  bindMarkers() {
    document.addEventListener('click', function(e) {
      const station = e.target.dataset.station;
      if (!station) return;

      // e.target.style.fill = 'hotpink';
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

export default Map;
