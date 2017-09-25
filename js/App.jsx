import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import '../css/default.min.css';
//import {Router, Route, IndexRoute, IndexLink, Link, hashHistory } from 'react-router';
import {
    Switch,
    Route,
    Link
}from 'react-router-dom';

//tu komponenty
import Header from './HeaderComponent.jsx'
import Homepage from './HomePageComponent.jsx'
import Footer from './FooterComponent.jsx'
import Products from './productsComponent.jsx'
import Contact from './contactComponent.jsx'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>



                         <Route exact path="/" component={Homepage} />
                         <Route exact path="/products" component={Products} />
                         <Route exact path="/contact" component={Contact} />



                </Switch>
                <Footer />
            </div>
    );
    }
}

export default App;








// class Menu extends React.Component {
//     render() {
//         return <div className="class">
//             <ul>
//                 <li>
//                     <Link to="/">Strona glowna</Link>
//                 </li>
//             </ul>
//         </div>
//     }
// }
//
//
//
// class Template extends React.Component {
//     render() {
//         return <div>
//             <Menu />
//             <div className="content">
//                 {this.props.children}
//             </div>
//         </div>
//     }
// }
//
// document.addEventListener('DOMContentLoaded',() => {


//
//     ReactDOM.render(
//         // <Router history={hashHistory} >
//         //     <Route path="/" component={Template}>
//         //         <IndexRoute component={Main}/>
//         //         <Route />
//         //     </Route>
//         // </Router>,
//         document.getElementById('app')
//     );
// });
