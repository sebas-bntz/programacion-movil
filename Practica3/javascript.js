function changeColor(){

    var backColor = document.getElementById("headerContent");
    var textColor = document.getElementById("headerContent");

    backColor.style.backgroundColor = "rgba(0,0,0,0.7)";
    textColor.style.color = "white";
    
}

function changeText(){

    document.getElementById("title").innerHTML = "Macbook";
    document.getElementById("subtitle").innerHTML = "Macbook Pro 13'";
    document.getElementById("p1").innerHTML = "La MacBook Pro de 16 pulgadas es sin duda la notebook más poderosa de Apple, pensada para quienes están dispuestos a desafiar los límites y cambiar el mundo.";
    document.getElementById("p2").innerHTML = "Tiene una envolvente pantalla Retina, procesadores superrápidos, gráficos avanzados, la batería de mayor capacidad en una MacBook Pro hasta ahora, un teclado Magic Keyboard y un increíble espacio de almacenamiento. Es la notebook más avanzada de la línea Pro y es perfecta para los usuarios más pro.";

}

function changeImg(){
    
    document.getElementById("image").src="./assets/mac.jpg"
    document.getElementById("header").style.backgroundImage = "url('./assets/macbook.jpg')";

}