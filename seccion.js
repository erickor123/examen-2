function Señalar() {   
var vr1 = document.getElementById('t1').value; 
var imprime=""

     if (vr1 >= 0 && vr1 <= 11){
        imprime ="es de mañana"
    } else if (vr1 >= 12 && vr1 <= 18) {
        imprime ="es de tarde"
    } else if (vr1 >= 19 && vr1 <= 24) {
        imprime ="es de noche"
    } else {
        imprime ="este formato es de 24 horas"
    }
    console.log(imprime);
    document.getElementById('Señalar').innerHTML = imprime; 
     }
function Señalar2()  { 
    var vr2 = document.getElementById('t2').value;
    var imprime2 =""
    
if (vr2 == 1) {
    imprime2 ="estas feliz"
} else if (vr2 == 2) {
    imprime2 ="estas desanimado"
} else if(vr2 == 3) {
    imprime2="estas melancolico"
} else if(vr2 == 4){
    imprime2 ="estas triste"
} else if (vr2 == 5) {
    imprime2 ="estas enojado "
} else {
    imprime2 ="no es una emocion "
} 
console.log(imprime2);
document.getElementById('Señalar2').innerHTML = imprime2; 
} 
 