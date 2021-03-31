export class CalendarEventModel {
  id: number;
  eventName: string;
  description: string;
  startTime: string;
  endTime: string;
  reminder: string;
  repeat: string;
  eventType: string;
  priority: string;
  data: string;

  constructor() {
    this.id = 0;
    this.eventName = '';
    this.startTime = '';
    this.endTime = '';
    this.description = '';
    this.reminder = '';
    this.repeat = '';
    this.eventType = '';
    this.priority = '';
    this.data = '';
  }
}
