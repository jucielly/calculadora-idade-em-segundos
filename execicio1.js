let age = prompt("Qual a sua idade? ");
age = parseFloat(age);

let result = age*365*24*60*60;


document.write("Desde que você nasceu já se passaram " + result + " segundos!" );