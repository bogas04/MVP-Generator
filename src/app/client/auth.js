export default function auth(showIfAuth) {
  return (nextState, transition) => {
    if (showIfAuth && localStorage.getItem('token') === null) {
      transition({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    } else if (!showIfAuth && localStorage.getItem('token') !== null) {
      transition({
        pathname: '/profile',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };
}
