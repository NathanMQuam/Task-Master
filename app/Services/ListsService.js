import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

function _updateLists () {
   ProxyState.lists = ProxyState.lists
}

class ListsService {
   constructor() {
      console.log( 'ListsService Initialized!' );
      //ProxyState.on('lists', saveState)
   }

   createList ( { title, color } ) {
      console.log( 'createList(', title, color, ') from ListService' );

      ProxyState.lists = [new List( { title, color } ), ...ProxyState.lists]
   }

   createListItem ( listId, itemTitle ) {
      console.log( 'create item:', itemTitle, listId );

      ProxyState.lists.find( l => l.id == listId ).addItem( itemTitle )

      _updateLists()
   }

   listItemComplete ( itemId, listId ) {
      console.log( 'Completed list item:', itemId );
      let item = ProxyState.lists.find( l => l.id == listId ).items.find( i => i.id == itemId )

      item.complete = !item.complete

      _updateLists()
      console.log( item.id, item.complete );
   }

   deleteListItem ( itemId, listId ) {
      console.log( 'Tried to delete List Item:', itemId );

      let list = ProxyState.lists.find( l => l.id == listId )
      let itemIndex = list.items.findIndex( i => i.id == itemId )

      list.items.splice( itemIndex, 1 )

      _updateLists()
   }

   deleteList ( listId ) {
      console.log( 'Tried to delete list:', listId );
      let listIndex = ProxyState.lists.findIndex( l => l.id == listId )

      ProxyState.lists.splice( listIndex, 1 )

      _updateLists()
   }

}

export const listsService = new ListsService()