import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarEventModel } from 'src/app/model/calendarEvent.model';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css'],
})
export class EventCalendarComponent implements OnInit {
  //Calendar Event Object

  @Input() objeventcalendar: CalendarEventModel = new CalendarEventModel();
  @Output() notifyCancel: EventEmitter<any> = new EventEmitter();
  @Output()
  notifyCreate: EventEmitter<CalendarEventModel> = new EventEmitter<CalendarEventModel>();
  @Output()
  notifyUpdate: EventEmitter<CalendarEventModel> = new EventEmitter<CalendarEventModel>();

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {}
  onSave() {
    if (this.objeventcalendar.id == 0) {
      this.notifyCreate.emit(this.objeventcalendar);
    } else {
      this.notifyUpdate.emit(this.objeventcalendar);
    }
  }
  onCancel() {
    this.objeventcalendar = new CalendarEventModel();
    this.notifyCancel.emit();
  }
}
