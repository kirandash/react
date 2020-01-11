import React from 'react';
// import Logo from './static/images/logo.png';
import Header from './Header.js';
import RecipeList from './RecipeList.js';
import RecipeDetail from './RecipeDetail.js';

fetch(`${API_URL}/v1/recipes`) // template string
    .then(res => res.json())
    .then(json => console.log(json));
// Class React Component
// class App extends React.Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }
// console.log(Logo); // Logo variable has the image content. File loader converts it and returns the path that can be used in react component
// Functional React Component
const App = () => (
    <div>
        <Header/>
        <main style={{ display: 'flex' }}>
            <RecipeList style={{ flex: 3 }}/>
            <RecipeDetail style={{ flex: 5 }}/>
        </main>
    </div>
);

export default App;