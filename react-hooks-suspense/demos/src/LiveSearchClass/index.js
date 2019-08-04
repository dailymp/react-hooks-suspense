import React, { Component } from 'react';

export default class LiveSearch extends Component {

    constructor(props){
        super(props);

        this.state = {
            searchTerm: '',
            controller: null,
            jokes: []
        };
        this.inputRef = React.createRef();

        this.onSearchTermChanged = this.onSearchTermChanged.bind(this);
    }

    async getJokes(searchTerm) {

        const controller = new AbortController();

        this.setState({
            controller: controller
        });
        let results = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
            headers:{
                'accept': 'application/json'
            },
            signal: controller.signal
        });

        let jokes = await results.json();
        this.setState({
            jokes: jokes.results
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            if (this.state.controller) {
                this.state.controller.abort();
            }
            this.getJokes(this.state.searchTerm);
        }

    }

    onSearchTermChanged(e){
        this.setState({
            searchTerm: e.target.value
        });
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

    render() {

        let jokes = this.state.jokes.map((joke) => {
            return (
                <li key={joke.id} >{joke.joke}</li>
            )
        });

        return (
            <div>
                <h1>Start</h1>
                <div>
                    <input
                        placeholder="Dad Jokes Search"
                        ref={this.inputRef}
                        onChange={this.onSearchTermChanged} value={this.state.searchTerm} type='text' />
                </div>
                <ul>
                    {jokes}
                </ul>
            </div>
        )
    }
}

