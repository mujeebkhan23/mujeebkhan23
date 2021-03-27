import { CalendarsComponent } from './calendars.component';
import { CalendarsRoutingModule } from './calendars-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [FormsModule, CommonModule, CalendarsRoutingModule],
  declarations: [CalendarsComponent],
})
export class CalendarsModule {}
