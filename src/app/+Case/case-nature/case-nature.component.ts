import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { CaseNature } from 'src/app/model/CaseNature';
import { CaseService } from 'src/app/service/CaseService';

@Component({
  selector: 'app-case-nature',
  templateUrl: './case-nature.component.html',
  styleUrls: ['./case-nature.component.css']
})
export class CaseNatureComponent implements OnInit {
  @Input() casenature: CaseNature = new CaseNature();
  constructor() { }

  ngOnInit(): void {

  }

  }
