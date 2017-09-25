import React, { Component } from 'react';


class ContentPageComponent extends React.Component {
  render() {
    return (

<div className="d-flex flex-row .flex-wrap justify-content-center article-box">
    <div className="first-image">
        <div className="image1">
            <img src="./images/tatoo.jpg"/>
        </div>

    </div>
    <div className="second-image">
        <div className="image2">
            <img src="./images/yoga.jpg" />
        </div>
    </div>
</div>

    );
  }
}

export default ContentPageComponent;


//   <div className="article_one_image">
//       <div className="article_one_head">
//           <h1>run</h1>
//           <h4>bla bla bla</h4>
//       </div>
//   </div>
