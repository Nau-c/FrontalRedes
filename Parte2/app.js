document.querySelector('form').onsubmit  = (e) => {

    e.preventDefault()

    let username  = "admin", 

        password  = "admin",

        inputUser = document.querySelector('#userName').value,

        inputPass = document.querySelector('#password').value

    if (inputUser != username || inputPass != password) {

        document.querySelector('#messageDetails').innerHTML = "Username and Password do not match.<br>Please try again."

    }

    if (inputUser == username && inputPass == password) {

        document.querySelector('#messageDetails').innerHTML = "Success!<br>You're currently logged in now."

    }

    document.querySelector('#frmLogin').classList.add("hide")

    document.querySelector('.message').classList.remove("hide")

}



function crearTabla() {
    const route1ds = /mnt/bck/${paloalto1}/ds/fileX;
    const route1rc = /mnt/bck/${paloalto1}/rc/fileX;

    const route2ds = /mnt/bck/${paloalto2}/ds/fileX;
    const route2rc = /mnt/bck/${paloalto2}/rc/fileX;

    //Comprobación
    if (document.getElementById("generated")) {
        document.getElementById("generated").remove();
    }

    //Accedemos al id
    let tableContainer = document.getElementById("table-container");
    let filas = document.getElementById('filas');
    let columnas = document.getElementById("columnas");

    let tabla = document.createElement("table");
    tabla.id = "generated";
    let cuerpoTabla = document.createElement("tbody");
    

    for (let fila = 0; fila < filas.value; fila++) {
        let filasCreadas = document.createElement("tr");

        for (let columna = 0; columna < columnas.value; columna++) {
            let celda = document.createElement("td");
        celda.appendChild(document.createTextNode(`Row: ${fila} Col: ${columna}`));
            filasCreadas.appendChild(celda);

        }
        cuerpoTabla.appendChild(filasCreadas);
    }

    tabla.appendChild(cuerpoTabla);
    tableContainer.appendChild(tabla);
}



// //Recogemos las variables en el formulario completo
// let datosFormulario = document.getElementById("miFormulario");

// //Añade un evento al botón submit y se le pasa la función crearTabla
// datosFormulario.addEventListener("submit", crearTabla);



// //Le pasamos un parámetro a la función
// function crearTabla(evento) {
//     //el parametro de la funcion se ejecuta en la funcion preventDefault()
//     evento.preventDefault();
//     console.log(datosFormulario.elements[0].value);
//     console.log(datosFormulario.elements[1].value);



//     //Comprobación
//     //usando el getElementById, solo usamos el nombre de la variable.value
//     if (document.getElementById("generated")) {
//         document.getElementById("generated").remove();
//     }

//     //El parametro de la fucnión ejecuta la funciónpreventDefault()
//     evento.preventDefault();
//     //Accedemos al id
//     let tableContainer = document.getElementById("table-container");

//     //Usamos el .value usando Byname y ByID
//     let filas = datosFormulario.elements[0].value;
//     let columnas = datosFormulario.elements[1].value;

//     let tabla = document.createElement("table");
//     //tabla.id = "generated";
//     let cuerpoTabla = document.createElement("tbody");


//     for (let fila = 0; fila < filas; fila++) {
//         let filasCreadas = document.createElement("tr");

//         for (let columna = 0; columna < columnas; columna++) {
//             let celda = document.createElement("td");
//             //Ecma Script Js moderno para concatenar, crear estring interpolado  
//             celda.appendChild(document.createTextNode(`Row: ${fila} Col: ${columna}`));
//             filasCreadas.appendChild(celda);

//         }
//         cuerpoTabla.appendChild(filasCreadas);
//     }

//     tabla.appendChild(cuerpoTabla);
//     tableContainer.appendChild(tabla);

// }