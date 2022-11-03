import { Module } from '@nestjs/common';
import { Mongoose } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    StudentModule, 
    MoongooseModule.forRoot(
      'mongodb+srv://Querosene:Qu3rozene@webmobile.uf2w4wl.mongodb.net/webmobile?retryWrites=true&w=majority'
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
