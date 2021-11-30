import * as React from 'react';
import './adocaoheader.css';
import templogo from './img/templogoheader.png'
import Switch from '@mui/material/Switch'
import { useState } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";



function AdocaoheaderLogado() {
    
    let history = useHistory()

    function deslogar(){
        sessionStorage.clear();
        history.push("/index");
    }

    return(
            <div class="backgroundHeader">
                <div class="header-adocao row">
                    <div class="col-2">
                        <img class="headerLogo col-8 col-xxl-3 col-xl-3 col-lg-3 col-md-5" src={templogo}/>
                    </div>
                    <div class="col-3 col-xxl-2 offset-8 col-xl-5 col-lg-5 col-md-5">
                        <p class="textodeslogar headerhover" onClick={deslogar}>Deslogar</p>
                    </div>
                </div>
            </div>
    );

}


export default AdocaoheaderLogado;