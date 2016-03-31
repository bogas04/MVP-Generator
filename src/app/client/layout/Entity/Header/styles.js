export default {
  wrapper: cover => ({
    minHeight: '250px',
    background: `url(${cover}) no-repeat 100% 100% / 100%`,
    backgroundSize: 'cover',
    backgroundColor: 'grey',
    boxShadow: '0 0 200px 100px black inset',
    color: 'white',
    padding: '30px 10px',
    margin: '0',
  }),
  profile: {
    width: '100%',
    borderRadius: '100%',
  },
  content: {
    textShadow: '0 0 2px black',
  },
};
