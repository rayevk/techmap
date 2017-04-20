import CONFIG from './config';

function uniq(a) {
   return Array.from(new Set(a));
}

function getThemeColor(industry) {
  const theme = CONFIG.themes.find(theme => theme.industry === industry) || { color: '#e2e8f0' };
  return theme.color;
}

export {
  uniq,
  getThemeColor
};
