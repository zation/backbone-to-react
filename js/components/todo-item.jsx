var app = app || {};

(function () {
	'use strict';

	app.TodoItem = React.createClass({

		getInitialState: function() {
			return {
				completed: this.props.todo.get('completed')
			};
		},

		// Toggle the `"completed"` state of the model.
		toggleCompleted: function () {
			this.setState({
				completed: this.props.todo.toggle()
			});
		},

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: function () {
			this.refs.editInput.getDOMNode().focus();
		},

		render: function() {
			var todoData = this.props.todo.toJSON();
			return (
				<div>
					<div className="view">
						<input className="toggle"
							type="checkbox"
							checked={this.state.completed}
							onChange={this.toggleCompleted}/>
						<label onDoubleClick={this.edit}>{todoData.title}</label>
						<button className="destroy"></button>
					</div>
					<input ref="editInput" className="edit" defaultValue={todoData.title} />
				</div>
			);
		}
	});
})();
