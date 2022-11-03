import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { MoongooseModule } from '@nestjs/mongoose';
import { studentSchema } from './student.model';

@Module({
  imports: [MongooseModule.forFeatures([{ name: 'Student', schema: studentSchema }])]
  controllers: [StudentController],
  providers: [StudentService]
})
export class StudentModule {}
