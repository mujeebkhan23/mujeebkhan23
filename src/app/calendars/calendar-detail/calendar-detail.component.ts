import { CalendarService } from './../../service/calendar.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarModel } from 'src/app/model/calendar.model';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.component.html',
  styleUrls: ['./calendar-detail.component.css'],
})
export class CalendarDetailComponent implements OnInit {
  @Input() objEventForm: CalendarModel = new CalendarModel();
  @Output() notifyCancel: EventEmitter<any> = new EventEmitter();
  @Output()
  notifyCreate: EventEmitter<CalendarModel> = new EventEmitter<CalendarModel>();
  @Output()
  notifyUpdate: EventEmitter<CalendarModel> = new EventEmitter<CalendarModel>();

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {}
  onSave() {
    if (this.objEventForm.id == 0) {
      this.notifyCreate.emit(this.objEventForm);
    } else {
      this.notifyUpdate.emit(this.objEventForm);
    }
  }
  onCancel() {
    this.objEventForm = new CalendarModel();
    this.notifyCancel.emit();
  }
}
