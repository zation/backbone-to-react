var app = app || {};

(function () {
  'use strict';
  var TodoItem = app.TodoItem;

  app.TodoList = React.createClass({
    render: function() {
      var list =  this.props.todos.map(function(todo) {
        return <TodoItem key={todo.get('id')} todo={todo}/>
      });
      return <ul id="todo-list">{list}</ul>
    }
  });
})();