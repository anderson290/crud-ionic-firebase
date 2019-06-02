import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeitorComponent } from './leitor.component';

import{ NgxQRCodeModule } from 'ngx-qrcode2';

const routes: Routes = [
  {
    path: '',
    component: LeitorComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgxQRCodeModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[
  ],
  declarations: [LeitorComponent]
})
export class LeitorModule {}
