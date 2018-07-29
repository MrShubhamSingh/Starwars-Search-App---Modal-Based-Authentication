export const character = (state = null, {type,payload}) => {
  switch (type) {

    case 'GET_DETAILS_SUCCESS': {
      return Object.assign({}, payload);
    }

    case 'CLEAR_DETAILS':
    case 'GET_DETAILS_ERROR': {
      return null;
    }

    default:
      return state;
  }
};
