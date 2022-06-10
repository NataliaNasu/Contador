import React from 'react';
import './Contador.css';

export default class Contador extends React.Component {
    
    constructor() {
        super();
        this.state = {
            contador: 0,
        };
    }

    incrementa() {
        this.setState({
            contador: this.state.contador + 1,
        });
    }

    decrementa() {
        this.setState({
            contador: this.state.contador - 1,
        });
    }
    
    render () {
        return (
            <div className='contador'>
                <h1>Contador</h1>
                <h2>{this.state.contador}</h2>
                <div>
                    <button onClick={this.decrementa.bind(this)}>-</button>
                    <button onClick={this.incrementa.bind(this)}>+</button>
                </div>
            </div>
        );
    }
}