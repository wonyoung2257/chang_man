import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./Start.css";
import { Link } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export default class Start extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: JSON.parse(localStorage.getItem("user")).user_id,
      sex: JSON.parse(localStorage.getItem("user")).user_sex,
      nick: JSON.parse(localStorage.getItem("user")).user_nickname,
    };
  }

  componentWillMount() {}

  onMatching = () => {
    socket.emit("start", this.state._id, this.state.nick, this.state.sex);

    setTimeout(
      socket.on("apply", () => {
        socket.emit("matching", this.state._id, this.state.sex);
      }),
      3000
    );

    // socket.on("apply", () => {
    //   console.log("등록하기");
    //   setTimeout(() => {
    //     socket.emit(
    //       "matching",
    //       this.state._id,
    //       this.state.nick,
    //       this.state.sex
    //     );
    //   }, 3000);
    // });

    // socket.on("apply", (_id) => {
    //   alert("매칭을 시작함 클라이언트");
    // });

    //매칭 완료 on으로 받는다.
    //alert한다
    //emit으로 이벤트 발생
  };
  componentDidMount() {
    // socket.emit("matching", this.state._id);
    socket.on("mathching_success", () => {
      console.log("매칭성공");
      alert("매칭성공");
      //room_id는 남자id + 여자id 로 만듬
      // if (this.state.sex === "M") {
      //   //신청자 남자 other 여자
      //   var room_id = this.state._id + other_id;
      //   console.log("room_id:  " + room_id);
      //   socket.emit("room", room_id);
      // } else {
      //   //신청자 여자 other 남자
      //   var room_id = other_id + this.state._id;
      //   console.log("room_id:  " + room_id);
      //   socket.emit("room", room_id);
      // }
    });
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
    return this.props.count === 1 ? (
      <div>
        <button className="Font_start" onClick={this.onMatching}>
          {" "}
          매칭 시작!{" "}
        </button>
      </div>
    ) : (
      <div>
        <button className="Font2_start"> 매칭 찾기! </button>
      </div>
    );

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
  }
}
