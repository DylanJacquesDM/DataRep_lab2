class BMI {
    constructor(height, weight){
         this.height= height;
         this.weight = weight;
    }
    //method
    CalculateBMI(){
        let bmi = this.weight / (this.height**2);
        return bmi;

    }
}

//calculations
let MyBmi = new BMI(1.8,75);
let calculatedBmi = MyBmi .CalculateBMI();
console.log(calculatedBmi);