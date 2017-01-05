import React, {Component} from 'react'

class Faved extends Component {
    constructor(props) {
        super(props)
        this.state = {
            faved: this.props.faved
        }
        this.handlClick = this.handlClick.bind(this)
    }
    handlClick(){
        this.setState({
            faved: !this.state.faved
        });
    }

    render() {
        return (
            <button type="" onClick={this.handlClick}>
                {this.state.faved ? '興味がある済み' : '興味がある'}
            </button>
        )
    }
}

export default Faved