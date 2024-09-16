let numero = document.getElementById('cantidad');
let genera = document.getElementById('generar');
let contrasena= document.getElementById('contrasena');

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()';

function generar(){

    let ingreso = parseInt(numero.value);

    if ( ingreso < 8 ){
        alert('Ingrese un número mayor a 8');
    }

    let contri = '';

    for ( let i=0; i <ingreso;i++){
        let aleatorio = caracteres[Math.floor(Math.random()*caracteres.length)];
        contri+=aleatorio;
    }
    contrasena.value=contri;
    if (evaluenum(contrasena.value)&&evaluemay(contrasena.value)&&evalueesp(contrasena.value)){
        alert('La contraseña es fuerte')
    }else{
        alert('La contraseña es débil')
    }
}

function limpiar(){
    contrasena.value='';
    numero.value='';
}

function evaluenum(cad){
    const nume = /[0123456789]/.test(cad)
    return nume
}
function evaluemay(cad){
    const may = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/.test(cad)
    return may
}
function evalueesp(cad){
    const esp = /[!#$%&()*]/.test(cad)
    return esp
}