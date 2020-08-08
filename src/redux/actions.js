import { getLikedItemsIds, addItemToStore} from "./selectors";
export function RequestInProcess(){
  return { type: "REQUESTINPROCESS"};
}
export function RequestInitialData(query){
  const page =1;
  const limit = 12;
  const params = {"type": "INITIALDATA", "query": query};
  const theUrl = getUrl(query,limit, page);
  return fetchData(theUrl, params );
  
}
export function RequestMoreData(query,page){
  const nextPage =page+1;
  const limit = 12;
  const params = {"type": "MOREDATA", "query": query};
  const theUrl = getUrl(query,limit, nextPage);
  return fetchData(theUrl, params );
}

export function RequestSearchData(query){
  // return {"type": "SEARCHDATA","payload": {query}}
  const page =1;
  const limit = 12;
  const params = {"type": "SEARCHDATA", "query": query};
  const theUrl = getUrl(query,limit, page);
  return fetchData(theUrl, params );
}

export function addLikeItem(itemId){
  addItemToStore(itemId);
  const likedItemsIdsArray = getLikedItemsIds();
  return{type:"ADDLIKE", payload:{likedItemsIdsArray} }
}

function getUrl(query,limit,page) {
  return "https://api.jikan.moe/v3/search/anime?q="+query+"&limit="+limit+"&page="+page;
}

function fetchData(theUrl, params) {
  return dispatch => {
    dispatch(RequestInProcess())
    return fetch(theUrl)
      .then(response => response.json())
      .then(result => dispatch(getResults(result, params)))
      }
}

function getResults(result, params){
  return ({
    type: params.type,
    payload: {
      items: result.results,
      query: params.query
    }   
  })
}

