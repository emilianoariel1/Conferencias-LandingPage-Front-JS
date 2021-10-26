function resumen() {
    let precio = document.getElementById("cantidad").value * 200
    let promo = document.getElementById("categoria").value
    let total = precio * promo

    console.log(precio)
    console.log(promo)
    console.log(total)

    if (total < 40) {
        document.getElementById("mensaje").innerText= "No ha especificado una cantidad válida"
        document.getElementById("mensaje").style.color= "red"

    } else {
        document.getElementById("mensaje").innerText= `Total a Pagar: $${total}`
        document.getElementById("mensaje").style.color= "#084298"

        
    }
    
    
    

    

}
    
function limpiar() {
    document.getElementById("mensaje").innerText= ""
}
    
        
