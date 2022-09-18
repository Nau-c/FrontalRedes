/*
getElementByName: obtenemos los valores por input (empleando un nombre por identificador)

getElementById:Usamos el nombre de la variable.value
*/

function crearTabla() {
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