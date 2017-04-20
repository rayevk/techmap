import CONFIG from './config';

function uniq(a) {
   return Array.from(new Set(a));
}

function applyFilters(obj, filters) {
  for (let key in filters) {
    if (obj[key] === undefined || obj[key] !== decodeURIComponent(filters[key]))
      return false;
  }
  return true;
}

function getThemeColor(industry) {
  const theme = CONFIG.themes.find(theme => theme.industry === industry) || { color: '#e2e8f0' };
  return theme.color;
}

export {
  uniq,
  applyFilters,
  getThemeColor
};
