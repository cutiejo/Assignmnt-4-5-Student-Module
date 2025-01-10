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

  // UPDATE (PUT)
  async updateStudent(id: number, updatedData: Partial<Student>): Promise<Student> {
    const student = await this.getStudentById(id);
    Object.assign(student, updatedData);
    return this.studentRepository.save(student);
  }

  // PARTIAL UPDATE (PATCH)
  async partialUpdateStudent(id: number, partialData: Partial<Student>): Promise<Student> {
    const student = await this.getStudentById(id);
    Object.assign(student, partialData);
    return this.studentRepository.save(student);
  }
}