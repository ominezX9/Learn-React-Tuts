// import { render } from "@testing-library/react";
import React from "react";


// class HelloWorld extends React.Component{
//     render(){
//         return(
//             <div className="p-2 text-2xl">
//                 <h1 className="font-bold">This is the homepage</h1>
//                 {this.props.name}
//             </div>
//         )
//     }
    
// }
function UserName(props){
    return <h1>Hello, {props.name} </h1>
}

function HelloWorld(){
    return(
        <div className="p-2">
            <h1 className="font-bold text-2xl">This is the homepage</h1>
            <UserName name="David"/>
        </div>
    )
}
export default HelloWorld;