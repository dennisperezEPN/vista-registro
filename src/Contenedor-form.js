import React, { Component } from 'react';

class ContenedorForm extends Component {
    render() {
        return(
            <div id="contenedor-form">
                <form action="/login" method="post">
                    <div className="input-form">
                        <input type="text" id = "usuario" placeholder="Usuario" name="usuario" required/>
                    </div>
                    <div className="input-form">
                        <input type="password" id = "password" placeholder="Contraseña" name="contraseña" required/>
                    </div>
                    <div className="input-form">
                        <input type="password" id = "password-repeat" placeholder="Repetir contraseña" name="contraseña" required/>
                    </div>
                    <div id = "checkbox-recuerdame">
                        <input type="checkbox" name="recuerdame" id="recuerdame"/>
                        <label for="recuerdame">Recuérdame</label>
                    </div>
                    <button type="submit">Registrar</button>
                    <div>
                        <a>¿Ya tienes cuenta? </a><a href="/iniciar-sesion">Inicia sesion</a>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContenedorForm;