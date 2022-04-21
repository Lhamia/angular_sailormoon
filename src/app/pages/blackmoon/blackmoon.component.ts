import { Component, OnInit } from '@angular/core';
import { sistersList} from 'src/app/Shared/const/constblack'
@Component({
  selector: 'app-blackmoon',
  templateUrl: './blackmoon.component.html',
  styleUrls: ['./blackmoon.component.css']
})
export class BlackmoonComponent implements OnInit {
  public sisters = sistersList;

  constructor() { }

  ngOnInit(): void {
  }

}
