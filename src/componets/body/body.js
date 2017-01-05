import React, {Component} from 'react';
import './body.css';
import Form from './form/form'
import JobCard from './jobCard/jobCard'

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
                <JobCard/>
            </div>
        );
    }
}

export default Body;