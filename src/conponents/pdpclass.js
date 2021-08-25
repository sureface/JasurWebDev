import React, {Component} from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    ListGroup,
    ListGroupItem,
    Progress
} from 'reactstrap';

class Pdpclass extends Component {

    state = {
        errorText: 'Add task...',
        completedTaskCount: '0',
        todo: "",
        todoList: []
    }

    handleInputChange = (e) => {
        this.setState({
            todo: e.target.value
        })
    }

    addTask = () => {
        if (this.state.todo.trim() !== ''){
            let newTodo = {
                id: Date.now(),
                name: this.state.todo,
                isComplete: false
            }

            this.setState({
                todoList: this.state.todoList.concat(newTodo),
                todo: "",
                errorText: 'Add task...'
            })
        }else
            this.setState({
                errorText: "please fill this input"
            })

    }

    deleteTask = (id) => {
        this.setState({
            todoList: this.state.todoList.filter((item, index)=>{
                return item.id !== id;
            })
        })
        setInterval(this.counter, 10)
    }

    completeTask = (id) => {
        this.setState({
            todoList: this.state.todoList.map((item, index)=>{
                if (index.id === id){
                    item.isComplete = !item.isComplete;
                }
                return item;
            })
        })
        this.counter();
    }


    counter = () => {
        let counter = 0;
        this.state.todoList.forEach((item) => {
            if(item.isComplete)
                counter ++;
        })

        this.setState({
            completedTaskCount: counter
        })
    }

    addIt = () =>{
        alert(1)
    }

    render() {
        let progressBarChecked = this.state.completedTaskCount / this.state.todoList.length * 100;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-2">
                        <InputGroup>
                            <Input value={this.state.todo} placeholder={this.state.errorText} onChange={this.handleInputChange}/>
                            <InputGroupAddon addonType="append">
                                <Button color="primary" onClick={this.addTask}>add task</Button>
                            </InputGroupAddon>
                        </InputGroup>

                        <div className="checkedCount mt-3 text-center">
                            <h1 style={{color: "white"}}>Completed Tasks: {this.state.completedTaskCount}</h1>
                        </div>

                        <ListGroup className="mt-3 mb-5">
                            {this.state.todoList.map((item, index)=>{
                                return <div className="row mt-2 align-items-center">
                                    <div className="col-md-9">
                                        <ListGroupItem key={item}
                                            style={{
                                                backgroundColor: item.isComplete ? "green" : "white",
                                                color: item.isComplete ? "white" : "black"
                                            }}>

                                            {item.name}

                                        </ListGroupItem>
                                    </div>
                                    <div className="col-md-3 d-flex align-items-center">

                                        <Button className="bg-danger delBtn" style={{height: "50px"}} onClick={() => this.deleteTask(item.id)}>Del</Button>
                                        <Button className="bg-success ml-2 mr-3 delBtn" style={{height: "50px"}} onClick={() => this.addIt(item.id)}>Add</Button>

                                        <input className="" style={{width: "20px", height: "20px"}} type="checkbox" checked={item.isComplete} onClick={()=>this.completeTask(item.id)}/>
                                    </div>
                                </div>
                            })}
                        </ListGroup>

                        <Progress value={progressBarChecked ? progressBarChecked : '0'}>{Math.floor(progressBarChecked)} %</Progress>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pdpclass;