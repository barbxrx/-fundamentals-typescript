
/**
 * name - string 
 * duration - number
 * educator - string
 */

interface Course {
    name: string;
    duration?: number; //definifindo um tributo opcional
    educator?: string;
}

class CreateCourseService {

    execute({duration, educator = "babi", name}: Course ){
        console.log(name, duration, educator);
    }
}

export default new CreateCourseService();