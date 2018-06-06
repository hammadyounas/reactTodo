import React from 'react';
import ReactDOM from 'react-dom';
import './todo.css';
var FontAwesome = require('react-fontawesome');
// import axios from 'axios'
var axios = require('axios');

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            id: '',
            update: false,
            list: [],
            clickedValue: ''
        }
        this.getValues();
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getValues(){
        axios.get('http://localhost:8000/').then(response=>{
            console.log("reponse",response.data);
            // this.setState.list = response.data
            this.setState({list: response.data})
    })
    }
    edit(item) {
        console.log("update item",item)
        this.setState({value: item.value, update: true ,id: item.id});
    }
    delete(event) {
        console.log("event",event);
        axios.delete('http://localhost:8000/delete/', {params: { id: event.id} }).then(response=>{
            console.log("responce in delete",response.data);
        })
    }
    handleChange(event){
        console.log("event value",event.target.value)
        this.setState({value: event.target.value});
       
    }
    handleSubmit(event) {
        // alert("asujhdysja");
        console.log("this.state.value", this.state.value);
        event.preventDefault();
        if(this.state.update == true){
            let obj = {
                id: this.state.id,
                value:this.state.value
            }
            this.setState({update:false , value:''})
        }
        else{
            axios.post('http://localhost:8000/add',{
                add:this.state.value
            }).then(response=>{
                console.log("reponse",response.data);
            // this.setState.list = response.data
            this.setState({list: response.data, value:''})
            })
        }
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
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group" >
                            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Value" />
                            {
                                (this.state.update) ?  <button className="btn btn-default" type="submit" value="Submit">Update</button> :
                                <button className="btn btn-default" type="submit" value="Submit">Add</button>
                            }
                        </div>
                    </form>
                    <div>
                        {/* <ul> */}
                        {
                            this.state.list.map((item, i) => {
                                return (<div key={i} className="inline"><div className="values"><p className="list">{item.value}</p></div>
                                <div style={ {width: '12%'}}>
                                <button type="button" style={{width: '50%',height:'98%'}} onClick={()=>this.edit(item)} className="btn">  <FontAwesome className='super-crazy-colors editIcon' name='edit' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button>
                                <button type="button" style={{width: '50%',height:'98%'}} onClick={()=>this.delete(item)} className="btn"> <FontAwesome className='super-crazy-colors editIcon' name='times' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/></button>
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

