import { Body, Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService) {}

    @Get()
    readAllStudents():Promise<any>{
        return this.studentService.readStudents();
    }

    @Post()
    async createStudent(@Body() student: Student): Promisse<any>{
        var response = await this.studentService.createStudent(student);
        return {id: response}
    }
}
