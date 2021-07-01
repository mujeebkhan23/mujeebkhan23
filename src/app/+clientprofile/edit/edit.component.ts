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
  Provider,
} from '@angular/core';
import { clientProfileService } from 'src/app/service/clientprofile';


@Component({
  selector: 'Client-Form',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditFormComponent implements OnInit {

  @Input() objClient: Client = new Client();

  @Output() notifyCreate: EventEmitter<Client> = new EventEmitter<Client>();
  @Output() notifyUpdate: EventEmitter<Client> = new EventEmitter<Client>();
  @Output() notifyCancel: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cprofileService: clientProfileService) {}

  ngOnInit(): void {
    console.log(this.objClient);
  }
  onSave() {
    if (this.objClient.id == 0) {
      this.notifyCreate.emit(this.objClient);
    } else {
      this.notifyUpdate.emit(this.objClient);
    }
    this.objClient = new Client();
  }
  onCancel() {
    this.objClient = new Client();
    this.notifyCancel.emit();
  }
}
