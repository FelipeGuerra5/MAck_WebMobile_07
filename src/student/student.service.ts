import { Body, Injectable, Param } from '@nestjs/common';
import { Student } from './student.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class StudentService {

    constructor(  @InjectModel('Student') private readonly studentModel: Model<Student> ) {}

    // CRUD - CREATE, READ, UPDATE, DELETE
    
    // CREATE
    async createStudent(student: Student) {
        const studentModel = new this.studentModel(
            {
                name: student.name,
                tia: student.tia,
                course: student.course
            }
        );
        const result = await this.studentModel.save();
        return result.id as string;
    };

    // READ
    async readStudent() {
        const students = await this.studentModel.find().exec()
        return students;
    };

    // UPDATE
    
    // DELETE
 
    
    
    

}
