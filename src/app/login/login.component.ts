import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @ViewChild("myForm") myForm: NgForm;
  userName = "";
  defaultCourse = "Angular";

  onSubmit(form: NgForm) {
    console.log(this.myForm);
  }

  defaultUser = "User";

  usertypes = [
    { id: "1", typeofuser: "Admin" },
    { id: "2", typeofuser: "User" }
  ];
}
