import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursService} from "../services/cours.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent //implements OnInit
{
  /*constructor(private activatedRoute: ActivatedRoute, private coursService: CoursService) {
  }

  id: any;
cours: any;
  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
this.cours=this.coursService.rechercherCoursParId(this.id);
console.log(this.cours);
  }
*/



}
