import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarModel } from 'src/app/model/calendar.model';
import { CalendarEventModel } from 'src/app/model/calendarEvent.model';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() objeventcalendar: CalendarEventModel = new CalendarEventModel();
  @Output() notifyCancel: EventEmitter<any> = new EventEmitter();
  @Output()
  notifyCreate: EventEmitter<CalendarEventModel> = new EventEmitter<CalendarEventModel>();
  @Output()
  notifyUpdate: EventEmitter<CalendarEventModel> = new EventEmitter<CalendarEventModel>();

  public show: boolean = false;
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
  toggle() {
    this.show = !this.show;
  }

  // @Output()
  // notifyshowedit: EventEmitter<CalendarModel> = new EventEmitter<CalendarModel>();
  // showedit() {
  //   this.notifyshowedit.emit();
  // }
}
