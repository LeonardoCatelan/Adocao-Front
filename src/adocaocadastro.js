import * as React from 'react';
import Adocaoheader from './adocaoheader';
import './adocaocadastro.css';
import logotemp from './img/templogo.png'
import { useState } from 'react';
import axios from 'axios';
import connect from "./config.js"

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
        
        //var url = "http://localhost:12439/api/DataAccess/CadastroAdotante";
        var url = `${connect}/api/DataAccess/CadastroAdotante`;
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
            window.location.reload();
        }else{
            alert("Falha no cadastro, verifique os campos e tente novamente");
            window.location.reload();
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
                        <div class="cadastro-box col-12 col-sm-6 col-lg-10 offset-1 offset-sm-3 offset-lg-4">
                            <p class="cadastrochecktext">Adotante</p>
                            <input type="radio" class="cadastrocheckbox" name="tipocadastro" checked/>
                            <p class="cadastrochecktext">Tutor</p>        
                            <input type="radio" class="cadastrocheckbox" name="tipocadastro" disabled/>
                        </div>
                    </div>
                    <div class="col-8 offset-2 backgroundCadastro">
                        <div class="row">
                            <div class="col-xxl-5 col-lg-12 offset-2 ">
                                <input class="col-8 col-sm-6 inputfields" type="text" name="usuarioCadastro" onChange={e => setUsuarioCadastro(e.target.value)} placeholder="Usuario"/>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-4 col-xxl-5 cadastroRight">
                                <input class="col-8 col-sm-6 inputfields" type="password" onChange={e => setSenhaCadastro(e.target.value)} placeholder="Senha"/>
                            </div>
                            <div class="col-xxl-5 col-lg-12 offset-2 ">
                                <input class="col-8 col-sm-6 inputfields" type="text" onChange={e => setNomeCadastro(e.target.value)} placeholder="Nome"/>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-4 col-xxl-5 cadastroRight">
                                <input class="col-8 col-sm-6 inputfields" type="text" onChange={e => setSobrenomeCadastro(e.target.value)} placeholder="Sobrenome"/>
                            </div>
                            <div class="col-xxl-5 col-lg-12 offset-2 ">
                                <input class="col-8 col-sm-6 inputfields" type="number" onChange={e => setIdadeCadastro(e.target.value)} placeholder="Idade"/>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-4 col-xxl-5 cadastroRight">
                                <input class="col-8 col-sm-6 inputfields" type="email" onChange={e => setEmailCadastro(e.target.value)} placeholder="E-Mail"/>
                            </div>
                            <div class="col-xxl-5 col-lg-12 offset-2 ">
                                <input class="col-8 col-sm-6 inputfields" type="text" onChange={e => setCelularCadastro(e.target.value)} placeholder="Celular"/>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-4 col-xxl-5 cadastroRight">
                                <select class="col-8 col-sm-6 inputfields inputdropdown" onChange={e => setEstadoCadastro(e.target.value)}>
                                    <option value="" disabled selected hidden>Estado</option>
                                    <option value="RS">RS</option>
                                    <option value="SC">SC</option>
                                    <option value="SP">SP</option>
                                </select>
                            </div>
                            <div class="col-xxl-5 col-lg-12 offset-2 ">
                                <input class="col-8 col-sm-6 inputfields" type="number" onChange={e => setCepCadastro(e.target.value)} placeholder="CEP"/>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-4 col-xxl-5 cadastroRight">
                                <select class="col-8 col-sm-6 inputfields  inputdropdown" onChange={e => setPorteCadastro(e.target.value)}>
                                    <option value="" disabled selected hidden>Porte</option>
                                    <option value="Pequeno">Pequeno</option>
                                    <option value="Medio">Medio</option>
                                    <option value="Grande">Grande</option>
                                </select>
                            </div>
                            <div class="col-xxl-5 col-lg-12 offset-2 ">
                                <select class="col-8 col-sm-6 inputfields inputdropdown" onChange={e => setAnimalCadastro(e.target.value)}>
                                    <option value="" disabled selected hidden>Tipo de Pet</option>
                                    <option value="Cachorro">Cachorro</option>
                                    <option value="Gato">Gato</option>
                                </select>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-4 col-xxl-5 cadastroRight">
                                <input disabled class="col-8 col-sm-6 inputfields " type="text" onChange={e => setVacinasCadastro(e.target.value)} placeholder="Vacinas"/>
                            </div>
                            <div class="col-xxl-5 col-lg-12 offset-2 ">
                                <select class="col-8 col-sm-6 inputfields" type="text" onChange={e => setGeneroCadastro(e.target.value)}>
                                    <option value="" disabled selected hidden>Gênero</option>
                                    <option value="M">Macho</option>
                                    <option value="F">Femea</option>
                                </select>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-4 col-xxl-5 cadastroRight">
                                <input disabled class="col-8 col-sm-6 inputfields inputfieldsphone" type="text" onChange={e => setCorCadastro(e.target.value)} placeholder="Cor"/>
                            </div>
                            <div class="col-xxl-5 col-lg-12 offset-2 ">
                                <input disabled class="col-8 col-sm-6 inputfields" type="text" onChange={e => setRacaCadastro(e.target.value)} placeholder="Raça do Pet"/>
                            </div>
                            <div class="col-xxl-5 col-lg-12 offset-2 ">
                                <input disabled class="col-8 col-sm-6 inputimg" type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
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