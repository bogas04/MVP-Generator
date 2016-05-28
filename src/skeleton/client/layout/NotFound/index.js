import { Grid } from 'react-bootstrap';

export default function NotFound ({ location }) {
  return (
    <Grid className="NotFound" fluid>
      <h1> 404 Page Not Found 😞 </h1>
      <p> Couldn't find the page you requested for <code>{location.pathname}</code></p>
    </Grid>
  );
};
