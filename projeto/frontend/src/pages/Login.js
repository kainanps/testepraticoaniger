import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.png';


export default function Login({history}){
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();

    function handleSubmit(e){
        e.preventDefault();

        
    }

    return(
        <div className="login-container">
            <form action="/main" >

                <img src={logo}  alt="Tindev" />
                <input 
                    placeholder="Identificador de usuário" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    placeholder="Senha" 
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />
                <button type="submit">Entrar</button>

                <div>
                    <span></span>
                    <span>OU</span>
                    <span></span>
                </div>

                <a href="/register">Cadastre-se</a> 
                <a href="#"><span></span>Esqueceu a senha?</a> 

            </form>
        </div>
    );
}