export class CalendarEventModel {
  id: number;
  EventName: string;
  StartTime: string;
  EndTime: string;
  Description: string;
  Reminder: string;
  Repeat: string;
  EventType: string;
  Priority: string;
  Data: string;

  constructor() {
    this.id = 0;
    this.EventName = '';
    this.StartTime = '';
    this.EndTime = '';
    this.Description = '';
    this.Reminder = '';
    this.Repeat = '';
    this.EventType = '';
    this.Priority = '';
    this.Data = '';
  }
}
