
import React, { Component } from "react";
import "./Navbarstyle.css";
import mal from './mal.png';
import { Link } from "react-router-dom";




class Navbar extends Component {

    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>



                <nav>
                    <a href="Home">
                        <img src={mal} alt="" width={150} height={100} />
                    </a>
                    <div>
                        <ul id="ref" className={this.state.clicked ? "#ref active" : "#ref"}>
                            <li>
                                < Link to="/" className="active">Home</Link>

                            </li>
                            <li>
                                <Link to="https://elearn.moe.gov.et/ ">E-learning</Link>
                            </li>
                            <li>
                                <Link to="/About">About</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked? "fas fa-times" : "fas fa-bars"}></i>


                    </div>
                </nav>

            </>
        )
    }
}
export default Navbar;