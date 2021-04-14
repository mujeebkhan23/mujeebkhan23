import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { MessageService } from './service/intermsgsrv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public customLayout!: boolean;

  constructor(private layoutService: LayoutService, private messageService: MessageService) {}
  PublishMsg():void{
    this.messageService.sendMessage('Hello I am Publisher');
   // this.messageService.clearMessage();
  }
  ClearMsg():void{
    this.messageService.clearMessage();
  }
  ngOnInit(): void {
    this.layoutService.isCustomLayout.subscribe((value) => {
      this.customLayout = value;
    });
  }
}
