import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
	clickcounter: number = 0;
	food:Object;
	constructor(private _http: HttpService) {}
	ngOnInit(){

		this._http.getdata().subscribe(data =>
		{
		console.log(data['lists'])
		this.food = data['lists'];
		console.log(this.food);
		});

	}
	countClick()
	{
	this.clickcounter += 1;
	}
  title = 'my-app';
}
