import { CalendarEventModel } from './calendarEvent.model';

export class CalendarModel {
  id: number;
  calendarName: string;
  calendarId: number;

  constructor() {
    this.id = 0;
    this.calendarName = '';
    this.calendarId = 0;
  }
}
