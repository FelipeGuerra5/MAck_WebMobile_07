import { Body, Injectable, NotFoundException } from '@nestjs/common';
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
        const result = await studentModel.save();
        return result.id as string;
    };

    // READ
    async readStudent() {
        const students = await this.studentModel.find().exec()
        return students;
    };

    // UPDATE
    async updateStudent(student:Student){
        const updatedStudent = await this.studentModel.findOne({tia: student.tia});
        if (!updatedStudent){
            throw new NotFoundException('Could not find the student.')
        }
        if (student.name){
            updatedStudent.name = student.name
        }
        if (student.course){
            updatedStudent.course = student.course
        }
        updatedStudent.save()
    }

    // DELETE
    async deleteStudent(tia: number){
        const result = await this.studentModel.deleteOne({tia: tia}).exec();
    }
    
    
    

}
