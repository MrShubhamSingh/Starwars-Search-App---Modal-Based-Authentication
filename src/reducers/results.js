export const results = (state = [], {type,payload}) => {
  switch (type) {

    case 'SEARCH_SUCCESS': {
      return [].concat(payload.reverse());
    }

    case 'SEARCH_ERROR': {
      return [];
    }

    default:
      return state;
  }
};
