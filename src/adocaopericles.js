import React, { Component } from 'react';
import ReactPlayer from 'react-player'

function adocaopericles() {

var state = {
    robson: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    joao: "claudisnei"
}

return(
    <div id="content-logo">
        <h2 onClick = {() => alert(state.robson)} >Parabens, você descobriu o maior segredo do projeto, aproveite.</h2>
    <ReactPlayer url='https://www.youtube.com/watch?v=saalFn025fU' />
    </div>
);

}

export default adocaopericles;