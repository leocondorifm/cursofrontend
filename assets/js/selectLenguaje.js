function getLenguaje(idioma){
/* PRUEBA DE EDICION */
    /*let setLeng = '';

    if(idioma==='esp'){
        setLeng = 'esp';    
    }else if(idioma==='eng'){
        setLeng = 'eng';
    }else{
        setLeng = 'esp';
    }*/
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch('https://www.leocondori.com.ar/api/setup/'+idioma+'.php', requestOptions)
    .then( resp => resp.json() )
    .then( respObj => {

        console.log(respObj.header.txtlogo);
        console.log(respObj.header.sec1);

    })
    .catch((error) => console.error(error));
}

//getLenguaje('esp');
getLenguaje('eng');