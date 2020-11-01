import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor(public service: UserService) {}

  @ViewChild("myForm") myForm: NgForm;
  userName = "";
  defaultCourse = "Angular";

  // onSubmit(form: NgForm) {
  //   console.log(this.myForm);
  // }

  defaultUser = "User";

  usertypes = [
    { id: "1", typeofuser: "User" },
    { id: "2", typeofuser: "Admin" }
  ];

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      FirstName: "",
      LastName: "",
      UserName: "",
      Password: "",
      Email: "",
      ContactNo: "",
      AreYouAdmin: null
    };
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.PostUser(form.value).subscribe(res => this.resetForm);
  }
}
