import React, { Component } from 'react';
import './adocaoadotante.css';
import Adocaoheader from './adocaoheader';
import axios from 'axios';
import { useState } from 'react';

function Adocaousuario() {

    const [quilometros, setQuilometros] = useState(0);

    async function MandarRequest(e)
    {
        e.preventDefault();
        console.log(quilometros);
        var id = 15112114334250;

        var url = "http://localhost:12439/api/DataAccess/BuscarPet?Id=" + id + "&distanciaMaxima=" + quilometros;

        const resposta = await EnviarRequisicao(url);
        console.log(resposta);

        alert(resposta);
    }

    function EnviarRequisicao(url){
        return Promise.resolve(axios.post(url).then(response => response).catch(err => 400));
    }

    return(
        <>    
        <Adocaoheader/>
        <form class="usuario-forms" onSubmit={MandarRequest}>
            <label for="quilometros">Distancia:</label>
            <input type="number" class="inputfields" id="quilometros" name="quilometros" onChange={e => setQuilometros(e.target.value)}/>
            <input type="submit"/>
        </form>
        </>
    );

}

export default Adocaousuario;