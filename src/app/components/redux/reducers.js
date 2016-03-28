import _ from './constants';

export default (state, { type, data }) => {
  let newState = state;

  switch (type) {
    case _.LOGIN:
      newState = Object.assign({}, state, { user: 'yolo' });
      break;

    case _.LOGOUT:
      newState = Object.assign({}, state, { user: 'yolo' });
      break;
  }

  return newState;
}
