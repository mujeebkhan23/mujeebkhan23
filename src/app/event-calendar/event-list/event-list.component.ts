import { EventService } from './../../service/calendarEvent.service';
import { CalendarEventModel } from './../../model/calendarEvent.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {
  @Input()
  public listchildevent: CalendarEventModel[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAllEvents().subscribe(
      (res) => {
        this.listchildevent = res;
        console.log(res);
      },
      (error) => console.log(error)
    );
  }

  @Output()
  notifySelect: EventEmitter<CalendarEventModel> = new EventEmitter<CalendarEventModel>();
  onSelect(listchildevent: CalendarEventModel): void {
    this.notifySelect.emit(listchildevent);
  }

  @Output()
  notifyDelete: EventEmitter<CalendarEventModel> = new EventEmitter<CalendarEventModel>();
  onDelete(listchildevent: CalendarEventModel): void {
    this.notifyDelete.emit(listchildevent);
  }

  @Output()
  notifyshowedit: EventEmitter<CalendarEventModel> = new EventEmitter<CalendarEventModel>();
  showedit() {
    this.notifyshowedit.emit();
  }
}
