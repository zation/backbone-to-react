var app = app || {};

(function() {
  'use strict';

  app.Footer = React.createClass({
    // Clear all completed todo items, destroying their models.
    clearCompleted: function () {
      _.invoke(this.props.todos.completed(), 'destroy');
    },

    render: function() {
      var todos = this.props.todos,
        remaining = todos.remaining().length,
        completed = todos.completed().length,
        clearButton;
      if (completed) {
        clearButton = <button id="clear-completed" onClick={this.clearCompleted}>Clear completed ({completed})</button>
      }
      return todos.length === 0 ? null : (
        <footer id="footer">
          <span id="todo-count">
            <strong>{remaining}</strong>&nbsp;
            {remaining === 1 ? 'item' : 'items'} left
          </span>
          <ul id="filters">
            <li>
              <a className="selected" href="#/">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          {clearButton}
        </footer>
      );
    }
  });
})();