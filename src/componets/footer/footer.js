import React, {Component} from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0
        };
    }

    tick() {
        this.setState((prevState) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>{this.state.secondsElapsed}</div>
        );
    }
}

export default Footer;