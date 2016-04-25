import _ from '../constants';

export default (keyword = '', { type, data }) => {
  let newKeyword = keyword;
  console.log(data.keyword);
  switch (type) {
    case _.REPLACE_SEARCH_KEYWORD:
      newKeyword = data.keyword;
      break;
  }
  return newKeyword;
};
