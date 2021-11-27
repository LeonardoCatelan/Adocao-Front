import * as React from 'react';
import Adocaoheader from './adocaoheader';
import './adocaocadastro.css';
import logotemp from './img/templogo.png'
import { useState } from 'react';
import axios from 'axios';
import { Alert } from '@mui/material';

function Adocaocadastro() {

    //Campos a esquerda no cadastro
    const [usuarioCadastro, setUsuarioCadastro] = useState("");
    const [nomeCadastro, setNomeCadastro] = useState("");
    const [idadeCadastro, setIdadeCadastro] = useState("");
    const [celularCadastro, setCelularCadastro] = useState("");
    const [cepCadastro, setCepCadastro] = useState("");
    const [animalCadastro, setAnimalCadastro] = useState("Cachorro");
    const [generoCadastro, setGeneroCadastro] = useState("M");
    const [racaCadastro, setRacaCadastro] = useState("");

    //Campos a direita no cadastro
    const [senhaCadastro, setSenhaCadastro] = useState("");
    const [sobrenomeCadastro, setSobrenomeCadastro] = useState("");
    const [emailCadastro, setEmailCadastro] = useState("");
    const [estadoCadastro, setEstadoCadastro] = useState("RS");
    const [cidadeCadastro, setCidadeCadastro] = useState("");
    const [porteCadastro, setPorteCadastro] = useState("Pequeno");
    const [vacinasCadastro, setVacinasCadastro] = useState("");
    const [corCadastro, setCorCadastro] = useState("");

    async function Cadastrar(e){

        e.preventDefault();
        
        var url = "http://localhost:12439/api/DataAccess/CadastroAdotante";
        var data = {
            "Usuario" : usuarioCadastro,
            "Senha" : senhaCadastro,
            "Nome" : nomeCadastro,
            "Sobrenome" : sobrenomeCadastro,
            "Idade" : idadeCadastro,
            "Email" : emailCadastro,
            "Celular" : celularCadastro,
            "EnderecoCep" : cepCadastro,
            "Cidade" : cidadeCadastro,
            "Estado" : estadoCadastro,
            "AnimalPreferido" : animalCadastro,
            "PortePreferido" : porteCadastro,
            "GeneroPreferido" : generoCadastro
        }
        const responseData = await EnviarDados(url, data);
        if(responseData == 200){
            alert("Cadastro realizado com sucesso, você já pode logar.");
        }else{
            alert("Falha no cadastro, verifique os campos e tente novamente");
        }
    }

    function EnviarDados(url, data){
        return Promise.resolve(axios.post(url, data).then(response => response.status).catch(err => 400));
    }


    return(
        <>
            <Adocaoheader/>
            <div class="row">
                <div class="col-2 offset-5 jorge1">
                    <img class="logocadastro" src={logotemp}/>
                </div>
            </div>
            <div class="container backgroundContainer">
                <form class="cadastro-forms" onSubmit={Cadastrar}>
                    <div class="col-8 offset-2 backgroundCadastro">
                        <div class="cadastro-box col-10 offset-4">
                            <p class="cadastrochecktext">Adotante</p>
                            <input type="radio" class="cadastrocheckbox" name="tipocadastro" checked/>
                            <p class="cadastrochecktext">Tutor</p>        
                            <input type="radio" class="cadastrocheckbox" name="tipocadastro" disabled/>
                        </div>
                    </div>
                    <div class="col-8 offset-2 backgroundCadastro">
                        <div class="row">
                            <div class="col-xxl-5 col-lg-12 offset-2">
                                <input class="inputfields" type="text" name="usuarioCadastro" onChange={e => setUsuarioCadastro(e.target.value)} placeholder="Usuario"/>
                                <input class="inputfields" type="text" onChange={e => setNomeCadastro(e.target.value)} placeholder="Nome"/>
                                <input class="inputfields" type="number" onChange={e => setIdadeCadastro(e.target.value)} placeholder="Idade"/>
                                <input class="inputfields" type="number" onChange={e => setCelularCadastro(e.target.value)} placeholder="Celular"/>
                                <input class="inputfields" type="number" onChange={e => setCepCadastro(e.target.value)} placeholder="CEP"/>
                                <select class="inputfields" onChange={e => setAnimalCadastro(e.target.value)}>
                                    <option value="" disabled selected hidden>Tipo de Pet</option>
                                    <option value="Cachorro">Cachorro</option>
                                    <option value="Gato">Gato</option>
                                </select>
                                <select class="inputfields" type="text" onChange={e => setGeneroCadastro(e.target.value)}>
                                    <option value="" disabled selected hidden>Gênero</option>
                                    <option value="M">Macho</option>
                                    <option value="F">Femea</option>
                                </select>
                                <input disabled class="inputfields" type="text" onChange={e => setRacaCadastro(e.target.value)} placeholder="Raça do Pet"/>
                                <input disabled class="inputimg" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
                            </div>
                            <div class="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                                <input class="inputfields" type="password" onChange={e => setSenhaCadastro(e.target.value)} placeholder="Senha"/>
                                <input class="inputfields" type="text" onChange={e => setSobrenomeCadastro(e.target.value)} placeholder="Sobrenome"/>
                                <input class="inputfields" type="email" onChange={e => setEmailCadastro(e.target.value)} placeholder="E-Mail"/>
                                <select class="inputfields" onChange={e => setEstadoCadastro(e.target.value)}>
                                    <option value="" disabled selected hidden>Estado</option>
                                    <option value="RS">RS</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                </select>
                                <input class="inputfields" type="text" onChange={e => setCidadeCadastro(e.target.value)} placeholder="Cidade"/>
                                <select class="inputfields" onChange={e => setPorteCadastro(e.target.value)}>
                                    <option value="" disabled selected hidden>Porte</option>
                                    <option value="Pequeno">Pequeno</option>
                                    <option value="Medio">Medio</option>
                                    <option value="Grande">Grande</option>
                                </select>
                                <input disabled class="inputfields" type="text" onChange={e => setVacinasCadastro(e.target.value)} placeholder="Vacinas"/>
                                <input disabled class="inputfields" type="text" onChange={e => setCorCadastro(e.target.value)} placeholder="Cor"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 offset-2 backgroundCadastro">
                        <input class="enviarcadastro" type="submit"/>
                    </div>
                </form>
            </div>
        </>
    );

}

export default Adocaocadastro;