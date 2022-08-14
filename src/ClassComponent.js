import React, {Component} from 'react'

class ClassComponent extends Component {
    
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            count: props.count
        }
    }

    render() {
       

        return <>
        <h1>Welcome to class Components {this.state.count}</h1>

        </>
    }
}

export default ClassComponent