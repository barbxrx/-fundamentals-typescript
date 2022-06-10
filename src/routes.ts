import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';


export function createCourse(request: Request, response: Response){

    CreateCourseService.execute({
        educator: "Barbara",
        name: "Nodejs",
        duration: 50
    });

    CreateCourseService.execute({
        // educator: "",
        name: "mysql",
        duration: 5
    });

    return response.send();

}