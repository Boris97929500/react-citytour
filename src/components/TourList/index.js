import React, { Component } from 'react'
import './Tourlist.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';

export default class TourList extends Component {

    state={
        tours:tourData
    };



    render() {
        //console.log(this.state.tours)
        return (
            <section className='tourlist'>
                <Tour tour={this.state.tours[0]}/>
                <Tour tour={this.state.tours[1]}/>
                <Tour tour={this.state.tours[2]}/>
                <Tour tour={this.state.tours[3]}/>
            </section>
        )
    }
}
