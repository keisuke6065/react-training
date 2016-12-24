import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dispText: '入力してください'
        };
        this.handleInput = this.handleInput.bind(this)
    }
    handleInput(e){
        this.setState({ dispText: e.target.value });
        console.log(this.state.dispText);
    }

    render() {
        return (
            <div>
                <label>Form</label>
                <input type="text" value={this.state.dispText} onChange={this.handleInput}/>
            </div>
        );
    }

}

export default Form;