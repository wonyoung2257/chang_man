import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import './Start.css';
import { Link } from 'react-router-dom';


export default class Start extends Component {

constructor(props){
    super(props);
}



//     //기존
//    state = {
//        count : 1
//    }

//     modify = (n) => {
//         this.setState({
//             count : n
//         });
//     };

//     update = (n) => {
//         this.setState({
//             count : 1
//         });
//     };

    render() {

        //기존
        // const {count} = this.state;
        return (
            this.props.count === 1 ?
            <div>
                <button className = "Font_start"> 매칭 시작! </button>
            </div>
            :
            <div>
                <button className ="Font2_start"> 매칭 찾기! </button>
            </div>
           

            //기존
            // count === 5 ?
            // <div>
            //     <Link to ="#">
            //         <button onClick={() => this.update(count)} className = "Font">{count} : {count} 과팅</button>
            //     </Link>
            // </div>
            // : 
            // <div>
            //     <Link to ="#">
            //         <button onClick={() => this.modify(count + 1)} className = "Font">{count} : {count} 과팅</button>
            //     </Link>
            // </div>
        )
    }
}
