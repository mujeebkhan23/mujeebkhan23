import { Component, Input, OnInit } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { CaseHistory } from 'src/app/model/CaseHistory';
import { CaseService } from 'src/app/service/CaseService';

@Component({
  selector: 'app-viewhistory',
  templateUrl: './viewhistory.component.html',
  styleUrls: ['./viewhistory.component.css']
})
export class ViewhistoryComponent implements OnInit {
  @Input() casehistory: CaseHistory = new CaseHistory();
  @Input() public childlist: UserCase[] = [];
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
}

