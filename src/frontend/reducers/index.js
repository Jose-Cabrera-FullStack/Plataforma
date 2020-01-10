const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'SELECT_DATE':
      return {
        ...state,
        myClass: [...state.myClass, action.payload],
      };
    case 'DELETE_DATE':
      return {
        ...state,
        myClass: state.myList.filter(items => items.id !== action.payload),
      };
    case 'SUBMIT_DATE':
      return {
        ...state,
        courses: action.payload,//revisar si es myClass
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
