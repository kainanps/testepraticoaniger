import React from 'react';
import './Main.css';
import perfil1 from '../assets/perfil1.jpg';
import perfil2 from '../assets/perfil2.jpg';
import perfil3 from '../assets/perfil3.jpg';
import perfil4 from '../assets/perfil4.jpg';
import add from '../assets/add.jpg';
import logo from '../assets/logo.png';

export default function Main() {
    return(
        <div className="container-main">
            <nav>
                <ul>
                    <li>
                        <div><i className="fab fa-instagram"></i></div>
                        <div><img src={logo} alt="Logo Intagram" /></div>
                    </li>
                    <li>
                        <input type="text" placeholder="Search" />
                        <span className="fas fa-search"></span>
                    </li>
                    <li>
                        <i className="far fa-compass"></i>
                        <i className="far fa-heart"></i>
                        <i className="far fa-user"></i>
                    </li>
                </ul>
            </nav>
            <section>
                <div className="history">
                    <div><p>Histórias</p><p>Ver tudo</p></div>
                    <ul>
                        <li>
                            <img src={add} alt="Adicionar History" title="Adicionar History" />
                        </li>
                        <li>
                            <img src={perfil1} alt="perfil1" />
                        </li>
                        <li>
                            <img src={ perfil2 } alt="perfil2" />
                        </li>
                        <li>
                            <img src={ perfil3 } alt="perfil3" />
                        </li>
                        <li>
                            <img src={ perfil4 } alt="perfil4" />
                        </li>
                    </ul>
                </div>
                <div className="posts">
                    <div className="card">
                        <div className="info-perfil">
                            <div>
                                <img src={perfil1} alt="" />
                                <h4>user.mengo1189</h4>
                            </div>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                        <div className="img">
                            <img src={perfil1} alt="post" />
                        </div>
                        <div className="actions-post">
                            <div>
                                <i className="far fa-heart"></i>
                                <i className="far fa-comment"></i>
                                <i className="fas fa-external-link-alt"></i>
                            </div>
                            <div>
                                <i className="far fa-bookmark"></i>
                            </div>
                        </div>
                        <div className="legend-likes">
                            <p>Curtido por <strong>23 pessoas</strong></p>
                            <p><strong>user.mengo1189</strong> lorem ipsum house cat ball heart door shoes.</p>
                            <hr />
                            <p><strong>bruno.henriquepereira.1</strong> Meu Deus nao fala isso</p>
                            <p><strong>user.user3223</strong> lorem ipsum cat house heart ball door shoes.</p>
                        </div>
                        <div className="comment">
                            <input type="text" placeholder="Adicione um comentário..." />
                            <button type="submit">Publicar</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}