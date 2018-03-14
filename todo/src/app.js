console.log("App js is running");
let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];

const app = {
    title: "Todo React App"
}

const add = () => {
    let monthArray = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateTime = new Date();
    let month = dateTime.getMonth();
    let month1 = monthArray[month];
    let date = dateTime.getDate();
    let year = dateTime.getFullYear();

  console.log(month1,'',date,',',year)
    const todoItem = todo.value;
    if (todoItem) {
        todoArray.push(todoItem);
        todo.value = '';
        render();
    }
}

const deleteItem = (indexNumItem) => {
    Materialize.showStaggeredList('#collection-item-id');
    Materialize.toast('Deleted', 2000);
    todoArray.splice(indexNumItem, 1);
    render();

}

const editItem = (itemToEdit, indexNumItem) => {
   
    console.log(indexNumItem, itemToEdit)
    
}

const removeAll = () => {
    todoArray = [];
    render();
}

const render = () => {
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
    const p = (
        <div>
            <h2 className="white-text grey darken-2 center">{app.title}</h2>
            <div className="container">

                <div className="row">
                    <div className="input-field col s12 m12 l8 col-content validate">

                        <input type="text" id="todo"/>
                        <label htmlFor="todo">Enter your todo</label>
                    </div>

                    <div className="input-field col s12 m12 l4 center">
                        <a
                            className="waves-effect waves-light btn col-content"
                            onClick={() => {
                            add()
                        }}>Add</a>

                        <a
                            className="waves-effect waves-light btn col-content red"
                            disabled={todoArray.length <= 0}
                            onClick={() => {
                            removeAll()
                        }}>Remove All</a>
                    </div>

                </div>

                {todoArray.length > 0
                    ? <ul className="collection">

                            {todoArray.map((todoList, i) => {
                                return (
                                    <a id="collection-item-id" className="collection-item">
                                        <div>
                                            <input type="checkbox"/> {todoList}
                                            <span className="secondary-content">
                                                <i
                                                    
                                                    className="material-icons modal-trigger"
                                                    onClick={() => editItem(todoList, i)}>edit</i>
                                                <i className="material-icons" onClick={() => deleteItem(i)}>delete</i>
                                            </span>
                                        </div>
                                    </a>
                                )
                            })}
                        </ul>
                    : <p className="card-panel teal lighten-4 center red-text fade">Your List is Empty</p>}
            </div>
        </div>
    );
    ReactDOM.render(p, document.getElementById('root'));
};
render();