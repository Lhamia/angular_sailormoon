import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { sistersList } from 'src/app/Shared/const/constblack';
@Component({
  selector: 'app-blackmoon-details',
  templateUrl: './blackmoon-details.component.html',
  styleUrls: ['./blackmoon-details.component.css']
})
export class BlackmoonDetailsComponent implements OnInit {
public sister : any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const sisterID  = Number(params.get
        ("sisterID"))
      this.sister = sistersList.find(
        (singleSister: any) => sisterID === singleSister.id)
    })
    console.log(this.sister)
  }

  }


