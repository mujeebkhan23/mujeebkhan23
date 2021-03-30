import { CalendarEventModel } from './calendarEvent.model';

export class CalendarModel {
  id: number;
  calendarName: string;
  listEventCalendar: CalendarEventModel[];
  constructor() {
    this.id = 0;
    this.calendarName = '';
    this.listEventCalendar = [];
  }
}
