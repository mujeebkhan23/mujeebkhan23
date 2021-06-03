import { EventService } from './../../service/calendarEvent.service';
import { CalendarModel } from './../../model/calendar.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css'],
})
export class CalendarListComponent implements OnInit {
  public listCalendar: CalendarModel[] = [];

  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.getData();
  }

  @Output()
  notifyCalendar: EventEmitter<number> = new EventEmitter<any>();
  onCalendarSelection(calendarId: number): void {
    this.notifyCalendar.emit(calendarId);
  }
  //get all records
  getData(): void {
    this.eventService.getAll().subscribe(
      (res) => {
        this.listCalendar = res;
        console.log(res);
      },
      (error) => console.log(error)
    );
  }
}
