import React, {Component} from 'react';
import './body.css';
import Form from './form/form'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTypeList:['text','password']
        }
    }

    render() {
        return (
            <div className="body">
                <h2>hello world</h2>
                <Form inputTypeList={this.state.inputTypeList}/>
            </div>
        );
    }
}

export default Body;