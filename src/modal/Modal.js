import React from 'react';
import './Modal.css'
/* import Backdrop from '../Backdrop/Backdrop' */


const modal = (props) => (
    
        <div className="Modal" style={{
        transform : props.propsToShow ? 'translateY(0)':'translateY(-100vh)' ,
        opacity: props.propsToShow ? 1: 0
             }}>
             {props.children}
              </div>
    
);

export default modal;