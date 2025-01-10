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

  // CREATE
  async createStudent(student: Partial<Student>): Promise<Student> {
    const newStudent = this.studentRepository.create(student);
    return await this.studentRepository.save(newStudent);
  }
}