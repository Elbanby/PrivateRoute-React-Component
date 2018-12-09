import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedPath = ({condition ,component: Component,...rest}) => {
  return (
    <Route {...rest}
      render={ (props) => {
          if(condition()){
           return <Component {...props} />
         } else {
           return <Redirect to='/' /> //Redirect to whatever page here.
         }
      }} />
  )
}

export default ProtectedPath;
