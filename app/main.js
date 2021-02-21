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
 * DONE: All lists and tasks are rendered on load/reload
 * DONE: Lists are displayed out in columns across the page
 * DONE: Lists can be Created
 * DONE: Lists and tasks each have a delete button
 * DONE: List creation must include a title limited to 3-15 characters
 * DONE: List creation must include a color picker or minimum 5 different colors
 * DONE: Lists include a count of all tasks compared to uncompleted tasks
 * DONE: Each List must have its own Task form
 * DONE: Task title/body must be between 3-50 characters
 * DONE: Tasks can be marked complete, this will persist on reload
 * DONE: Forms should not submit unless the fields adhere to the requirements
 * DONE: Lists can be Deleted
 * DONE: Tasks can be Deleted (separate from being marked complete)
 * TODO: Users are prompted to confirm any delete (search window.confirm)
 * DONE: All Data persists through local storage
*/

/** NOTE: Stretch Goals
 * Use something like masonry to render the lists more elegantly
 * Use a better popup then window.confirm for a more clean user experience (see the SweetAlertJS documentation for ideas on this)
 * Play with the styling on 'completed' tasks to include a strikethrough
 * Add Toast notifications to encourage completed tasks
 */