import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SailorsList } from 'src/app/Shared/const/const';

@Component({
  selector: 'app-sailors-detail',
  templateUrl: './sailors-detail.component.html',
  styleUrls: ['./sailors-detail.component.css']
})
export class SailorsDetailComponent implements OnInit {
  public sailor : any;
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const sailorID  = Number(params.get
        ("sailorID"))
      this.sailor = SailorsList.find(
        (singleSailor: any) => sailorID === singleSailor.id)
    })
    console.log(this.sailor)
  }

}
