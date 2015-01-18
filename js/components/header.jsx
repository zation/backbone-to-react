var app = app || {};

(function() {
  'use strict';

  app.Header = React.createClass({
    // If you hit return in the main input field, create new **Todo** model,
    // persisting it to *localStorage*.
    createOnEnter: function(e) {
      var input = this.refs.newInput.getDOMNode(),
        todos = this.props.todos;
      if (e.which === ENTER_KEY && input.value.trim()) {
        todos.create({
          title: input.value.trim(),
          order: todos.nextOrder(),
          completed: false
        });
        input.value = '';
      }
    },

    render: function() {
      return (
        <header id="header">
          <h1>todos</h1>
          <input onKeyPress={this.createOnEnter}
            id="new-todo"
            ref="newInput"
            placeholder="What needs to be done?"
            autofocus />
        </header>
      );
    }
  });
})();