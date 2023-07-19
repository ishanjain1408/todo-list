import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AboutComponent } from './MyComponents/about/about.component';

const routes: Routes = [
  { path: '', component: TodoItemComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
