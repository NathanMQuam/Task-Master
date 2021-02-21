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
      let tasksRemaining = 0
      this.items.forEach( i => {
         let check = i.complete ? 'fa-check-circle' : 'fa-circle'
         //<button class="btn btn-primary" onclick="app.listsController.listItemComplete('${i.id}', '${this.id}')">${check}</button>
         result += /*html*/`
            <li class="list-group-item">
               <i class="btn btn-primary fa ${check}" onclick="app.listsController.listItemComplete('${i.id}', '${this.id}')"></i>
               ${i.complete ? '<s>' + i.name + '</s>' : i.name}
               <button class="btn btn-danger position-absolute delete-button-toggle" onclick="app.listsController.deleteListItem('${i.id}', '${this.id}')" style="right: 1rem; top: 0.5rem; display: none;">Delete List Item</button>
            </li>
         `
         if ( !i.complete )
            tasksRemaining++
      }
      )

      return /*html*/`
         <div class="col">
            <div class="card shadow">
               <div class="card-header d-flex justify-content-between align-items-center list-title" style="background-color: ${this.color};">
                  <b>${this.title}</b>
                  <span>Tasks remaining: ${tasksRemaining}/${this.items.length}</span>
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
      `
   }
}