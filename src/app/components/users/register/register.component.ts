import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../../services/users.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: string = '';
  status: string = '';

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onRegister(fname: string, lname: string, email: string, password: string, confirm_password: string){
    this.userService.registerUser({fname: fname, lname: lname, email: email, password: password}).subscribe(
      response => {
        if(response.ok){
          this.router.navigate(['/login', {register_success: true}]);
        }
      },
      err => this.status = 'Unexpected error occurred from server'
    );
  }

  formSubmitStatus(status: string){
    console.log('ok');
  }

}
