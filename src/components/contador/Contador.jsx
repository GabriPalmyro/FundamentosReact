import React, { Component } from "react";

export default class Contador extends Component {

    state = {
        passo: this.props.passo || 10,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.props.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.props.passo
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input
                        id="passoInput"
                        style={{ fontSize: '1.1rem, width: 40px' }}
                        type="number"
                        value={this.state.passo}
                        onChange={(e) => this.setState({ passo: +e.target.value })}>
                    </input>
                </div>

                <h3>Valor: {this.state.valor}</h3>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}