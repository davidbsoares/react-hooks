export default function reducer(state, action) {
  switch (action.type) {
    case 'numberAdd2':
      return { ...state, number: state.number + 2 };
    case 'numberTimes7':
      return { ...state, number: state.number * 7 };
    case 'numberDivide25':
      return { ...state, number: state.number / 25 };
    case 'numberParseInt':
      return { ...state, number: parseInt(state.number) };
    case 'numberAddN':
      return { ...state, number: state.number + action.payload };
    case 'login':
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}
