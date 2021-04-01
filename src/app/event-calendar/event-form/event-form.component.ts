import { EventService } from './../../service/calendarEvent.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarEventModel } from 'src/app/model/calendarEvent.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() objEvent: CalendarEventModel = new CalendarEventModel();
  @Output() notifyCancel: EventEmitter<any> = new EventEmitter();

  @Output()
  notifyCreate: EventEmitter<CalendarEventModel> = new EventEmitter<CalendarEventModel>();
  @Output()
  notifyUpdate: EventEmitter<CalendarEventModel> = new EventEmitter<CalendarEventModel>();
  constructor(private eventService: EventService) {}

  ngOnInit() {}
  onSave() {
    if (this.objEvent.id == 0) {
      this.notifyCreate.emit(this.objEvent);
    } else {
      this.notifyUpdate.emit(this.objEvent);
    }
    this.objEvent = new CalendarEventModel();
  }
  onCancel() {
    this.objEvent = new CalendarEventModel();
    this.notifyCancel.emit();
  }
}
