import React from 'react';
import Header from '../Header/Header';

const AppContainer = (props) => (
    <div>
        <Header />
        {props.children}
    </div>
);


export default AppContainer;
