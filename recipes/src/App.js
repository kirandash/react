import React from 'react';
import Logo from './static/images/logo.png';

// Class React Component
// class App extends React.Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }
console.log(Logo); // Logo variable has the image content. File loader converts it and returns the path that can be used in react component
// Functional React Component
const App = () => (
    <div>
        <h1>Hello World!!</h1>
        <img src={Logo}/>
    </div>
);

export default App;