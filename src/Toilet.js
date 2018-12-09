import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';


class Toilet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: 'Toilet-Tron',
            className: 'App-logo',
            action: '',
        }



        const child = <div>5000</div>
        this.stuff = {
            className: "bob",
            children: child
        }


    }

    componentDidMount() {
        // make api reqest to http://api.icndb.com/jokes/random\?firstName\=Toilet
        // update state.joke
        // display state.joke
        this.loadJoke();
    }

    loadJoke = async () => {
        const response = await axios({
            url: 'http://api.icndb.com/jokes/random/firstName/Toilet'
        });

        this.props.dispatch({ type: 'updateJoke', payload: response.data.value.joke });
    }

    changeSize = (size) => {

        const classSizeName = `App-logo-${size}`;
        this.setState({
            ...this.state,
            className: `App-logo ${classSizeName}`
        })
    }

    submitStuff = (event) => {
        event.preventDefault();
        this.loadJoke();
        this.setState({
            ...this.state,
            className: `App-logo-${this.state.action}`
        })

    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            ...this.state,
            action: value
        })
    }

    render() {
        return (

            <div >
                <img src={logo} className={this.state.className} alt="logo" onMouseEnter={() => this.changeSize('large')} onMouseLeave={() => this.changeSize('small')} />
                <div>{this.state.info}</div>
                <div>{ReactHtmlParser(this.props.joke)}</div>
                <form onSubmit={this.submitStuff}>
                    <input type="text" value={this.state.action} onChange={this.handleChange} />
                    <button type="submit" disabled={["flush", "unflush"].indexOf(this.state.action) === -1}>Submit</button>
                </form>
                <a href="/help/">HelpPage</a>
            </div>

        );
    }
}


export default Toilet;
