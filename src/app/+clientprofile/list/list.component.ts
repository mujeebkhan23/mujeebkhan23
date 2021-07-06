import { Client } from './../../model/client.model';
import {
  Component,
  Inject,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { clientProfileService } from 'src/app/service/clientprofile';
@Component({
  selector: 'Client-List',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
 
   searchText:string="";
   
  @Input() listClient: Client[] = [];
 
  constructor(private cprofileService: clientProfileService) {}
  ngOnInit() {
    this.cprofileService.getAll().subscribe(
      (res) => {
        this.listClient = res;
        console.log(res);
      },
      (error) => console.log(error)
    );
  }

  @Output() newItemEvent = new EventEmitter<Client>();
  @Output() notifySelect: EventEmitter<Client> = new EventEmitter<Client>();
  onSelect(ownerpartner: Client): void {
    this.notifySelect.emit(ownerpartner);
  }
  @Output()
  notifyshowedit: EventEmitter<Client> = new EventEmitter<Client>();
  showedit() {
    this.notifyshowedit.emit();
  }
  @Output()
  notifyDelete: EventEmitter<Client> = new EventEmitter<Client>();
  onDelete(ownerpartner: Client): void {
    this.notifyDelete.emit(ownerpartner);
  }
}
