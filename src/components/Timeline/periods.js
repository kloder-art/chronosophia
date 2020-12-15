import moment from 'moment';

export default [
  {
    id: 'old',
    content: 'Antigua',
    start: moment().year(-600),
    end: moment().year(500),
    type: 'background',
  },
  {
    id: 'medievo',
    content: 'Medieval',
    start: moment().year(500),
    end: moment().year(1600),
    type: 'background',
    className: 'negative',
  },
  {
    id: 'modern',
    content: 'Moderna',
    start: moment().year(1600),
    end: moment().year(1800),
    type: 'background',
  },
  {
    id: 'contemporanea',
    content: 'Contemporánea',
    start: moment().year(1800),
    end: moment().year(2000),
    type: 'background',
    className: 'negative',
  },
];
