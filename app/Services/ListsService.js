import { ProxyState } from "../AppState.js";

class ListsService {
   constructor() {
      console.log('ListsService Initialized!');
      //ProxyState.on('lists', saveState)
   }
   
   createList({ title, color }) {
      console.log('createList(', title, color, ') from ListService');
   }

   createListItem({itemTitle}) {
      console.log('create item:', itemTitle);
   }

   listItemComplete(itemId) {
      console.log('Completed list item:', itemId);
   }

   deleteList(listId) {
      console.log('Tried to delete list:', listId);
   }

   deleteListItem(itemId) {
      console.log('Tried to delete List Item:', itemId);
   }

}

export const listsService = new ListsService()