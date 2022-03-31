import React from "react";
import './Card.css'

export default function Card(props) {
    return(<div className="Card">
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer">
            {props.titulo}
        </div>
    </div>)
}