var app = app || {};

(function() {
  'use strict';

  var TodoList = app.TodoList;

  app.Main = React.createClass({
    toggleAllComplete: function () {
      var completed = this.refs.allCheckbox.getDOMNode().checked;

      this.props.todos.each(function (todo) {
        todo.save({
          completed: completed
        });
      });
    },

    render: function() {
      var todos = this.props.todos;
      return todos.length === 0 ? null : (
        <section id="main">
          <input id="toggle-all"
            type="checkbox"
            ref="allCheckbox"
            onClick={this.toggleAllComplete}
            defaultChecked={!todos.remaining().length} />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <TodoList todos={todos}/>
        </section>
      );
    }
  });
})();