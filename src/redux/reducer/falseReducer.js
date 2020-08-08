
const initialState = {
  error : null, 
  isLoaded : true,
  items : [], 
  query : "death", 
  page : 1
};

export default function falseReducer(state = initialState, action) {
  return {...state, page:1};
}

// export default function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INITIALDATA": {
//       const { items } = action.payload;
//       return Object.assign({}, state, {
//         items: items
//       })
//     }
//     case "SEARCHDATA": {
//       const { query, items } = action.payload;
//       return {
//         ...state,
//         items: items,
//         query: query,
//         page : 1
//       };
//     }
//     case "MOREDATA": {
//       const { items } = action.payload;
//       const updatedItems = {...state.items};
//       updatedItems.concat(items);
//       return {
//         ...state,
//         items: updatedItems,
//       };
//     }
//     case "REQUESTINPROCESS":{
//       return {...state, isLoaded : false};
//     }
//     default:
//       return state;
//   }
// }
