import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
    state = {
        showInfo:false
    };

    handleInfo = ()=>{
        this.setState({showInfo: !this.state.showInfo})
    }

    showTour = ()=>{
        //console.log(this.props.tour)
            return(
                <article className='tour'>
                    <div className='img-container'>
                        <img 
                        className='dummyImage'
                        src={this.props.tour.img}
                        //"https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                        alt='imageTour'
                        />
                        <span className='close-btn'>
                            <i className='fas fa-window-close' />
                        </span>
                    </div>
                    <div className='tour-info'>
                        <h3>{this.props.tour.city}</h3>
                        <h4>{this.props.tour.name}</h4>
                        <h5>
                            info 
                            <span onClick={this.handleInfo}>
                                <i className='fas fa-caret-square-down' ></i>
                            </span>
                        </h5>
                        {this.state.showInfo && <p>{this.props.tour.info}</p>}
                      
                        
                    </div>
                </article>
            )

    }

    render() {
        return (
            <div>{this.showTour()}</div>
            // <article className='tour'>
            //     {this.showTour()}
            //     <div className='img-container'>
            //         <img 
            //         className='dummyImage'
            //         src="https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
            //         alt='imageTour'
            //         />
            //         <span className='close-btn'>
            //             <i className='fas fa-window-close' />
            //         </span>
            //     </div>
            //     <div className='tour-info'>
            //         <h3>city</h3>
            //         <h4>name</h4>
            //         <h5>
            //             info 
            //             <span>
            //                 <i className='fas fa-caret-square-down' ></i>
            //             </span>
            //         </h5>
            //         <p>lorem ispumlorem ispumlorem ispumlorem ispum</p>
                    
            //     </div>
            // </article>
        )
    }
}
