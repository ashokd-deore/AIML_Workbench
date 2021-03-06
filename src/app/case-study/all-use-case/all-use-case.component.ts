import { Component, OnInit } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { ToastrService } from '@core/services';
import { CaseStudyService } from '../services/case-study.service';


@Component({
  selector: 'app-all-use-case',
  templateUrl: './all-use-case.component.html',
  styleUrls: ['./all-use-case.component.css']
})
export class AllUseCaseComponent implements OnInit {

  usecaseList:any;
  usecaseID:any;
  
  constructor(private _caseStudyService: CaseStudyService, private router: Router,private toastService: ToastrService) { 
  }

  ngOnInit(): void {
    this._caseStudyService.getAllUseCases().subscribe(resp => {
      this.usecaseList = resp.records;
    });
  }

  editUsecase(id:number): void {
    this.usecaseID = id;
    window.localStorage.removeItem("usecaseID");
    window.localStorage.setItem("usecaseID", this.usecaseID);
    this.router.navigate(['create-usecase']);
  };

  ngOnDestroy() { 
  }

}
