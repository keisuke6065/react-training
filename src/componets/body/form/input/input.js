import React, {Component, PropTypes} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dispText: '入力してください'
        }
        this.handleInput = this
            .handleInput
            .bind(this)
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
        console.log('update state ' + nextState.dispText)
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

    handleInput(e) {
        this.setState({dispText: e.target.value});
        console.log(this.state.dispText);
    }

    render() {
        return (
            <div>
                <label>{this.props.name}
                    :
                </label>
                <input
                    type={this.props.type}
                    value={this.state.dispText}
                    onChange={this.handleInput}/>
            </div>
        );
    }
}

Input.propTypes = {
    dispText: PropTypes.string
};

export default Input;