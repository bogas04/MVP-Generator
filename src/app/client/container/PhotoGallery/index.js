import Loader from 'react-loader';
import PhotoGallery from '../../layout/PhotoGallery';

export default class PhotoGalleryContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loaded: true,
      photos: [
        {src: 'http://lorempixel.com/1440/900/food/', title: 'Delicious!'},
        {src: 'http://lorempixel.com/1440/900/sports/', title: 'Wow'},
        {src: 'http://lorempixel.com/1440/900/people/', title: 'I love this a lot'},
        {src: 'http://lorempixel.com/1440/900/transport/', title: 'Travel is fun'},
        {src: 'http://lorempixel.com/1440/900/fashion/', title: 'Gorgeous'},
        {src: 'http://lorempixel.com/1440/900/nightlife/', title: 'So soothing!'},
      ],
    };
  }
  render () {
    const { photos } = this.state;
    return <Loader loaded={this.state.loaded} radius={50}>
      <PhotoGallery photos={photos} />
    </Loader>;
  }
  componentDidMount () {
    //fetch('/photos.json')
    //.then(r => r.json())
    //.then(photos => {
    //this.setState({ photos });
    //})
    //.catch(error => {
    //console.error(error);
    //this.setState({ photos: [] });
    //});
  }
}
