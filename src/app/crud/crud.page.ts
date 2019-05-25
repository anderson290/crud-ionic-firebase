import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  public todo: Todo = {
    task: 'Test 123',
    createAt: new Date().getTime(),
    priority: 2
  }
  public todoId = null;
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if(this.todoId){
      this.loadTodo();
    }
  }

  async loadTodo(){

    const loading = await this.loadingController.create({
      message: 'loading...'
    });

    await loading.present();
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    })
  }

  async saveTodo(){
    const loading = await this.loadingController.create({
      message: 'Saving...'
    });

    await loading.present();

    if(this.todoId){
      this.todoService.updateTodo(this.todo, this.todoId).then(()=>{
        loading.dismiss();
        this.nav.navigateBack('home');
          
      })
    }else{
      this.todoService.addTodo(this.todo).then(()=>{
        loading.dismiss();
        this.nav.navigateBack('home');
      })
    }
  }

}
