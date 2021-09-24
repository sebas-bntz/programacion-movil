function desplegarTexto(nombre){
    
    if (document.getElementById('r1').checked) {
        valueTipo = document.getElementById('r1').value;
    } else {
        valueTipo = document.getElementById('r2').value;
    }

    document.getElementById('p1').innerHTML = 'Bienvenido ' + nombre;
    document.getElementById('p2').innerHTML = 'Hola, tu eres ' + valueTipo;
}