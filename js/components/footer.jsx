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
        routers = [{
          name: 'All',
          path: ''
        }, {
          name: 'Active',
          path: 'active'
        }, {
          name: 'Completed',
          path: 'completed'
        }],
        filters = _(routers).map(function(router) {
          return (
            <li key={router.path}>
              <a className={React.addons.classSet({
                'selected': app.TodoFilter === router.path
              })} href={'#/' + router.path}>{router.name}</a>
            </li>
          );
        }),
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
            {filters}
          </ul>
          {clearButton}
        </footer>
      );
    }
  });
})();