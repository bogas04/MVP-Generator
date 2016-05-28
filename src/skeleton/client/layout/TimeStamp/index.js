import nicedate from 'nicedate';

export default ({ date }) => {
  date = new Date(date).getTime();
  return <span>{nicedate(date)}</span>
};
