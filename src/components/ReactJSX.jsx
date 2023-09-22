import React from 'react';

const asisten = {
    name : 'Anas Noor Hakim',
    jurusan : 'Teknik Komputer 2020'
};
function greetings(asisten){
    return asisten.name + ' dari ' + asisten.jurusan;
}
//menggunakan JSX
const ReactJSX = () => {
    return (
        <div>
            <h1>Belajar JSX</h1>
            <h2>Belajar JSX --- {greetings(asisten)}</h2>
            <p style={{color:'#00ff00'}}>ini adalah contoh menggunakan JSX</p>
        </div>
    );
}
//tidak menggunakan JSX
const ReactNoJSX = () => {
    return React.createElement('div', null, 
        React.createElement('h1', null, 'Halo Praktikan hehe'),
        React.createElement('h2', null, 'Nama saya ', greetings(asisten)), 
        React.createElement('p', {style:{color:'#ff0000'}}, 'ini adalah contoh tanpa JSX')
    )
}

const OpeningJSX = () => {
    return(
        <div>
            <h1>Modul 2 : Component and Props</h1>
            <h2>Praktikum RPLBK - Kelompok 4</h2>
        </div>
        
    );
}

export default ReactJSX;
export {ReactNoJSX};
export  {OpeningJSX};
