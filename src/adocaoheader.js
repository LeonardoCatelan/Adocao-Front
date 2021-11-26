import * as React from 'react';
import './adocaoheader.css';
import templogo from './img/templogoheader.png'
import Switch from '@mui/material/Switch'
import { useState } from 'react';
import axios from 'axios';



function Adocaoheader() {

    
const [tutor, setTutor] = useState(false)

const [nome, setNome] = useState("")
const [senha, setSenha] = useState("")

async function Login(e){

    e.preventDefault();

    var data = {
        "usuario" : nome,
        "senha" : senha
    };
    var url = "";
    if(tutor){
        url = "http://localhost:12439/api/DataAccess/LoginTutor";
        
        const response = await Autenticar(url, data);
        if(response.status == 200){
            alert(response.data)
        }else{
            alert("Usuário ou senha incorretos");
        }

    }else{
        url = "http://localhost:12439/api/DataAccess/LoginAdotante";
        
        const response = await Autenticar(url, data);
        if(response.status == 200){
            alert(response.data)
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
        <div class="header-adocao">
            <img class="logo" src={templogo}/>
            <div class="header-right">
                <form onSubmit={Login}>
                <div class="switchBar">
                    <p>Adotante</p>
                    <Switch name="switchLogin" checked={tutor} onChange={e => setTutor(e.target.checked)} defaultChecked color="default"/>
                    <p id="switchBarRight">Tutor</p>
                </div>
                    <label>
                        <div class="inputText">
                            <input class="login" type="text" name="name" onChange={e => setNome(e.target.value)}/>
                        </div>
                        <div class="inputText">
                            <input class="login" type="password" onChange={e => setSenha(e.target.value)}/>
                        </div>
                    </label>
                    <div class="inputText">
                        <input class="submitButton" type="submit"/>
                    </div>
                </form>
            </div>
            <p class="cadastro">Novo por aqui? <span class="cadastroClick">Cadastre-se</span> já!</p>
        </div>
    );

}


export default Adocaoheader;