import React from 'react';
import ReactDOM from 'react-dom';
import './todo.css';
var FontAwesome = require('react-fontawesome');


class Todo extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: 'hammad',
            id: 25,
            list: ['hammad     ', 'mohsin ', 'taimoor ']
        }
        this.add = this.add.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
    }
    update() {

    }
    delete() {

    }
    add() {
        // alert("asujhdysja");
        console.log("this.state.value", this.state.value)
    }
    onValueChange(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        })
    }
    render() {

        return (
            <div className="card cardStyle">
                <h5 className="card-header">TODO APP {this.state.name}</h5>
                <div className="card-body">
                    <form>
                        <div className="input-group">
                            <input type="text" className="form-control" value={this.state.value} onChange={this.onValueChange} placeholder="Value" />
                            <button className="btn btn-default" type="submit" onClick={this.add}>Add</button>
                        </div>
                    </form>
                    <div>
                        {/* <ul> */}
                        {
                            this.state.list.map((item, i) => {
                                return (<div className="inline"><div className="values"><p className="list">{item}</p></div>
                                <div style={ {width: '12%'}}>
                                <button type="button" style={{width: '50%',height:'98%'}} className="btn"> <FontAwesome className='super-crazy-colors editIcon' name='edit' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button>
                                <button type="button" style={{width: '50%',height:'98%'}} className="btn"> <FontAwesome className='super-crazy-colors editIcon' name='times' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button>
                                </div>
                                </div>
                                )
                            })
                        }
                        {/* </ul> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default Todo