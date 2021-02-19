import { generateId } from "../Utils/GenerateId.js";

export default class List {
   constructor ( { title, color, id = generateId() } ) {
      this.title = title
      this.color = color
      this.id = id
      this.items = []

      console.log('New List created:', this);
   }

   addItem(itemName) {
      console.log('item:', itemName,'added to list:', this.title, this.id)

      this.items.push({name: itemName, id: generateId(), complete: false})
   }

   toggleItemComplete(itemId) {
      console.log('toggle complete:', itemId)
   }

   get Template() {
      let result = ''
      this.items.forEach(i => result += /*html*/`
         <li class="list-group-item">
            <button class="btn btn-primary">C?</button>
            ${i.name}
            <button class="btn btn-danger position-absolute" onclick="app.listsController.deleteListItem('${i.id}', '${this.id}')" style="right: 1rem;">Delete List Item</button>
         </li>
      `
      )

      return /*html*/`
         <div class="row py-3" id="row1">
            <div class="col">
               <div class="card shadow">
                  <div class="card-header d-flex justify-content-between align-items-center">
                     <b>${this.title}</b>
                     <form onsubmit="app.listsController.createNewListItem(event, '${this.id}')">
                        <input type="text" name="itemTitle" placeholder="New Task Name" required>
                        <button type="submit" class="btn btn-primary shadow-sm">
                           +
                        </button>
                     </form>
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