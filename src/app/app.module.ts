import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudientManagerComponent } from './components/studient-manager/studient-manager.component';
import { ClassManagerComponent } from './components/class-manager/class-manager.component';
import { PointManagerComponent } from './components/point-manager/point-manager.component';
import { ModalAddStudientComponent } from './components/studient-manager/modal-add-studient/modal-add-studient.component';
import { ModalEditStudientComponent } from './components/studient-manager/modal-edit-studient/modal-edit-studient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalEditPointComponent } from './components/point-manager/modal-edit-point/modal-edit-point.component';
import { ModalViewPointComponent } from './components/point-manager/modal-view-point/modal-view-point.component';
import { ModalAddClassComponent } from './components/class-manager/modal-add-class/modal-add-class.component';
import { ModalEditClassComponent } from './components/class-manager/modal-edit-class/modal-edit-class.component';


@NgModule({
  declarations: [
    AppComponent,
    StudientManagerComponent,
    ClassManagerComponent,
    PointManagerComponent,
    ModalAddStudientComponent,
    ModalEditStudientComponent,
    ModalEditPointComponent,
    ModalViewPointComponent,
    ModalAddClassComponent,
    ModalEditClassComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
