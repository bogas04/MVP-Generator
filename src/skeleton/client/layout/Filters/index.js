import config from '../../config';
import { FormGroup, Button, Glyphicon, FormControl } from 'react-bootstrap';

export default class Filters extends React.Component {
  constructor(p) {
    super(p);
    this.state = config.search.reduce((initialState, value) => {
      initialState[value.by] = { value: '', type: value.type };
      return initialState;
    }, {});
  }
  update(filter, e) {
    let { value } = e.currentTarget, obj = {};
    obj[filter.by] = { value, type: this.state[filter.by].type };
    this.setState(obj);
  }
  render() {
    const { onFilter } = this.props;

    const filterButtons = config.search.map(({ by, type, options = [] }) => {
      const capsify = txt => (txt && txt.length) > 0 ? (txt[0].toUpperCase() + txt.slice(1)) : '';

      let filter = { by, type };
      let By = capsify(by);

      switch(type) {
        case '+linear': case '-linear': case 'linear':
          return <FormGroup key={by}>
            <label>{By} {this.state[by].value}</label>
            <FormControl onChange={e => this.update(filter, e)} key={by} type="range" min="0" max="100" defaultValue={0} />
          </FormGroup>;

        case 'string':
          return <FormGroup key={by}>
            <label>{By} {this.state[by].value}</label>
            <FormControl key={by} type="text" placeholder={`Enter ${By}`} onChange={e => this.update(filter, e)} />
          </FormGroup>;

        case 'enum':
          return <FormGroup key={by}>
            <label>{By}</label>
            {options.map(o => <span key={o}> <input type="radio" name={by} value={o} onChange={e => this.update(filter, e)} /> {capsify(o)} </span>)}
          </FormGroup>;
      }
    });

    return (
      <div>
        <Button onClick={() => onFilter(this.state)}>Search with Filters</Button>
        {filterButtons}
      </div>
    );
  }
}
