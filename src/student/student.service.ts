import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}


  // READ (GET ALL)
  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  // READ (GET single)
  async getStudentById(id: number): Promise<Student> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) {
      throw new NotFoundException('Student not found');
    }
    return student;
  }
}