let mayjen = {
    firstName : 'mayjennn',
    height : 170,
    weight : 50,
    calculateBMI : function () {
        let t_meter = this.height / 100
        let bmi = this.weight / (t_meter*t_meter)
        if (bmi < 16.0) {
            console.log('Kategori : Severely Underweight')
        }else if (bmi >= 16.0 && bmi <= 18.4) {
            console.log('Kategori : Underweight')
        }else if (bmi >= 18.5 && bmi <=24.9) {
            console.log('Kategori : Normal')
        }else if (bmi >= 25.0 && bmi <=29.9) {
            console.log('Kategori : Overweight')
        }else if (bmi >= 30.0 && bmi <=34.9) {
            console.log('Kategori : Moderately Obese')
        }else if (bmi >= 35.0 && bmi <=39.9) {
            console.log('Kategori : Severely Obese')
        }else if (bmi >= 40.0) {
            console.log('Kategori : Normal')
        }
    }
    
}

console.log(mayjen);
