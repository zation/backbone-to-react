var app = app || {};

(function() {
  'use strict';
  var Header = app.Header,
    Main = app.Main,
    Footer = app.Footer;

  app.App = React.createClass({
    render: function() {
      var todos = this.props.todos;
      return (
        <section id="todoapp">
          <Header todos={todos}/>
          <Main todos={todos}/>
          <Footer todos={todos}/>
        </section>
      );
    }
  });
})();