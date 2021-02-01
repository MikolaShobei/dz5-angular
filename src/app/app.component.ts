import {Component} from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {UserCreate} from './creators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = new FormControl('name');
  age = new FormControl(45);
  myForm1 = new FormGroup({
    name: this.name,
    age: this.age
  });
  usersList = [];
  user = {name: '', age: null};
  usersList2 =  [];

  myEvent(): void {
    const newUser = new UserCreate(this.myForm1.controls.name.value, this.myForm1.controls.age.value);
    this.usersList.push(newUser);
    console.log(this.usersList);
  }

  nyForm2Event(myForm2: NgForm): void {
    this.usersList2.push({name: myForm2.form.controls.name.value, age: myForm2.form.controls.age.value});
    console.log(this.usersList2);
  }
}






