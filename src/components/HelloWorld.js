import React from 'react';
/// no need for headers
// // functional component

// function HelloWorld(props){
//     return(
//         <h1>Hello {props.name}, {props.expression}.</h1>
//     )
// }

// class component

class HelloWorld extends React.Component{
    render(){
        return(
            <h1>Hello {this.props.name}, {this.props.expression}.</h1>
        )
    }
}

export default HelloWorld;