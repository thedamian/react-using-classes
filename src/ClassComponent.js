import React, {Component} from 'react'

class ClassComponent extends Component {
    
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            count: props.count,
            coffee: []
        }
    }

    componentDidMount() {
        // Runs after the first render() lifecycle
       fetch("https://api.sampleapis.com/coffee/hot")
       .then(res=>res.json())
       .then(data => {
        this.setState({ 
            count: this.state.count,
            coffee: data
            })
       })

      }
    

    render() {
        return <>
        <h1>Class Component</h1>
        <p> Count is: {this.state.count}</p>
        <p>
            <button onClick={()=> {this.setState({   
                count: this.state.count + 1,
                coffee: this.state.coffee
                })}}>Add one</button>
        </p>
        <p>
        {this.state.coffee.map(c=> c.title).join(" - ")}
        </p>
        </>
    }
}

export default ClassComponent