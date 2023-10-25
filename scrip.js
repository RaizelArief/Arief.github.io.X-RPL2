let operator = prompt ("Masukkan Operator + ,-, *. / ,%" )
let angka1 = parseInt(prompt ("Masukkan angka1 "));
let angka2 = parseInt(prompt("Masukkan angka2 "));
let hasil;

if (operator == "+") {
    hasil = angka1 + angka2
} else if (operator == "-"){
    hasil = angka1 - angka2
} else if (operator == "/"){
   hasil = angka1/angka2
} else if  (operator == "*"){
    hasil = angka1 * angka2
}

else if (operator == "%") {
    hasil = angka1 % angka2
}

document.write (hasil) ;