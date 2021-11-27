import React, { Component } from 'react';
import './adocaoindex.css';
import Adocaoheader from './adocaoheader';
import logotemp from './img/templogo.png'
import dog1 from './img/image1doggo.jpg'
import dog2 from './img/image2doggo.jpg'
import dog3 from './img/image3doggo.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function adocaoindex() {

    return(
        <div class="mainpage">
            <Adocaoheader/>
            <div class="col-xxl-12"><img class="centerlogo" src={logotemp}/></div>
            <div class="row centerrow">
                <div class="col-3 h-75 jose1">
                    <img class="col-10 imagedog offset-1" src={dog1}/>
                    <div>
                        <h4 class="textocard">O que é o AdoCÃO?</h4>
                        <p class="textocard">O AdoCAO é uma plataforma que conecta pessoas que desejam adotar um pet, com tutores que buscam um lar para os pets em estado de abandono.</p>
                    </div>
                </div>
                <div class="col-3 h-75 jose1 offset-1">
                <img class="col-10 imagedog offset-1" src={dog2}/>
                    <div>
                        <h4 class="textocard">Porque adotar?</h4>
                        <p class="textocard">Adotar é uma forma de trazer felicidade ao lar, além de diminuir o número de pets abandonados nas ruas e nos abrigos, assim, resgatando uma vida.</p>
                    </div>
                </div>
                <div class="col-3 h-75 jose1 offset-1">
                <img class="col-10 imagedog offset-1" src={dog3}/>
                    <div>
                        <h4 class="textocard">Como funciona?</h4>
                        <p class="textocard">Se você é um adotante, uma vez cadastrado, você pode buscar um pet de acordo com as suas preferências, com uma distância máxima configurável!</p>
                    </div>
                </div>
            </div>
        </div>    
    );

}

export default adocaoindex;