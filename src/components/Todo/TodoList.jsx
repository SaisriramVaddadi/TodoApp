import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticateService from '../../AuthenticateService.js';
export default class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            todos : [
        
               ],
            message : '',
        }
        this.handleError = this.handleError.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }
    componentDidMount(){
        this.refreshTodos();
    }

    refreshTodos(){
        TodoDataService.retrieveAllTodos(AuthenticateService.getUserName())
        .then(response => {
            // console.log(response)
            this.setState({
                todos: response.data
            })})
            // console.log(response)
            .catch(
                error => this.handleError(error)
            )
    }
   render() {
       return (
           <>
            <div className="container">
               {this.state.message !== '' && <div className="alert alert-info" role = 'alert'>{this.state.message}</div>} 
               <h2>List of your Todos {AuthenticateService.getUserName()}</h2>
               <table className="table">
                   <thead>
                       <tr>
                           <th>id</th>
                           <th>username</th>
                           <th>description</th>
                           <th>targetDate</th>
                           <th>done</th>
                           <th>update</th>
                           <th>delete</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           this.state.todos.map(todo =>
                               <tr key={todo.key}>
                                   <td>{todo.id}</td>
                                   <td>{todo.username}</td>
                                   <td>{todo.description}</td>
                                   <td>{todo.targetDate}</td>
                                   <td>{todo.done.toString()}</td>
                                   <td><button className="btn btn-success btn-sm rounded-0" onClick={()=>this.updateTodo(todo.id)}>update</button></td>
                                   <td><button className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete" onClick={()=> this.deleteTodo( todo.id)}>Delete</button>
                                   </td>
                               </tr>
                           )
                       }
                   </tbody>
               </table>
           </div>
           </>
          
       )
   }

   handleError(error){
        this.setState({message: error.response.data.message})
   }

   deleteTodo(id){
        let name = AuthenticateService.getUserName();
          TodoDataService.deleteTodo(name,id)
          .then(
              response => {
                  this.setState({message: `Successfully deleted  todo ${id}`})
                  this.refreshTodos();
              }
          )
          .catch(
              error => {
                  this.setState({message: `Something went wrong please try again`})
              }
          )
   }

   updateTodo(id){

        console.log(`This is todoComponent  for ${id}`)
        this.props.history.push(`/todos/${id}`)
    // let name = AuthenticateService.getUserName();
    //   TodoDataService.deleteTodo(name,id)
    //   .then(
    //       response => {
    //           this.setState({message: `Successfully deleted  todo ${id}`})
    //           this.refreshTodos();
    //       }
    //   )
    //   .catch(
    //       error => {
    //           this.setState({message: `Something went wrong please try again`})
    //       }
    //   )
    }

}