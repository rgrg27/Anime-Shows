
const initialState = {
  error : null, 
  isLoaded : true,
  items : [], 
  query : "deat", 
  page : 1,
  likedItems: []
};




export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INITIALDATA": {
      const { items,query } = action.payload;
      return  {...state,
        items: items,
        query: query
      }
    }
    case "SEARCHDATA": {
      const {items,  query } = action.payload;
      return {
        ...state,
        items: [...items],
        query: query,
        page : 1
      };
    }
    case "MOREDATA": {
      const { items } = action.payload;
      return {
        ...state,
        items: [...state.items,...items],
        page: state.page+1
      };
    }
    case "REQUESTINPROCESS":{
      return {...state, isLoaded : false};
    }
    case "ADDLIKE":{
      const {likedItems} = action.payload;
      return {...state, likedItems : likedItems};
    }
    default:
      return state;
  }
}
