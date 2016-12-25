import React, {Component} from 'react';
import './body.css';
import Form from './form/form'

class Body extends Component {
    render() {
        return (
            <div className="body">
                <h2>hello world</h2>
                <Form name='Form name'/>
            </div>
        );
    }
}

export default Body;