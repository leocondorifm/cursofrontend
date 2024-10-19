//var name = 'Martin'; //Texto
//var age = 33;//Número
//var ageN = '33';//Texto

//Escribo las variable por consola
//console.log(name);
//console.log(age);
//console.log(ageN);

/*
var logoTxTPrincipal = 'Español';
var logoTxTSecundario = 'Inglés';
$("#txt-logo").html(logoTxTSecundario);

var txtHome = 'Inicio';
var txtHomeSec = 'Home';
$("#txt-home").html(txtHome);
*/

/* TEXTO ESPAÑOL HEADER */
  var txtHeader = ['Portfolio','Inicio','Sección 1','Sección 2','Sección 3','Buscar'];
console.log('length: ' + txtHeader.length);
var test=["a","b"];
  //var txtHeader = [0,1,2,3,4];
//console.log(txtHeader);
//console.log(txtHeader[0]);
$(".num0").html(txtHeader[0]);
$(".num1").html(txtHeader[1]);

/* RECORRER CON BUCLES */
for(var i=0; i < txtHeader.length; i++){
    console.log(txtHeader[i]);
    //$(".num"+i).html(txtHeader[i]);
}
/* /RECORRER CON BUCLES */

$("#sec1").html(txtHeader[2]);
$("#sec2").html(txtHeader[3]);
$("#sec3").html(txtHeader[4]);
$("#sec4").html(txtHeader[5]);
/* /TEXTO ESPAÑOL HEADER */

/* TEXTO ESPAÑOL BANNERS */
var banner1 = ["Colocar imagen.","Some representative placeholder content for the first slide of the carousel.","Sign up today"];
$("#txt1").html(banner1[0]);
$("#txt1-1").html(banner1[1]);
$("#txt1-2").html(banner1[2]);
/* /TEXTO ESPAÑOL BANNERS */

/* TEXTO ESPAÑOL BANNERS */
var banner2 = ["Another example headline.","Some representative placeholder content for the second slide of the carousel.","Learn more"];
$("#txt2").html(banner2[0]);
$("#txt2-1").html(banner2[1]);
$("#txt2-2").html(banner2[2]);
/* TEXTO ESPAÑOL BANNERS */

/* TEXTO ESPAÑOL BANNERS */
var banner3 = ["One more for good measure.","Some representative placeholder content for the third slide of this carousel.","Browse gallery"];
$("#txt3").html(banner3[0]);
$("#txt3-1").html(banner3[1]);
$("#txt3-2").html(banner3[2]);
/* TEXTO ESPAÑOL BANNERS */

/* TEXTO SECTION 1 */
var sec1 = ["assets/img/section1/ai-human.jpg","Heading1","Some representative placeholder content for the three columns of text below the carousel. This is the first column.","View details &raquo;"]
$("#sec-1-0").attr('src',sec1[0]);//MUY IMPORTANTE SABERLO.
//console.log( $("#sec-1-0").attr('src') );
$("#sec-1-1").html(sec1[1]);
$("#sec-1-2").html(sec1[2]);
$("#sec-1-3").html(sec1[3]);
/* /TEXTO SECTION 1 */




//Escribir por consola, CONCATENANDO texto y variable.
console.log('Hola ' + name + ', se que tenés ' + age + ' años de edad.');

//Lanza una alerta para que el usuario confirme
//alert('Hello Word!');

//Función que recibe dos parámetros, nombre y edad.
function sayHello(name,age){
    
    //Obtengo el valor del input search.
    console.log(document.getElementById('search').value);//Javascript
    console.log($("#search").val());//Jquery

    $("#txt-1").html($("#search").val());

    //Concateno los parámetros recibidos con texto.
    console.log('Hola ' + name + ', se que tenés ' + age + ' años de edad.');
}

//Función básica sin parámetros.
function nameFunction(){
    console.log('Hola');
}

//Ejecuto la función al cargar la página.
nameFunction();

/* JQUERY */
function ocultarFooter(){
    $("#footer").hide();
}

function mostrarFooter(){
    $("#footer").show();
}