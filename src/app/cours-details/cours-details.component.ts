import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursService} from "../services/cours.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    // @ts-ignore
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
/*    this.activatedRoute.paramMap.subscribe((result => this.paramUrl = result.get('id') ));*/
    console.log("id: ", id)
  }

}
