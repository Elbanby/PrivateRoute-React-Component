import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedPath = ({component: Component, ...rest}) => {
  return (
    <Route {...rest}
      render={ (props) => {
          if(window.localStorage.getItem('token')){ //Add whatever condition here
           return <Component {...props} />
         } else {
           return <Redirect to='/' /> //Redirect to whatever page here. 
         }
      }} />
  )
}

export default ProtectedPath;

