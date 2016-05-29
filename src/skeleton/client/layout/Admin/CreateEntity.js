import { HelpBlock, FormGroup, Radio, FormControl, Button, Grid, Col, Glyphicon } from 'react-bootstrap';
import Map from '../Map';
import { LinkContainer as LC } from 'react-router-bootstrap';
import Loader from 'react-loader';
import Feed from '../Feed';
import Dropzone from 'react-dropzone';
import { logout } from '../../flux/actionCreators';
import styles from './styles';
import config from '../../config';

export default class CreateEntity extends React.Component {
  constructor(p) {
    super(p);
    this.state = { 
      title: '',
      description: '',
      cover_photo: '',
      profile_photo: '',
      email: '',
      phone: '',
      location: { lon: 0, lat: 0, zoom: 1, },
    };
  }
  render () {
    const { user, loggedIn } = this.props;
    const capsify = txt => (txt && txt.length) > 0 ? (txt[0].toUpperCase() + txt.slice(1)) : '';

    const filterButtons = config.search.map(({ by, type, options = [] }) => {
      let By = capsify(by);

      switch(type) {
        case '+linear': case '-linear': case 'linear':
          let value;
        return <FormGroup key={by}>
          <label>{By} {this.state[by]}</label>
          <FormControl onChange={e => this.update(by, e)} key={by} type="range" min="0" max="100" defaultValue={0} />
        </FormGroup>;

      case 'string':
        return <FormGroup key={by}>
          <label>{By} {this.state[by]}</label>
          <FormControl key={by} type="text" placeholder={`Enter ${By}`} onChange={e => this.update(by, e)} />
        </FormGroup>;

      case 'enum':
        return <FormGroup key={by}>
          <label>{By}</label>
          {options.map(o => <span key={o}> <input type="radio" name={by} value={o} onChange={e => this.update(by, e)} /> {capsify(o)} </span>)}
        </FormGroup>;
      }
    });

    return <Grid>
      <h1> Enter entity details </h1>

      <form onSubmit={e => this.submit(e)} >
        <FormGroup>
          <label>General Information</label>
          <FormControl onChange={e => this.update('title', e)} type="text" placeholder="Title" label="Title" />
          <FormControl onChange={e => this.update('description', e)} componentClass="textarea" rows="5" placeholder="Description" label="Description" />
        </FormGroup>

        <FormGroup> 
          <label>Photos</label>
          <Grid>
            <Col md={6}>
              <Dropzone accept="image/*" ref="cover_photo_dropzone" multiple={false}
                onDrop={files => this.addPhoto('cover_photo', files)}>
                Upload Cover Photo
                <img src={this.state.cover_photo.preview} width="100%"/>
              </Dropzone>
            </Col>
            <Col md={6}>
              <Dropzone accept="image/*" ref="profile_photo_dropzone" multiple={false}
                onDrop={files => this.addPhoto('profile_photo', files)}>
                Upload Profile Photo
                <img src={this.state.profile_photo.preview} width="100%"/>
              </Dropzone>
            </Col>
          </Grid>
        </FormGroup> 

        <FormGroup>
          <label>Contact Information</label>
          <Grid>
            <Col md={6}> <FormControl type="text" onChange={e => this.update('phone', e)} placeholder="Phone" label="Phone" /> </Col>
            <Col md={6}> <FormControl type="email" onChange={e => this.update('email', e)} placeholder="Email" label="Email" /> </Col>
          </Grid>
        </FormGroup>

        <FormGroup>
          <label>Location Information</label>
          <Grid>
            <Col md={3}>
              <span>Latitude {this.state.location.lat}</span>
              <FormControl onChange={e => this.update('lat', e)} type="number" step="0.001" min="-90" max="90"/>

              <span>Longitude {this.state.location.lon}</span>
              <FormControl onChange={e => this.update('lon', e)} type="number" step="0.001" min="-180" max="180"/>

              <span>Zoom {this.state.location.zoom}</span>
              <FormControl onChange={e => this.update('zoom', e)} type="number" min="1" max="15"/>
            </Col>
            <Col md={9}> <Map location={this.state.location} title={this.state.title} width="100%" height="300px"/> </Col>
          </Grid>
        </FormGroup>

        <FormGroup>
          <label>Other Attributes</label>
          {filterButtons}
        </FormGroup>

        <Button type="submit">Create</Button>
      </form>

    </Grid>;
  }
  update(type, e) {
    let value = e.currentTarget.value;
    let state = this.state;

    switch(type) {
      case 'lat': case 'lon': case 'zoom': state.location[type] = value; break;
      default: state[type] = value; break;
    }
    this.setState(state);
  }
  addPhoto(type, file) {
    let state = {};
    state[type] = file[0];
    this.setState(state);
  }
  submit(e) {
    e.preventDefault();

    let body = new FormData();

    Object.keys(this.state).map(key => (
      key === 'location'
        ? body.append(key, JSON.stringify(this.state[key])) 
        : body.append(key, this.state[key])
    ))

    fetch(`/entity.json`, {
      headers: { 'token': localStorage.getItem('token') },
      method: 'post', body,
    })
    .then(r => r.json())
    .then(r => console.log(r));
  }
}
