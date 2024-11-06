// fungsi untuk menghitung BMI
 function hitungBMI(berat, tinggi){
    let bmi = berat / (tinggi * tinggi);
    return bmi;
 }

 let berat = 70;
 let tinggi = 1.7;

 let bmi = hitungBMI(berat, tinggi);
 console.log("BMI:" + bmi);
