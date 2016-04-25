import config from '../../config';
import { Button, Glyphicon, Input } from 'react-bootstrap';

export default class Filters extends React.Component {
  constructor(p) {
    super(p);
    this.state = config.search.reduce((initialState, value) => initialState[value.by] = {}, {});
  }
  updateState(filter, value) {
    let obj = {};
    obj[filter.by] = value;
    this.setState(obj);
  }
  render() {
    const { onFilter } = this.props;
    const filterButtons = config.search.map(({ by, type, options = [] }) => {
      switch(type) {
        case '+linear': case '-linear': case 'linear':
          let value;
          return <Input onChange={e => this.updateState({ by, type }, e.target.value)}
            key={by} label={`${by} (${this.state[by] || 'Move slider'})`} type="range" min="0" max="100" defaultValue={0}
          />;
        case 'string':
          return <Input key={by} type="text" placeholder={`Enter ${by}`}
            onChange={e => this.updateState({ by, type }, e.target.value)}
          />;
          // TODO: Work on enum
        case 'enum':
          return <div key={by} className="form-inline">
            <h5>{by}</h5>
            {options.map(option => <Input key={option} onChange={e => this.updateState({ by, type }, e.target.value)} type="checkbox" label={option} />)}
          </div>;
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
