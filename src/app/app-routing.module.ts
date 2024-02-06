import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './Component/calendar/calendar.component';
import { BookCalendarComponent } from './Component/book-calendar/book-calendar.component';

const routes: Routes = [
  {path:"calendar",component:CalenderComponent},
  {path:"book-event",component:BookCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
