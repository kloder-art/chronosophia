import moment from 'moment';

export const formatDate = (year) =>
  year >= 0 ? String(year) : `${-year} b. C.`;

export const formatYearRange = (a, b) =>
  `${formatDate(a)} - ${formatDate(b)} (${b - a})`;

export const getTimelineRange = (a, b) => ({
  start: moment().year(a),
  end: moment().year(b),
});
