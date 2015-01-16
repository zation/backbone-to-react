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

		render: function() {
			var todoData = this.props.todo.toJSON();
			return (
				<div>
					<div className="view">
						<input className="toggle"
							type="checkbox"
							checked={this.state.completed}
							onChange={this.toggleCompleted}/>
						<label>{todoData.title}</label>
						<button className="destroy"></button>
					</div>
					<input className="edit" defaultValue={todoData.title} />
				</div>
			);
		}
	});
})();
