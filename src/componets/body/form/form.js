import React, {Component, PropTypes} from 'react';
// import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dispText: '入力してください'
        };
        this.handleInput = this
            .handleInput
            .bind(this)
    }
    handleInput(e) {
        this.setState({dispText: e.target.value});
        console.log(this.state.dispText);
    }

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <label>Form</label>
                <input type="text" value={this.state.dispText} onChange={this.handleInput}/>
            </div>
        );
    }
    componentWillMount() {
        console.log('will ' + this.state.dispText)
    }

    componentDidMount() {
        console.log('did ' + this.state.dispText)
    }

    componentWillReceiveProps(nextProps) {
        console.log('will reacive ' + nextProps.name)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('update state '  + nextState.dispText)
        console.log('update props ' + nextProps.name)
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('will update state ' + this.state.dispText)
        console.log('will update ' + nextState.dispText)
    }
    

    componentDidUpdate(prevProps, prevState) {
        console.log('did update ' + prevState.dispText)
    }

    componentWillUnmount() {
        console.log('will unmount ' + this.state.dispText)
    }

}
Form.propTypes = {
    dispText:PropTypes.string,
};


export default Form;