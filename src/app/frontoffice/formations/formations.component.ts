import {Component, OnInit} from '@angular/core';
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit{

  coursArray: any;

  constructor(private coursService: CoursService) {
  }
  ngOnInit(): void {
    this.coursArray =  this.coursService.getAllCours();
  }

}
