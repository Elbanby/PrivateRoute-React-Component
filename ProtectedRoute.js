import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedPath = ({condition ,component: Component,...args}) => {
  return (
    <Route {...args} render={ (props) => condition() ? <Component {...props} /> : <Redirect to='/' />  } />
  )
};
 
export default ProtectedPath;
