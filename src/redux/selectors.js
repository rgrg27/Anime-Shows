export function addItemToStore(itemId){
    var localStore = window.localStorage;
    var likedItemsIdsArray = getLikedItemsIds();
    if(!likedItemsIdsArray){
      likedItemsIdsArray = [];
    }
    likedItemsIdsArray.push(itemId);
    localStore.setItem("likedItemsIds", JSON.stringify(likedItemsIdsArray));
    console.log("item :"+itemId+" added");
  }
export function isItemInStore(itemId){
    var likedItemsIdsArray = getLikedItemsIds();
    if(likedItemsIdsArray){
      for(let i = 0; i<likedItemsIdsArray.length; i++){
        if(itemId ===likedItemsIdsArray[i]){
          return true;
      }
    }
  }
  return false;
}
export function getLikedItemsIds(){
  var localStore = window.localStorage;
  var likedItemsIds = localStore.getItem("likedItemsIds");
  var likedItemsIdsArray = JSON.parse(likedItemsIds);
    if(likedItemsIds === null){
      return [];
  }
  else{
    return likedItemsIdsArray;
  }
} 

