import React from 'react';
import Navigation from './Navigation';
import Back from "./Back";

export default ({children}) => {
    return (
      <div>
        <Navigation/>
        <h1>Weclcome!</h1>
        {children}
      </div>
    )
}