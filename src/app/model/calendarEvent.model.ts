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
  refrenceNumber: number;
  participant: string;
  name: string;
  contact: string;
  comment: string;
  address: string;
  data: string;
  calendarId: number = 0;

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
    this.refrenceNumber = 0;
    this.participant = '';
    this.name = '';
    this.contact = '';
    this.comment = '';
    this.address = '';
    this.data = '';
  }
}
