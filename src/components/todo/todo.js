import React from 'react';
import ReactDOM from 'react-dom';
import './todo.css'

class Todo extends React.Component {
    constructor(){
        super()
    }
    update(){

    }
    delete(){

    }
    add(){
        
    }
    render() {
        return (
            <div className="card cardStyle">
            <h5 className="card-header">TODO APP</h5>
                <div className="card-body">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Value"/>
                            <button className="btn btn-default" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Todo