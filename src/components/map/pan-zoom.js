class PanZoom {
  constructor(target, { eventArea = target } = {}) {
    this._target = target;
    this._dx = 0;
    this._dy = 0;
    this._scale = 1;
    this._active = 0;
    this._lastPoints = [];
    this._prevState = {
      x: 0,
      y: 0,
      scale: 1
    };

    eventArea.addEventListener('mousedown', this._onPointerDown);
    eventArea.addEventListener('touchstart', this._onPointerDown);
    eventArea.addEventListener('wheel', this._onWheel);

    requestAnimationFrame(this._update);
  }

  update({ x = 0, y = 0, scale = 1 }) {
    this._dx = x;
    this._dy = y;
    this._scale = scale;
    this._update();
  }

  reset() {
    this._dx = 0;
    this._dy = 0;
    this._scale = 1;
    this._update();
  }

  _onWheel = e => {
    e.preventDefault();

    const boundingRect = this._target.getBoundingClientRect();
    let delta = e.deltaY;

    if (e.deltaMode === 1) { // 1 is "lines", 0 is "pixels"
      // Firefox uses "lines" when mouse is connected
      delta *= 15;
    }

    // stop mouse wheel producing huge values
    delta = Math.max(Math.min(delta, 60), -60);

    const scaleDiff = (delta / 300) + 1;

    // avoid to-small values
    if (this._scale * scaleDiff < 0.05) return;

    // min/max scale
    if (
      (this._scale >= 3 && scaleDiff > 1) ||
      (this._scale <= 1 && scaleDiff < 1)
    ) return;

    this._scale *= scaleDiff;
    this._dx -= (e.pageX - boundingRect.left) * (scaleDiff - 1);
    this._dy -= (e.pageY - boundingRect.top) * (scaleDiff - 1);
  }

  _onFirstPointerDown(e) {
    document.addEventListener('mousemove', this._onPointerMove);
    document.addEventListener('mouseup', this._onPointerUp);
    document.addEventListener('touchmove', this._onPointerMove);
    document.addEventListener('touchend', this._onPointerUp);
  }

  _onPointerDown = e => {
    if (e.type === 'mousedown' && e.which !== 1) return;
    e.preventDefault();

    this._lastPoints = getPoints(e);
    this._active++;

    if (this._active === 1) {
      this._onFirstPointerDown(e);
    }
  }

  _onPointerMove = e => {
    e.preventDefault();
    const points = getPoints(e);
    const averagePoint = points.reduce(getMidpoint);
    const averageLastPoint = this._lastPoints.reduce(getMidpoint);
    const boundingRect = this._target.getBoundingClientRect();

    this._dx += averagePoint.x - averageLastPoint.x;
    this._dy += averagePoint.y - averageLastPoint.y;

    if (points[1]) {
      const scaleDiff = touchDistance(
        points[0], points[1]) / touchDistance(this._lastPoints[0],
        this._lastPoints[1]
      );
      this._scale *= scaleDiff;
      this._dx -= (averagePoint.x - boundingRect.left) * (scaleDiff - 1);
      this._dy -= (averagePoint.y - boundingRect.top) * (scaleDiff - 1);
    }

    this._lastPoints = points;
  }

  _update = () => {
    requestAnimationFrame(this._update);

    if (`${this._dx},${this._dy},${this._scale}` === this._prevState) return;

    this._prevState = `${this._dx},${this._dy},${this._scale}`;
    this._target.style.transform = `
      translate(${this._dx}px, ${this._dy}px)
      scale(${this._scale})
    `;
  }

  _onPointerUp = e => {
    e.preventDefault();
    this._active--;
    this._lastPoints.pop();

    if (this._active) {
      this._lastPoints = getPoints(e);
      return;
    }

    document.removeEventListener('mousemove', this._onPointerMove);
    document.removeEventListener('mouseup', this._onPointerUp);
    document.removeEventListener('touchmove', this._onPointerMove);
    document.removeEventListener('touchend', this._onPointerUp);
  }
}

function getXY(obj) {
  return {
    x: obj.pageX,
    y: obj.pageY
  };
}

function touchDistance(touch1, touch2) {
  const dx = Math.abs(touch2.x - touch1.x);
  const dy = Math.abs(touch2.y - touch1.y);
  return Math.sqrt(dx*dx + dy*dy);
}

function getMidpoint(point1, point2) {
  return {
    x: (point1.x + point2.x) / 2,
    y: (point1.y + point2.y) / 2
  };
}

function getPoints(e) {
  if (e.touches) {
    return [...e.touches].map(getXY);
  }
  else {
    return [getXY(e)];
  }
}

export default PanZoom;
