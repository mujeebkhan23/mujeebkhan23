import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [FormsModule, CommonModule, CalendarRoutingModule],
  declarations: [CalendarComponent],
})
export class ApplyAgainstModule {}
