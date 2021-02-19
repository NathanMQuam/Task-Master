import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

class ListsService {
   constructor() {
      console.log('ListsService Initialized!');
      //ProxyState.on('lists', saveState)
   }
   
   createList({ title, color }) {
      console.log('createList(', title, color, ') from ListService');
      ProxyState.lists = [new List({title, color}),...ProxyState.lists]
   }

   createListItem({itemTitle}) {
      console.log('create item:', itemTitle);
   }

   listItemComplete(itemId) {
      console.log('Completed list item:', itemId);
   }

   deleteListItem(itemId) {
      console.log('Tried to delete List Item:', itemId);
   }

   deleteList(listId) {
      console.log('Tried to delete list:', listId);
   }

}

export const listsService = new ListsService()