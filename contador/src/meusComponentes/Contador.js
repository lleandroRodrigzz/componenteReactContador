import { Component } from "react";
import './Contador.css';

export default class Contador extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.state = {
            contador: 0
        }
    }

    plus() {
        let valor = this.state.contador + 1;
        this.setState({
            contador: valor
        })
    }

    less() {
        let valor;
        if (this.state.contador > 0) {
            valor = this.state.contador - 1;
            this.setState({
                contador: valor
            })
        }
    }

    render() {
        return (
            <section className="contador-container">
                <div className="contador-display">{this.state.contador}</div>
                <button className="contador-buttom" onClick={() => { this.plus() }}>+</button>
                <button className="contador-buttom" onClick={() => { this.less() }}>-</button>
            </section>
        )
    }
}