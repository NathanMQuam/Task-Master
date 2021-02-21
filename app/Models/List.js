import { generateId } from "../Utils/GenerateId.js";

export default class List {
   constructor( { title, color, id = generateId(), items = [] } ) {
      this.title = title
      this.color = color
      this.id = id
      this.items = items

      console.log( 'New List created:', this );
   }

   addItem ( itemName ) {
      console.log( 'item:', itemName, 'added to list:', this.title, this.id )

      this.items.push( { name: itemName, id: generateId(), complete: false } )
   }

   toggleItemComplete ( itemId ) {
      console.log( 'toggle complete:', itemId )
   }

   get Template () {
      let result = ''
      this.items.forEach( i => result += /*html*/`
         <li class="list-group-item">
            <button class="btn btn-primary" onclick="app.listsController.listItemComplete('${i.id}', '${this.id}')">C?</button>
            ${i.name}
            <button class="btn btn-danger position-absolute delete-button-toggle" onclick="app.listsController.deleteListItem('${i.id}', '${this.id}')" style="right: 1rem; top: 0.5rem; display: none;">Delete List Item</button>
         </li>
      `
      )

      return /*html*/`
         <div class="row py-3" id="row1">
            <div class="col">
               <div class="card shadow">
                  <div class="card-header d-flex justify-content-between align-items-center">
                     <b>${this.title}</b>
                     <form onsubmit="app.listsController.createNewListItem(event, '${this.id}')" class="delete-button-toggle" style="display: block;">
                        <input type="text" name="itemTitle" placeholder="New Task Name" minLength="3" maxLength="50" required>
                        <button type="submit" class="btn btn-primary shadow-sm">
                           +
                        </button>
                     </form>
                     <button type="button" class="delete-button-toggle btn btn-danger" style="display: none;" onclick="app.listsController.deleteList('${this.id}')">Delete this task list?</button>
                  </div>
                  <ul class="list-group list-group-flush position-relative">
                        ${result}
                  </ul>
               </div>
            </div>
         </div>
      `
   }
}