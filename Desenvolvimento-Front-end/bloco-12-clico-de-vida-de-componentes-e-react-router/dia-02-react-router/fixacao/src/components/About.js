import React from "react";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  render() {
    return(
        <div>
            <h2>
                Esse é o sobre
            </h2>
            <Link to="/">Home</Link>
        </div>
    )
  }
}