// // Exercise2
// // IIFE
// const outputBMI = (functionA(berat, tinggi){
//     let t_tinggi = tinggi / 100
//     let bmi = berat / (t_meter*t_meter)
//     console.log("tinggi : ${t_meter}m")
//     console.log("berat : ${berat}kg")
// })(50, 170)

// console.log("bmi : ${outputBMI}")

// Callback
function hitung_bmi(berat, tinggi, callback) {
    let t_meter = tinggi / 100
    let bmi = berat / (t_meter*t_meter)
    callback(t_meter, berat)
    return bmi
}
let output = hitung_bmi(50, 170,function(t_meter, berat) {
    console.log('tinggi : ${t_meter}m')
    console.log('berat : ${berat}kg')
})
console.log(output);