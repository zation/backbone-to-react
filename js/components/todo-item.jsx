var app = app || {};

(function () {
	'use strict';

	app.TodoItem = React.createClass({

		getInitialState: function() {
			return {
				isEditing: false
			};
		},

		// Switch this view into `"editing"` mode, displaying the input field.
		edit: function () {
			this.setState({
				isEditing: true
			});
			// TODO: should find a good way to focus input after it's visible
			var editInput = this.refs.editInput;
			window.setTimeout(function() {
				editInput.getDOMNode().focus();
			}, 1);
		},

		// Close the `"editing"` mode, saving changes to the todo.
		close: function () {
			var value = this.refs.editInput.getDOMNode().value;
			var trimmedValue = value.trim();

			// We don't want to handle blur events from an item that is no
			// longer being edited. Relying on the state here has the
			// benefit of us not having to maintain state in the DOM and the
			// JavaScript logic.
			if (!this.state.isEditing) {
				return;
			}

			if (trimmedValue) {
				this.props.todo.save({ title: trimmedValue });
			} else {
				this.clear();
			}

			this.setState({
				isEditing: false
			});
		},

		clear: function () {
			this.props.todo.destroy();
		},

		// If you hit `enter`, we're through editing the item.
		updateOnEnter: function (e) {
			if (e.which === ENTER_KEY) {
				this.close();
			}
		},

		// If you're pressing `escape` we revert your change by simply leaving
		// the `editing` state.
		revertOnEscape: function (e) {
			if (e.which === ESC_KEY) {
				this.setState({
					isEditing: false
				});
				// Also reset the hidden input back to the original value.
				this.refs.editInput.getDOMNode().value = this.props.todo.get('title');
			}
		},

		// Toggle the `"completed"` state of the model.
		toggleCompleted: function () {
			this.props.todo.toggle();
		},

		render: function() {
			var todo = this.props.todo.toJSON();
			return (
				<li className={React.addons.classSet({
					'completed': todo.completed,
					'editing': this.state.isEditing,
					'hidden': todo.completed ? app.TodoFilter === 'active' : app.TodoFilter === 'completed'
				})}>
					<input className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={this.toggleCompleted}/>
					<label onDoubleClick={this.edit}>{todo.title}</label>
					<button onClick={this.clear} className="destroy"></button>
					<input ref="editInput"
						onBlur={this.close}
						className="edit"
						onKeyPress={this.updateOnEnter}
						onKeyDown={this.revertOnEscape}
						defaultValue={todo.title} />
				</li>
			);
		}
	});
})();
