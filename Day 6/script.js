function Fahrenheit(){
    var temp = document.getElementById("temp").value;
    temp = parseFloat(temp)
    const fahrenheit = (temp*1.8)+32;
    document.getElementById("ans").innerHTML = fahrenheit.toFixed(2) +  "\u00B0 F";
}

function Celsius(){
    var temp = document.getElementById("temp").value;
    temp = parseFloat(temp)
    const celsius = (temp-32) / 1.8;
    document.getElementById("ans").innerHTML = celsius.toFixed(2) +  "\u00B0 C";
}