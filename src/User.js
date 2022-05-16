// // Without Context Api

// import React, { Component } from 'react'
// import Guset from './Guset'

// export default class User extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>User Component</h3>
//                 <Guset nm={this.state.name}/>
//             </div>
//         )
//     }
// }


// With Context Api
import React, { Component } from 'react'
import Guset from './Guset'

export default class User extends Component {
    render() {
        return (
            <div>
                <h3>User Component</h3>
                <Guset/>
            </div>
        )
    }
}
