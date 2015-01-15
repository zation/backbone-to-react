var app = app || {};

(function () {
	'use strict';

	app.TodoItem = React.createClass({

		render: function() {
			var todoData = this.props.todo.toJSON();
			return (
				<div>
					<div className="view">
						<input className="toggle" type="checkbox" checked={todoData.completed} />
						<label>{todoData.title}</label>
						<button className="destroy"></button>
					</div>
					<input className="edit" defaultValue={todoData.title} />
				</div>
			);
		}
	});
})();