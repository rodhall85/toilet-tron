import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Help extends Component {
    render() {
        return (
            <div>
                <h1>Flush / Unflush</h1>
                <Link to={``}>Back</Link>
            </div>
        );
    }
}

export default Help;
