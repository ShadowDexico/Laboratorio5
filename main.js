function validarForm() {
    let nombre = document.getElementById("nombre2").value;
    let correo = document.getElementById("email").value;
    let MejorMundial = document.getElementById("mejor_mundial").value;
    let Combox = document.getElementById("seleccion").value;


    if (nombre == "") {
        alert("Escriba el nombre");
        return false;
    }

    if (correo == "") {
        alert("Escriba el correo");
        return false;
    }

    if (MejorMundial == "") {
        alert("Rellenar el campo del mundial favorito es obligatorio");
        return false;
    }

    if (Combox == "0") {
        alert("Debe seleccionar una opcion en el combo box");
        return false;
    }

    
}