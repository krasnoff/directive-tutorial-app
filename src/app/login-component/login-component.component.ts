import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  butSubmit(event)
  {
    console.log(event);
    document.getElementById("stage1").style.display = "none";
    document.getElementById("stage2").style.display = "block";
  }

}
