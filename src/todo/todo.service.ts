import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

//Type ORM // Restful //roadmap.sh                                                                                                                                                             

@Injectable()
export class TodoService {
  constructor (
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>
  ){}
//Post
  create(createTodoDto: CreateTodoDto) {
    // insert into todo(title,username,status)
    return this.todoRepository.save(createTodoDto);
  }
//Get
  findAll() {
    return this.todoRepository.find();
  }

  //ค้นหา Get Ex.http://localhost:3000/todo/1
  findOne(id: number) {
    return this.todoRepository.findBy({
      id:id
    });
  }
//Patch Ex.http://localhost:3000/todo/1
  update(id: number, updateTodoDto: any ) {//อัปเดตค่า ถ้าไม่มีให้อัปเดตก็จะสร้างขึ้นมาใหม่
    return this.todoRepository.save({
      id:id,
      title:updateTodoDto.title,
      username:updateTodoDto.username,
      status:updateTodoDto.status,
    });
 
    
  }
//Delete Ex.http://localhost:3000/todo/1
  remove(id: number) {
    return this.todoRepository.delete(id);

  }
}
