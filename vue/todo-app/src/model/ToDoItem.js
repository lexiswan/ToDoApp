//clasa cu care vom prezenta elementele aplicatiei

class ToDoItem {

    //OBIECTELE VOR AVEA CONTINUTUL ID COMPLETED
    constructor(content, date) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
        this.date = date;
        this.completed = false;
    }
// citim elementele din local storage
static fromJSON (json) {
    let toDoItem = new ToDoItem();
    toDoItem.id = json.id;
    toDoItem.content = json.content;
    toDoItem.date = json.date;
    toDoItem.completed = json.completed;

    return toDoItem;
    }
}
//o exportam ca sa o putem importa in alte module
export default ToDoItem;