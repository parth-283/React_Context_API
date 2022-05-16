// // Without Context Api

// import React, { Component } from 'react'

// export default class Guset extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Guset Component</h3>
//                 <h4>name={this.state.name}  </h4>
//             </div>
//         )
//     }
// }

// With Context Api

import React, { Component } from "react";
import { MyContext } from "./context";
// import { Consumer } from "./context";
export default class Guset extends Component {
    static contextType = MyContext;
    componentDidMount = () => {
        console.log(this.context);

    }
  render() {
      const {name,value} = this.context.data
    return (
      <div>
        <h3>Guest Component</h3>
        <h4>
            Name:{name} Value:{value}
        </h4>
        <button onClick={this.context.handleClick}>Change Value</button>
        {/* <Consumer>
          {value => (
              <div>
                  <h4>{value}</h4>
              </div>
          )}
        </Consumer> */}
      </div>
    );
  }
}
