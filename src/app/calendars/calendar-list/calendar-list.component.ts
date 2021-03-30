import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CalendarModel } from 'src/app/model/calendar.model';
import { CalendarService } from 'src/app/service/calendar.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css'],
})
export class CalendarListComponent implements OnInit {
  @Input()
  public calendarList: CalendarModel[] = [];
  public show: boolean = false;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.calendarService.getAll().subscribe(
      (res) => {
        this.calendarList = res.data;
        console.log(res.data);
      },
      (error) => console.log(error)
    );
  }

  @Output()
  notifySelect: EventEmitter<CalendarModel> = new EventEmitter<CalendarModel>();
  onSelect(listchildchat: CalendarModel): void {
    this.notifySelect.emit(listchildchat);
  }

  @Output()
  notifyDelete: EventEmitter<CalendarModel> = new EventEmitter<CalendarModel>();
  onDelete(listchildchat: CalendarModel): void {
    this.notifyDelete.emit(listchildchat);
  }

  @Output()
  notifyshowedit: EventEmitter<CalendarModel> = new EventEmitter<CalendarModel>();
  showedit() {
    this.notifyshowedit.emit();
  }
}
