import React, { Component } from 'react';
import './box.css'

class Box extends Component {
   state = {  }
   render() { 
      return ( 
         
            <div className="content">
               <p className="text"> {this.props.name} </p>
               <p className="text"> {this.props.age} </p>
            </div>
          
      );
   }
}
 
export default Box;