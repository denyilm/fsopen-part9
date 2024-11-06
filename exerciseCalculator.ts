interface Result { 
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (dailyExercises: number[], target: number): Result => {
    let average = dailyExercises.reduce((a: number,b: number) => a+b)/dailyExercises.length
    let rating: number = 1
    let description: string = "bad"

    if((target - average)<1){
        rating = 2
        description = 'not too bad but could be better' 
    }
    if(target <= average){
        rating = 3
        description = 'awesome'
    }

    return {
        periodLength: dailyExercises.length,
        trainingDays: dailyExercises.filter(a => a != 0).length,
        average: average,
        target: target,
        success: average >= target,
        rating: rating,
        ratingDescription: description
    }
}

console.log(calculateExercises([0, 0, 0, 1, 0, 3, 1],2))