import React from "react"
import { Link } from "react-router-dom"

export default class Home extends React.Component {
  render() {
    return(
        <div>
            <h1>
                Hello
            </h1>
            <Link to="/About">About</Link>
            <Link to="/Users">Users</Link>
        </div>
    )
  }
}