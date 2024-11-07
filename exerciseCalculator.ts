interface Result { 
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

interface ExerciseInput {
    target: number,
    dailyExercises: number[]
}

const parseArgumentsForArrays = (args: string[]): ExerciseInput => {
    if (args.length < 3) throw new Error('Not enough arguments');
    const dailyExercises_ = args.slice(3).map((b:string)=>{
        return Number(b);
    });
    let allNumber = true;
    dailyExercises_.forEach((a:number)=>{
        if(!isNaN(Number(a))){
            allNumber = false;
        }
    });
    if (!isNaN(Number(args[2])) && allNumber) {
      return {
        target: Number(args[2]),
        dailyExercises: dailyExercises_
      };
    } else {
      throw new Error('Provided values were not numbers!');
    }
  };

const calculateExercises = (target: number, dailyExercises: number[]): Result => {
    const average = dailyExercises.reduce((a: number,b: number) => a+b)/dailyExercises.length;
    let rating: number = 1;
    let description: string = "bad";

    if((target - average)<1){
        rating = 2;
        description = 'not too bad but could be better' ;
    }
    if(target <= average){
        rating = 3;
        description = 'awesome';
    }

    return {
        periodLength: dailyExercises.length,
        trainingDays: dailyExercises.filter(a => a != 0).length,
        average: average,
        target: target,
        success: average >= target,
        rating: rating,
        ratingDescription: description
    };
};

try {
    const { target, dailyExercises } = parseArgumentsForArrays(process.argv);
    console.log(calculateExercises(target, dailyExercises));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
        errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}