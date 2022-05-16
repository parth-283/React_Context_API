// // Without Context Api
// import React, { Component } from "react";
// import User from "./User";

// export default class App extends Component {
//   state = {
//     name: "Parth",
//   };
//   render() {
//     return <User name={this.state.name} />;
//   }
// }



// With Context Api


// import React, { Component } from 'react'
// import User from './User'
// export  const MyContext = React.createContext();

// export default class App extends Component {
//     state = {
//         name:"Parth",
//         value: 10
//     }
// handleClickcontext = () =>{
//     this.setState({value: this.state.value + 2});
// }
//     render() {
//         const contextValue ={
//             data: this.state,
//             handleClick : this.handleClickcontext
//         }
//         return (
//            <MyContext.Provider value={contextValue }>
//             <User />
//            </MyContext.Provider>
//         )
//     }
// }

// import React, { Component } from "react";
// import User from "./User";
// import { Provider } from "./context";

// export default class App extends Component {
//   render() {
//     const contextValue = {
//       data: this.state,
//       handleClick: this.handleClickcontext,
//     };
//     return (
//       <Provider value={"Parth Kathiriya"}>
//         <User />
//       </Provider>  
//     );
//   }
// }



import React, { Component } from 'react'
import User from './User'
import { Provider } from "./context";

export default class App extends Component {
    state = {
        name:"Parth",
        value: 10
    }
handleClickcontext = () =>{
    this.setState({value: this.state.value + 2});
}
    render() {
        const contextValue ={
            data: this.state,
            handleClick : this.handleClickcontext
        }
        return (
           <Provider value={contextValue }>
            <User />
           </Provider>
        )
    }
}
