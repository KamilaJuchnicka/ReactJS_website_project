import React, { Component } from 'react';
import SliderComponent from './SliderComponent.jsx';
import ContentPageComponent from './ContentPageComponent.jsx';

class Homepage extends Component {
    render() {
        return (
         <div className="container-fluid">
             <div>
                 <SliderComponent />
                 <ContentPageComponent />


             </div>
         </div>
    );
    }
}

export default Homepage;
