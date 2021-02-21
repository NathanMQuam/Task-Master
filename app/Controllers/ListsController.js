import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"

// Private
function _draw () {
   let listsElem = document.getElementById( 'app' )
   let template = ''
   ProxyState.lists.forEach( l => template += l.Template )
   listsElem.innerHTML = template
}

function _toggleDelete () {
   let deleteItems = document.getElementsByClassName( 'delete-button-toggle' )
   for ( let i = 0; i < deleteItems.length; i++ ) {
      // TODO: 
   }

   console.log( 'Time to delete stuff!' );
}


// Public
export default class ListsController {
   constructor() {
      ProxyState.on( 'lists', _draw )
      _draw()
      console.log( 'ListsController Initialized!' );
   }

   createNewList ( event ) {
      event.preventDefault()
      let form = event.target;
      let rawList = { title: form.listTitle.value, color: form.listColor.value }
      listsService.createList( rawList )
   }

   createNewListItem ( event, listId ) {
      event.preventDefault()
      let form = event.target;
      let rawListItem = form.itemTitle.value
      listsService.createListItem( listId, rawListItem )
   }

   listItemComplete ( itemId, listId ) {
      listsService.listItemComplete( itemId, listId )
   }

   deleteList ( listId ) {
      listsService.deleteList( listId )
   }

   deleteListItem ( itemId, listId ) {
      listsService.deleteListItem( itemId, listId )
   }

   toggleDelete () {
      _toggleDelete()
   }
}