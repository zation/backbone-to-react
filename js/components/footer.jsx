var app = app || {};

(function() {
  'use strict';

  app.Footer = React.createClass({
    render: function() {
      var todos = this.props.todos,
        remaining = todos.remaining().length,
        completed = todos.completed().length,
        clearButton;
      if (completed) {
        clearButton = <button id="clear-completed">Clear completed ({completed})</button>
      }
      return todos.length === 0 ? null : (
        <footer id="footer">
          <span id="todo-count">
            <strong>{remaining}</strong>
            {remaining === 1 ? 'item' : 'items'} left
          </span>
          <ul id="filters">
            <li>
              <a class="selected" href="#/">All</a>
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