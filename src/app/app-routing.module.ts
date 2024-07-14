import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudientManagerComponent } from './components/studient-manager/studient-manager.component';
import { ClassManagerComponent } from './components/class-manager/class-manager.component';
import { PointManagerComponent } from './components/point-manager/point-manager.component';

const routes: Routes = [
  {
    path: '',
    component: StudientManagerComponent,
  },
  {
    path: 'class-manager',
    component: ClassManagerComponent,
  },
  {
    path: 'point-manager',
    component: PointManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
