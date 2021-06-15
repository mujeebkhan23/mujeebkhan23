import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { CaseNature } from 'src/app/model/CaseNature';
import { CaseService } from 'src/app/service/CaseService';

@Component({
  selector: 'app-viewnature',
  templateUrl: './viewnature.component.html',
  styleUrls: ['./viewnature.component.css']
})
export class ViewnatureComponent implements OnInit {
  @Input() casenature: CaseNature = new CaseNature();
  @Input()
  public childlist: UserCase[] = [];

  constructor(private caseservice: CaseService) { }

  ngOnInit(): void {
    this.getData();

  }
  getData(): void {

    this.caseservice.getAll().subscribe(
      (res) => {

        this.childlist = res;
        console.log(res);
      },
      (error) => console.log(error)
    )
  }
  // @Output()
  // notifySelect: EventEmitter<CaseNature> = new EventEmitter<CaseNature>();
  // onSelect(casenature: CaseNature): void {
  //   this.notifySelect.emit(casenature);
  // }

  @Output()
  notifyCaseNatureDelete: EventEmitter<CaseNature> = new EventEmitter<CaseNature>();
  onDelete(casenature: CaseNature): void {
    this.notifyCaseNatureDelete.emit(casenature);
  }

  @Output()
  notifyCaseNatureshowedit: EventEmitter<CaseNature> = new EventEmitter<CaseNature>();
  showedit() {
    this.notifyCaseNatureshowedit.emit();
  }
  @Output()
  notifyCaseNatureSelect: EventEmitter<CaseNature> = new EventEmitter<CaseNature>();
  OnSelect(casenature: CaseNature) {
    this.notifyCaseNatureSelect.emit(casenature);
  }
}
