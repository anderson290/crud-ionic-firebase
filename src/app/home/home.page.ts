import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../services/todo.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  qrData = null;
  createdCode = null;
  scannedCode = null;

  todos: Todo[];
  constructor(private todoService:TodoService, private barcodeScanner: BarcodeScanner) {}

  ngOnInit(){
    this.todoService.getTodos().subscribe(res=>{
      this.todos = res;
    })
  }

  removeItem(item){
    this.todoService.removeTodo(item.id);
  }

  createCode(){
    this.createCode = this.qrData;
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData =>{
      this.scannedCode = barcodeData.text;
    })
  }

}
