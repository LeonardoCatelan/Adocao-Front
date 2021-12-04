import React, { Component, useEffect } from 'react';
import './adocaousuario.css';
import AdocaoheaderLogado from './adocaoheaderlogado';
import axios from 'axios';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import like from './img/like.svg'
import dislike from './img/dislike.svg'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useHistory } from "react-router-dom";
import connect from "./config.js"

function Adocaousuario() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [quilometros, setQuilometros] = useState(5);
    const [i, setI] = useState(0);
    const [retorno, setRetorno] = useState([
        {
            retornoPet: {
                id: 0,
                usuario: "",
                nome: "",
                sobrenome: "",
                email: "",
                celular: "",
                animal: "",
                porte: "",
                genero: "",
                vacinas: "",
                raca: "",
                cor: "",
                img: "https://imgur.com/FvVFTuO.png"
            },
            distancia: "",
            matches: "",
            mensagemErro: null
        }
    ]);
    const [pet, setPet] = useState();
    
    useEffect(() => {
        console.log(retorno);
    }, [retorno]);

    useEffect(() => {
        console.log(pet);
    }, [pet]);

    function lerId(){
        return sessionStorage.getItem("id");
    }

    function laike(){
        handleOpen();
    }

    function dislaike(){
        if(retorno.length <= i+1){
            alert("Não há mais pets encontrados, aumente a distância e tente novamente");
        }else{
            setI(i+1);
        }
    }

    async function MandarRequest(e)
    {
        e.preventDefault();

        setI(0);
        var id = lerId();

        var url = `${connect}/api/DataAccess/BuscarPet?Id=${id}&distanciaMaxima=${quilometros}`;
        
        const resposta = await EnviarRequisicao(url);
        console.log(resposta);
        if(resposta.data[0].mensagemErro != null){
            alert("Não foram encontrados pets, aumente a distância e tente novamente");
        }else{
            console.log(resposta);
            setRetorno(resposta.data);
            setPet(retorno[0]);

            var div = document.getElementById('caixa');
            div.classList.remove('escondido')

            var divBotao = document.getElementById('botaopesquisa');
            divBotao.classList.remove('caixaescondida');
        }
          
    }

    function EnviarRequisicao(url){
        return Promise.resolve(axios.post(url).then(response => response).catch(err => 400));
    }


    return(
        <>    
            <AdocaoheaderLogado/>
            <div class="escondido" id="caixa">
                    <div class="container">
                        <div class="row">
                            <div class="col-6 offset-3 imagePet caixote">
                                <img class="imageDog col-12" src={retorno[i].retornoPet.img}/>
                                <div class="row">
                                    <div class="col-sm">
                                        <p class="textoCard">Pet: {retorno[i].retornoPet.animal}</p>
                                    </div>
                                    <div class="col-sm">
                                        <p class="textoCard">Porte: {retorno[i].retornoPet.porte}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <p class="textoCard">Genero: {retorno[i].retornoPet.genero}</p> 
                                    </div>
                                    <div class="col-sm">
                                        <p class="textoCard">Vacinas: {retorno[i].retornoPet.vacinas}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <p class="textoCard">Raça: {retorno[i].retornoPet.raca}</p> 
                                    </div>
                                    <div class="col-sm">
                                        <p class="textoCard">Cor: {retorno[i].retornoPet.cor}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <p class="textoCard">Distância: {retorno[i].distancia}</p> 
                                    </div>
                                    <div class="col-sm">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="botoeslikedislike col-12 col-sm-8 col-md-6 lowres">
                            <div class="botaodislike botaohover">
                                <img src={dislike} onClick={dislaike}/>
                            </div>
                            <div class="botaolike botaohover">
                                <img src={like} onClick={laike}/>
                            </div>
                        </div>
            </div>
            <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                Obrigado por realizar esta adoção
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Entre em contato com o Tutor pelos seguintes canais de comunicação: 
                <br/>
                Nome: {retorno[i].retornoPet.nome} {retorno[i].retornoPet.sobrenome}
                <br/>
                Celular: {retorno[i].retornoPet.celular}
                <br/>
                E-Mail: {retorno[i].retornoPet.email}
                </Typography>
            </Box>
            </Fade>
        </Modal>
        </div>
            <div class="row botaorequest caixaescondida" id="botaopesquisa">
                <div class="col-3 offset-5">
                    <form class="usuario-forms" onSubmit={MandarRequest}>
                        <label class="col-3" for="quilometros">Distancia:</label>
                        <input type="number" class="inputfields col-12 col-md-3" id="quilometros" name="quilometros" onChange={e => setQuilometros(e.target.value)} placeholder="km"/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        </>
    );

}

export default Adocaousuario;