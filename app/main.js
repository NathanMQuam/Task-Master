// import ValuesController from "./Controllers/ValuesController.js";
import ListsController from "./Controllers/ListsController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  // valuesController = new ValuesController();
  listsController = new ListsController()
}

window["app"] = new App();
loadState()




/** NOTE: Requirements
 * TODO: All lists and tasks are rendered on load/reload
 * TODO: Lists are displayed out in columns across the page
 * DONE: Lists can be Created
 * DONE: Lists and tasks each have a delete button
 * TODO: List creation must include a title limited to 3-15 characters
 * TODO: List creation must include a color picker or minimum 5 different colors
 * TODO: Lists include a count of all tasks compared to uncompleted tasks
 * DONE: Each List must have its own Task form
 * TODO: Task title/body must be between 3-50 characters
 * TODO: Tasks can be marked complete, this will persist on reload
 * TODO: Forms should not submit unless the fields adhere to the requirements
 * TODO: Lists can be Deleted
 * DONE: Tasks can be Deleted (separate from being marked complete)
 * TODO: Users are prompted to confirm any delete (search window.confirm)
 * TODO: All Data persists through local storage
*/

/** NOTE: Stretch Goals
 * Use something like masonry to render the lists more elegantly
 * Use a better popup then window.confirm for a more clean user experience (see the SweetAlertJS documentation for ideas on this)
 * Play with the styling on 'completed' tasks to include a strikethrough
 * Add Toast notifications to encourage completed tasks
 */