export default {
  header: ({ cover_photo }) => ({
    backgroundImage: `url(${cover_photo})`,
    boxShadow: '0 0 100px 50px black inset',
    margin: '-10px -10px 10px -10px',
    padding: '20px 10px',
  }),
  wrapper: {
    overflow: 'hidden',
    border: '1px solid grey',
    borderRadius: '5px',
    boxShadow: '0 0 9px -5px grey',
    padding: '10px',
    margin: '10px',
  },
  image: {
    borderRadius: '50%',
    width: '201%',
    margin: '-11px -17px',
  },
};
