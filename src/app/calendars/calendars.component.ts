import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarModel } from '../model/calendar.model';
import { CalendarService } from '../service/calendar.service';

@Component({
  selector: 'app-calendars',
  templateUrl: './calendars.component.html',
  styleUrls: ['./calendars.component.css'],
})
export class CalendarsComponent implements OnInit {
  // Parent objects

  public listCalendar: CalendarModel[] = [];
  public objCalendar: any = CalendarModel;

  subscription: any = Subscription;
  public mode: string = 'List';

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.calendarService.getAll().subscribe(
      (res) => {
        this.listCalendar = res.data;
        console.log(res.data);
      },
      (error) => console.log(error)
    );

    // this.listchat=new  Chat();
  }

  onCreate(objCalendar: CalendarModel): void {
    if (this.objCalendar.id == 'undefined' || this.objCalendar.id == 0) {
      this.calendarService.create(objCalendar).subscribe(
        (res) => {
          this.getData();
          console.log('User Profile Data Saved');
        },
        (error) => {
          console.log('User Profile Data could not be saved');
          console.log(error);
        }
      );
    }
    this.mode = 'List';
  }

  onUpdate(objCalendar: CalendarModel): void {
    this.calendarService.Update(objCalendar.id, objCalendar).subscribe(
      (res) => {
        this.getData();
        console.log('User Profile Data Updated');
      },

      (error) => {
        console.log('User Profile Data could not be Updated');
        console.log(error);
      }
    );

    this.mode = 'List';
  }
  onSelect(objCalendar: CalendarModel): void {
    this.mode = 'Form';
    this.objCalendar = objCalendar;
  }

  showedit(): void {
    this.mode = 'Form';
    this.objCalendar = new CalendarModel();
    // this.objCalendar = new CalendarEventModel();
    // this.objUserProfile = objuserprofile;
  }

  onDelete(objCalendar: CalendarModel): void {
    this.calendarService.Delete(objCalendar.id).subscribe(
      (response) => {
        this.getData();

        //this.notificationservice.success("Suceess", "Record [ID:"+objownerpartner.id+"] deleted successfully", {id: objownerpartner.id});
        console.log('data delete success');
      },
      (error) => {
        this.getData();

        console.log('data delete error');
      }
    );
  }

  newData(): void {
    this.objCalendar = new CalendarModel();
  }
  onCancel(): void {
    this.newData();
    this.mode = 'List';
  }
}
