var guests = [];

function alerta(){
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value

    if (name === "" || age === null) {
        alert("Llena correctamente los campos")
    } else {
        guests.push(name);

        var list = "<li>" + guests.join("</li><li>") + "</li>";
        document.getElementById("list").innerHTML = list;

        var welcome = "Hola, Bienvenido " + name + " tienes: " + age + " años ";
        alert(welcome);
    }
}

function limpiar(){
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}