import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent {
  title = 'my-app33';
  newval:string;
  sub;
  id:string;

  constructor(private _Activatedroute:ActivatedRoute){
  	
  }

  ngOnInit()
  {
   this.sub=this._Activatedroute.paramMap.subscribe(params => { 
         console.log(params);
          this.id = params.get('id'); 
          console.log(this.id);  
      });
  }
}
