import React, {Component} from 'react'

class ClassComponent extends Component {
    
    constructor(props) {
        super(props)
        //console.log(props)
        this.state = {
            count: props.count
        }
    }

    render() {
        return <>
        <h1>Class Component</h1>
        <p> Count is: {this.state.count}</p>
        <p><button onClick={()=> {this.setState({ 
            count: this.state.count + 1 
            })}}>Add one</button></p>
        </>
    }
}

export default ClassComponent