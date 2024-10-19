
function setLeng(idioma){
    let service = ''; 
    if(idioma==='esp'){
        $('#lengeng').removeClass('active');
        $('#lengesp').addClass('active');
        service = 'esp';
    }else if(idioma==='eng'){
        $('#lengesp').removeClass('active');
        $('#lengeng').addClass('active');
        service = 'eng';
    }else{
        $('#lengeng').removeClass('active');
        $('#lengesp').addClass('active');
        service = 'esp';
    }

    // Utilizar fetch para obtener el archivo JSON
    //Carga un JSON de manera local
    //fetch('../../data/eng.json')
    
    fetch('https://leocondori.com.ar/api/setup/'+service+'.php')
    //fetch('../../data/'+service+'.json')
    .then(response => {

        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }

    return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
    // Mostrar los datos en el HTML

    //console.log(data.header.txtlogo);
    /* HEADER */
    $("#txt-logo").html(data.header.txtlogo);
    $("#sec1").html(data.header.sec1);
    $("#sec2").html(data.header.sec2);
    $("#sec3").html(data.header.sec3);

    /*BANNER 1 */
    $("#txt1").html(data.header.estudios0.tex0);
    $("#txt1-1").html(data.header.estudios0.text1);
    $("#txt1-2").html(data.header.estudios0.textbtn);

    /*BANNER 2 */
    $("#txt2").html(data.header.estudios1.tex0);
    $("#txt2-1").html(data.header.estudios1.text1);
    $("#txt2-2").html(data.header.estudios1.textbtn);

    /*BANNER 3 */
    $("#txt3").html(data.header.estudios2.tex0);
    $("#txt3-1").html(data.header.estudios2.text1);
    $("#txt3-2").html(data.header.estudios2.textbtn);



    /* EXPERIENCIA */
    $("#sec-1-1").html(data.header.experiencia0.tex0);
    $("#sec-1-2").html(data.header.experiencia0.text1);
    $("#sec-1-3").html(data.header.experiencia0.textbtn);

    $("#sec-2-1").html(data.header.experiencia1.tex0);
    $("#sec-2-2").html(data.header.experiencia1.text1);
    $("#sec-2-3").html(data.header.experiencia1.textbtn);

    $("#sec-3-1").html(data.header.experiencia2.tex0);
    $("#sec-3-2").html(data.header.experiencia2.text1);
    $("#sec-3-3").html(data.header.experiencia2.textbtn);

    $("#p1-1").html(data.header.portfolio0.tex0);
    $("#p1-2").html(data.header.portfolio0.text1);
    
    //console.log('/assets/img/portfolio/'+data.header.portfolio0.img0);
    //console.log('assets/img/portfolio/'+data.header.portfolio0.img0);
    //console.log( $("#imgport0").attr('src') ); Conocer el valor de SRC
    $("#imgport0").attr('src','/assets/img/portfolio/'+data.header.portfolio0.img0);

    $("#p2-1").html(data.header.portfolio1.tex0);
    $("#p2-2").html(data.header.portfolio1.text1);
    $("#imgport1").attr('src','/assets/img/portfolio/'+data.header.portfolio1.img0);
    //console.log(data.header.portfolio1.text1);

    $("#p3-1").html(data.header.portfolio2.tex0);
    $("#p3-2").html(data.header.portfolio2.text1);
    $("#imgport2").attr('src','/assets/img/portfolio/'+data.header.portfolio2.img0);
    /**
     * &copy; 2017–2024 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
     */

    $("#txtfooter").html(data.header.footer.txt0 +' <a href="#">'+data.header.footer.txt2 +'</a> &middot; <a href="#">'+data.header.footer.txt3 +'</a>');


    //EJEMPLO DE CONCATENAR VARIABLES O VALORES DE UN ARRAY Y TEXTO
        //let dataFooter = [2021,2025,"Privacy","Terms"];
        //$("#txtfooter").html('&copy; '+ dataFooter[0] +'–'+dataFooter[1]+' Company, Inc. &middot; <a href="#">'+dataFooter[2]+'</a> &middot; <a href="#">'+ dataFooter[3] +'</a>');
        //console.log(data.header.portfolio2.text1);
    //FIN DE EJEMPLO DE CONCATENAR VARIABLES O VALORES DE UN ARRAY Y TEXTO
    /*resultadoDiv.innerHTML = `<p>Nombre: ${data.persona.nombre}</p>
                                <p>Edad: ${data.persona.edad}</p>
                                <p>Trabajo: ${data.persona.trabajo}</p>
                                <p>Email: ${data.persona.contacto.email}</p>
                                <p>Teléfono: ${data.persona.contacto.telefono}</p>`;*/
    })
    .catch(error => {
    console.error('Error al consumir el archivo JSON:', error);
    });

}

setLeng('esp');