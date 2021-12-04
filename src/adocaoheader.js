import * as React from 'react';
import './adocaoheader.css';
import templogo from './img/templogoheader.png'
import Switch from '@mui/material/Switch'
import { useState } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import connect from "./config.js"




function Adocaoheader() {

const cadastroUrl = "http://142.4.193.144/cadastro";

const [tutor, setTutor] = useState(false)

const [nome, setNome] = useState("")
const [senha, setSenha] = useState("")

let history = useHistory()

function gravarId(id){
    sessionStorage.setItem("id", id);
    console.log(sessionStorage.getItem("id"));
}


async function Login(e){

    e.preventDefault();


    var data = {
        "usuario" : nome,
        "senha" : senha
    };
    var url = "";
    if(tutor){
        url = `${connect}/api/DataAccess/LoginTutor`;
        //url = "http://localhost:12439/api/DataAccess/LoginTutor";
        
        const response = await Autenticar(url, data);
        if(response.status == 200){
            gravarId(response.data);
            //history.push("/usuario");
        }else{
            alert("Usuário ou senha incorretos");
        }

    }else{
        url = `${connect}/api/DataAccess/LoginAdotante`;
        //url = "http://localhost:12439/api/DataAccess/LoginAdotante";
        
        const response = await Autenticar(url, data);
        if(response.status == 200){
            gravarId(response.data);
            history.push("/usuario");
        }else{
            alert("Usuário ou senha incorretos");
        }
    }

    //se for tutor, o login redirecionará para a página de tutor, caso não seja, ele vai redirecionar para a página de adotante em caso de sucesso
    
}

function Autenticar(url, data){
    return Promise.resolve(axios.post(url, data).then(response => response).catch(err => 400));
}

    return(
            <div class="backgroundHeader">
                <div class="header-adocao row">
                    <div class="col-2">
                        <img class="headerLogo col-10 col-xxl-3 col-xl-3 col-lg-3 col-md-5" src={templogo}/>
                    </div>
                    <div class="col-5 joao">
                        <p class="cadastro">Novo por aqui? <a href={cadastroUrl} class="cadastroClick">Cadastre-se</a> já!</p>
                    </div>
                    <div class="col-12 col-xxl-5 col-xl-5 col-lg-4 col-md-4 jorge">
                        <form onSubmit={Login}>
                            <div class="switchBar col-12">
                                <p class="d-none d-xl-block col-1 switchP">Adotante</p>
                                <p class="d-block d-xl-none switchP">Adotante</p>
                                <Switch name="switchLogin" checked={tutor} onChange={e => setTutor(e.target.checked)} defaultChecked color="default"/>
                                <p class=" d-none d-lg-block col-1 switchP" id="switchBarRight">Tutor</p>
                                <p class="d-block d-lg-none switchP">Tutor</p>
                                <label>
                                    <div class="inputText">
                                        <input class="login" type="text" name="name" onChange={e => setNome(e.target.value)}  placeholder="Usuario"/>
                                    </div>
                                    <div class="inputText">
                                        <input class="login" type="password" onChange={e => setSenha(e.target.value)}  placeholder="Senha"/>
                                    </div>
                                </label>
                                <div class="inputButton">
                                    <input class="submitButton d-block col-11" type="submit" value="Entrar"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );

}


export default Adocaoheader;