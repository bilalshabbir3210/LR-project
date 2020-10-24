import React from 'react';
import ReactDOM from 'react-dom';
import HeaderNav from './headerNav';
//import Nav from './Nav';
import Slider from './slider';

function Example() {
    return (
        <React.Fragment>
            <HeaderNav/>
            <Slider />
        </React.Fragment>

    );
}

export default Example;

if (document.getElementById('APP')) {
    ReactDOM.render(<Example />, document.getElementById('APP'));
}
