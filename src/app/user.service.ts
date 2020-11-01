import { Injectable } from "@angular/core";
import { User } from "./user";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserService {
  formData: User;
  readonly rootURL = "https://localhost:44331/api";
  constructor(private http: HttpClient) {}

  PostUser(formData: User) {
    return this.http.post(this.rootURL + "/Users", formData);
  }
}
