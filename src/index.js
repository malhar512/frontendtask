import React,{ Component,Fragment } from 'react';
import ReactDOM from 'react-dom';
import Main from './component/Main';

import './Index.css'


 class Place extends Component {
    render() {
        return (
            <Fragment>
            <Main />
            <CreateArea />
            </Fragment>
             
        )
    }
}


ReactDOM.render(  <Place/> , document.getElementById('root'));
