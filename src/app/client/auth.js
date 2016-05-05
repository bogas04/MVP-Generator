export default function auth(showIfAuth, pathname = '/profile') {
  return (nextState, transition) => {
    if (showIfAuth && localStorage.getItem('token') === null) {
      transition({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    } else if (!showIfAuth && localStorage.getItem('token') !== null) {
      transition({
        pathname,
        state: { nextPathname: nextState.location.pathname }
      });
    }
  };
}
