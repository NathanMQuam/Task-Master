import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"

// Private
function _draw() {
   let listsElem = document.getElementById('app')
   let template = ''
   ProxyState.lists.forEach(l => template += l.Template)
   listsElem.innerHTML = template
}


// Public
export default class ListsController {
   constructor() {
      ProxyState.on('lists', _draw)
      _draw()
      console.log('ListsController Initialized!');
   }

   createNewList(event) {
      event.preventDefault()
         let form = event.target;
         let rawList = { title: form.listTitle.value, color: form.listColor.value }
      listsService.createList(rawList)
   }

   createNewListItem(event) {
      event.preventDefault()
         let form = event.target;
         let rawListItem = { itemTitle: form.itemTitle.value }
      listsService.createListItem(rawListItem)
   }

   listItemComplete(itemId) {
      listsService.listItemComplete(itemId)
   }

   deleteList(listId) {
      listsService.deleteList(listId)
   }

   deleteListItem(itemId) {
      listsService.deleteListItem(itemId)
   }
}