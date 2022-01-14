import React, {Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
        console.log(props);
        // const{firstName,lastName,age,hairColor} = this.props.PersonCard;
        this.state ={
            age: this.props.age
        }
    }

    increaseAge = () => {
        console.log("clicked!")
        this.setState({age:this.state.age +1})
    }

    render() {
        return (
            <div>
                <p>{this.props.firstName}</p>
                <p>{this.props.lastName}</p>
                <p>{this.state.age}</p>
                <p>{this.props.hairColor}</p>
                <button onClick = {this.increaseAge}>Increase {this.props.firstName} age</button>
            </div>
        )
    }
}

export default PersonCard;