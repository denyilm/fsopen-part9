interface bodyParams {
    height: number;
    weight: number;
}

const calculateBmi = (height: number, weight: number): string => {
    let heightInM = height/100
    let bmi = weight/(heightInM*heightInM)
    if(bmi<16){
        return 'Underweight (Severe thinness)'
    }
    if(bmi<17){
        return 'Underweight (Moderate thinness)'
    }
    if(bmi<18.5){
        return 'Underweight (Mild thinness)'
    }
    if(bmi<25){
        return 'Normal range'
    }
    if(bmi<30){
        return 'Overweight (Pre-obese)'
    }
    if(bmi<35){
        return 'Obese (Class I)'
    }
    if(bmi<40){
        return 'Obese (Class II)'
    }
    if(bmi>=40){
        return 'Obese (Class III)'
    }
}

console.log(calculateBmi(180, 74))