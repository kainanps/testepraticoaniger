import React, { useState } from 'react';
import './Login.css';
import './Register.css';

import logo from '../assets/logo.png';


export default function Login(){
    const [username, setUsername] = useState();

    function handleSubmit(e){
        e.preventDefault();

        
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>

                <img src={logo}  alt="Tindev" />
                <div className="title"><h3>Cadastre-se</h3></div>
                <input 
                    placeholder="Primeiro nome"
                />
                <input 
                    placeholder="Último nome"
                />
                <input 
                    placeholder="Idetificador de usuário" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    placeholder="Senha" 
                    type="password"
                />

                <button type="submit">Cadastrar</button>

                <div>
                    <span></span>
                    <span>OU</span>
                    <span></span>
                </div>

                <a href="/">Login</a> 
                <a href="#"><span></span>Esqueceu a senha?</a> 

            </form>
        </div>
    );
}