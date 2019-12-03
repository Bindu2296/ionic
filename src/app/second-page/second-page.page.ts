import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {

  constructor(private router:Router) { }
arr = [
  {
  "iconName":"person",
  "desc":"Log a Customer",
},

{"iconName":"book","desc":"List of Customers"},
{"iconName":"chatboxes","desc":"Messaging"},
{"iconName":"settings","desc":"Settings"},
{"iconName":"list-box","desc":"To Do List"},
{"iconName":"calendar","desc":"Calendar"},
{"iconName":"trophy","desc":"Inventory"},
{"iconName":"help","desc":"Trivia"},

]


  ngOnInit() {
  }

handleClickFunc(){
  this.router.navigate(['third-page'])

}

handleClickReg(){
  console.log("reg click called")
  this.router.navigate(['reg-page'])
}

}
