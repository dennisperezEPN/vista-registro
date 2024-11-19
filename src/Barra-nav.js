import React, { Component } from 'react';

class BarraNav extends Component {
    render() {
        return (
            <header>
                <ul>
                    <li id = "inicio"><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Registro</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </header>
        );
    }
}

export default BarraNav;