import _ from '../constants';

export default (entity = {}, { type, data }) => {
  let newEntity = entity;

  switch (type) {
    case _.FETCH_ENTITY:
      newEntity = {};
      break;
  }

  return newEntity;
}
