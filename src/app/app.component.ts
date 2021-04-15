import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  locations: string[] = ['Downtown', 'S. County', 'Lakeside'];
  volunteerForm: FormGroup;

  constructor(private fb: FormBuilder){ }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.volunteerForm = this.fb.group({
      name: 'Name here',
      phoneNumber: '',
      preferredLocation: '',
      animals: this.fb.group({
        dogs: false,
        cats: false,
        reptiles: false
      }),
      references: this.fb.array([this.fb.control('')])
    });
  }
}
