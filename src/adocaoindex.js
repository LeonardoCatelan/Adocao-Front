import React, { Component } from 'react';
import './adocaoindex.css';
import Adocaoheader from './adocaoheader';
import logotemp from './img/templogo.png'
import dog1 from './img/image1doggo.jpg'
import dog2 from './img/image2doggo.jpg'
import dog3 from './img/image3doggo.jpg'

function adocaoindex() {

    return(
        <div class="mainpage">
            <Adocaoheader/>
            <img class="centerlogo" src={logotemp}/>
            <div class="cards">
                <div class="centercard">
                    <img src={dog1}/>
                    <h4>O que é o AdoCAO?</h4>
                    <p>O AdoCAO é uma plataforma que conecta pessoas que desejam adotar um pet, com tutores que buscam um lar para os pets em estado de abandono</p>
                </div>
                <div class="centercard">
                <img src={dog2}/>
                    <h4>Porque adotar?</h4>
                    <p>Adotar é uma forma de trazer felicidade ao lar, além de diminuir o número de pets abandonados nas ruas e nos abrigos, assim, resgatando uma vida. </p>
                </div>
                <div class="centercard">
                <img src={dog3}/>
                    <h4>Como funciona?</h4>
                    <p>Se você é um adotante, uma vez cadastrado, você pode buscar um pet de acordo com as suas preferências, com uma distância máxima configurável!</p>
                </div>
            </div>
        </div>    
    );

}

export default adocaoindex;