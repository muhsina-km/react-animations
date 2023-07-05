import React from "react";
import CountUp from "react-countup";
import { Fade,Slide,Bounce,Flip,Hinge,JackInTheBox,Roll,Rotate,Zoom } from "react-awesome-reveal";
import "./style.css";

export default function App() {
  return (
    <div>

      <Bounce> <h1>Hello StackBlitz!</h1> </Bounce>

      <Fade> <h1>Hello StackBlitz!</h1> </Fade>

      <Slide> <h1>Hello StackBlitz!</h1> </Slide>

      <Flip> <h1>Hello StackBlitz!</h1> </Flip>

      <Hinge> <h1>Hello StackBlitz!</h1> </Hinge>

      <JackInTheBox> <h1>Hello StackBlitz!</h1> </JackInTheBox>

      <Roll> <h1>Hello StackBlitz!</h1> </Roll>

      <Rotate> <h1>Hello StackBlitz!</h1> </Rotate>

      <Zoom> <h1>Hello StackBlitz!</h1> </Zoom>

      <p><b> :) </b></p>

      {/* <h1><CountUp end='100'></CountUp></h1> */}

    </div>
  );
}
