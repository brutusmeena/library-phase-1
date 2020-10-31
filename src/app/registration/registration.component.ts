import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor() {}

  @ViewChild("myForm") myForm: NgForm;
  userName = "";
  defaultCourse = "Angular";

  onSubmit(form: NgForm) {
    console.log(this.myForm);
  }

  defaultUser = "User";

  usertypes = [
    { id: "1", typeofuser: "User" },
    { id: "2", typeofuser: "Admin" }
  ];

  ngOnInit() {}
}
