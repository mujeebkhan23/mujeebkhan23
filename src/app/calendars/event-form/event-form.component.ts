import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarModel } from 'src/app/model/calendar.model';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() objeditcalendar: CalendarModel = new CalendarModel();
  @Output() notifyCancel: EventEmitter<any> = new EventEmitter();
  @Output()
  notifyCreate: EventEmitter<CalendarModel> = new EventEmitter<CalendarModel>();
  @Output()
  notifyUpdate: EventEmitter<CalendarModel> = new EventEmitter<CalendarModel>();
  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {}

  onSave() {
    if (this.objeditcalendar.id == 0) {
      this.notifyCreate.emit(this.objeditcalendar);
    } else {
      this.notifyUpdate.emit(this.objeditcalendar);
    }
  }
  onCancel() {
    this.objeditcalendar = new CalendarModel();
    this.notifyCancel.emit();
  }
}
