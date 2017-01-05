import React, {Component} from 'react'
import Faved from './faved/faved'
import Img from './img/img'
import Title from './title/title'

class JobCard extends Component {
constructor (props) {
    super(props)
    this.state = {
        area: 1,
        faved:false,
        imageUrl: 'test',
        title: 'title',
        salary: 300
    }
}


    render () {
        return (
            <div className='jobcard'>
                <Img img={this.state.imageUrl}/>
                <Faved faved={this.state.faved}/>
                <Title title={this.state.title}/>
            </div>
        )
    }
}

export default JobCard