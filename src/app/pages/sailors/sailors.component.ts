import { Component, OnInit } from '@angular/core';
import { SailorsList } from 'src/app/Shared/const/const';

@Component({
  selector: 'app-sailors',
  templateUrl: './sailors.component.html',
  styleUrls: ['./sailors.component.css']
})
export class SailorsComponent implements OnInit {
  public sailors = SailorsList;
 

  constructor() { }

  ngOnInit(): void {
  }

}
