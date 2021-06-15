import { Component, Input, OnInit } from '@angular/core';
import { UserCase } from 'src/app/model/Case.model';
import { CaseClause } from 'src/app/model/CaseClause';
import { CaseService } from 'src/app/service/CaseService';

@Component({
  selector: 'app-viewclause',
  templateUrl: './viewclause.component.html',
  styleUrls: ['./viewclause.component.css']
})
export class ViewclauseComponent implements OnInit {
  @Input() caseclause: CaseClause = new CaseClause();
  @Input() public childlist: UserCase[] = [];
  constructor(private caseservice: CaseService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.caseservice.getAll().subscribe(
      (res) => {

        this.childlist = res;
        console.log(res);
      },
      (error) => console.log(error)
    )
  }
}
