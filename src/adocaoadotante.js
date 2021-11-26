import React, { Component } from 'react';
import './adocaoadotante.css';
import Adocaoheader from './adocaoheader';
import logotemp from './img/templogo.png'
import dog from './img/image2doggo.jpg'
import like from './img/like.png'
import dislike from './img/dislike.png'

function adocaoadotante() {

    return(
        <>    
        <Adocaoheader/>
        <div class="adotantecard">
            <img src={dog}/>
            <div class="adotanteesquerda">
                <div class="adotantefield">
                    <p>Pet: Cachorro</p>
                </div>
                <div class="adotantefield">
                    <p>Porte: Grande</p>
                </div>
                <div class="adotantefield">
                    <p>Genero: Macho</p>
                </div>
                <div class="adotantefield">
                    <p>Vacinas: Todas</p>
                </div>
            </div>
            <div class="adotantedireita">
                <div class="adotantefield">
                    <p>Raça: Pastor Suiço</p>
                </div>
                <div class="adotantefield">
                    <p>Cor: Branco</p>
                </div>
                <div class="adotantefield">
                    <p>Distancia: 7KM</p>
                </div>
            </div>
        </div>
        <div class="botoeslikedislike">
            <div class="botaodislike">
                <img src={dislike}/>
            </div>
            <div class="botaolike">
                <img src={like}/>
            </div>
        </div>
        </>
    );

}

export default adocaoadotante;