import { EventService } from './../service/calendarEvent.service';
import { CalendarModel } from './../model/calendar.model';
import { CalendarEventModel } from './../model/calendarEvent.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css'],
})
export class EventCalendarComponent implements OnInit {
  public activeCalendarId: number = 1;
  //object of class
  public listEvent: CalendarEventModel[] = [];

  public objEvent: any = CalendarEventModel;

  public listCalendar: CalendarModel[] = [];

  subscription: any = Subscription;
  //for hiding controll

  //public mode:string="Group";//List//Form

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {}
  onSelectCalendar(evn: any) {
    this.activeCalendarId = evn;
    this.getEventData();
  }
  //get event by calendar id
  getEventData(): void {
    this.eventService.getAllEventsById(this.activeCalendarId).subscribe(
      (res) => {
        this.listEvent = res;
        console.log(res);
      },
      (error) => console.log(error)
    );
    this.objEvent = new CalendarEventModel();
  }

  ngOnInit() {
    this.getEventData();
  }

  onCreate(objevent: CalendarEventModel): void {
    if (this.objEvent.id == 'undefined' || this.objEvent.id == 0) {
      objevent.calendarId = this.activeCalendarId;
      this.eventService.create(objevent).subscribe(
        (res) => {
          // this.getData();
          this.getEventData();
          // this.toastr.success('Message Sent successfully', 'Message');
          console.log('User Profile Data Saved');
        },
        (error) => {
          console.log('User Profile Data could not be saved');
          // this.toastr.error('Error', "User Profile Data Couldn't Save");
          console.log(error);
        }
      );
    }
  }

  // Update(objevent: CalendarEventModel): void {
  //   this.eventService.Update(objevent.id, objevent).subscribe(
  //     (res) => {
  //       this.getEventData();
  //       console.log('User Profil Data Updated');
  //     },
  //     (error) => {
  //       console.log('User Profil Data could not be Updated');
  //       console.log(error);
  //     }
  //   );

  //   this.mode="List";
  // }

  // onUpdate(objchat: CalendarEventModel): void {
  //   this.objchat = objchat;
  // }

  onSelect(objEvent: CalendarEventModel): void {
    this.objEvent = objEvent;
  }

  onDelete(objEvent: CalendarEventModel): void {
    this.eventService.EventDelete(objEvent.id).subscribe(
      (response) => {
        this.getEventData();

        //this.notificationservice.success("Suceess", "Record [ID:"+objownerpartner.id+"] deleted successfully", {id: objownerpartner.id});
        console.log('Event delete success');
      },
      (error) => {
        this.getEventData();
        console.log('Event delete error');
      }
    );
  }

  //get all records
  // getData(): void {
  //   this.eventService.getAllEvents().subscribe(
  //     (res) => {
  //       this.listEvent = res;
  //       console.log(res);
  //     },
  //     (error) => console.log(error)
  //   );

  //   this.objEvent = new CalendarEventModel();
  // }

  onCancel(): void {
    this.newData();
    // this.mode="List";
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newData(): void {
    this.objEvent = new CalendarEventModel();
  }
}
