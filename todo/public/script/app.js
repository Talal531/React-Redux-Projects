"use strict";

console.log("App js is running");
var todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];

var app = {
    title: "Todo React App"
};

var add = function add() {
    var monthArray = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dateTime = new Date();
    var month = dateTime.getMonth();
    var month1 = monthArray[month];
    var date = dateTime.getDate();
    var year = dateTime.getFullYear();

    console.log(month1, '', date, ',', year);
    var todoItem = todo.value;
    if (todoItem) {
        todoArray.push(todoItem);
        todo.value = '';
        render();
    }
};

var deleteItem = function deleteItem(indexNumItem) {
    Materialize.showStaggeredList('#collection-item-id');
    Materialize.toast('Deleted', 2000);
    todoArray.splice(indexNumItem, 1);
    render();
};

var editItem = function editItem(itemToEdit, indexNumItem) {

    console.log(indexNumItem, itemToEdit);
};

var removeAll = function removeAll() {
    todoArray = [];
    render();
};

var render = function render() {
    localStorage.setItem("todoArray", JSON.stringify(todoArray));
    var p = React.createElement(
        "div",
        null,
        React.createElement(
            "h2",
            { className: "white-text grey darken-2 center" },
            app.title
        ),
        React.createElement(
            "div",
            { className: "container" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "input-field col s12 m12 l8 col-content validate" },
                    React.createElement("input", { type: "text", id: "todo" }),
                    React.createElement(
                        "label",
                        { htmlFor: "todo" },
                        "Enter your todo"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "input-field col s12 m12 l4 center" },
                    React.createElement(
                        "a",
                        {
                            className: "waves-effect waves-light btn col-content",
                            onClick: function onClick() {
                                add();
                            } },
                        "Add"
                    ),
                    React.createElement(
                        "a",
                        {
                            className: "waves-effect waves-light btn col-content red",
                            disabled: todoArray.length <= 0,
                            onClick: function onClick() {
                                removeAll();
                            } },
                        "Remove All"
                    )
                )
            ),
            todoArray.length > 0 ? React.createElement(
                "ul",
                { className: "collection" },
                todoArray.map(function (todoList, i) {
                    return React.createElement(
                        "a",
                        { id: "collection-item-id", className: "collection-item" },
                        React.createElement(
                            "div",
                            null,
                            React.createElement("input", { type: "checkbox" }),
                            " ",
                            todoList,
                            React.createElement(
                                "span",
                                { className: "secondary-content" },
                                React.createElement(
                                    "i",
                                    {

                                        className: "material-icons modal-trigger",
                                        onClick: function onClick() {
                                            return editItem(todoList, i);
                                        } },
                                    "edit"
                                ),
                                React.createElement(
                                    "i",
                                    { className: "material-icons", onClick: function onClick() {
                                            return deleteItem(i);
                                        } },
                                    "delete"
                                )
                            )
                        )
                    );
                })
            ) : React.createElement(
                "p",
                { className: "card-panel teal lighten-4 center red-text fade" },
                "Your List is Empty"
            )
        )
    );
    ReactDOM.render(p, document.getElementById('root'));
};
render();
