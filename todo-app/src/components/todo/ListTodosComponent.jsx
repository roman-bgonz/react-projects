import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js';
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props) {
        console.log('constructor');
        super(props);
        this.state = {
            todos: [
                // {
                //     id: 1,
                //     description: 'Learn react',
                //     done: false,
                //     targetDate: new Date()
                // },
                // {
                //     id: 2,
                //     description: 'Learn Spring boot',
                //     done: false,
                //     targetDate: new Date()
                // }
            ],
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.editTodoClicked = this.editTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
    }

    /**
     * Called just before that a component is unmounted (destroy), when a click to a another tab occurs
    */
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    /**
     * Indicates if the component should be updated, if we return true,
     * all todos values will be shown, otherwise no information will be displayed
     * @param {*} nextProps 
     * @param {*} nextState 
     * @returns 
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        return true;
    }

    /**
     * Called when the component is loaded for the first time
     */
    componentDidMount() {
        console.log('componentDidMount');
        this.refreshTodos();
    }

    refreshTodos() {
        TodoDataService.retrieveAllTodos(AuthenticationService.getLoggedInUsername()).then(
            response => { this.setState({ todos: response.data }) }

        ).catch(error => {

        });
    }

    deleteTodoClicked(id) {
        TodoDataService.deleteTodoById(AuthenticationService.getLoggedInUsername(), id).then(
            response => {
                this.setState({
                    message: `Delete of todo ${id} was successful`
                });
                this.refreshTodos();
            }
        ).catch(error => { });
        console.log(id);
    }

    editTodoClicked(id) {
        this.props.history.push(`/todos/${id}`)
    }

    addTodoClicked() {
        this.props.history.push(`/todos/-1`)
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>List todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target date</th>
                                <th>Is completed?</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editTodoClicked(todo.id)}>Edit</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default ListTodosComponent;