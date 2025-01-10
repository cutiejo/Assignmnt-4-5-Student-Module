import { Controller, Post, Get, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}


  // DELETE
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
}
