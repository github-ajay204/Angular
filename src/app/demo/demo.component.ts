import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NsService } from '../ns.service';
import { response } from 'express';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  EmployeeName = new FormControl('');
  updateEmploye() {
    this.EmployeeName.setValue('Ajay');
  }

  EmployeeForm = new FormGroup({
    Name: new FormControl(''),
    Designation: new FormControl(''),
    Address: new FormGroup({
      Country: new FormControl(''),
      city: new FormControl('')
    })
  });
  constructor(private nservice: NsService) {}
  OnSubmit() {
    debugger;
    if(this.EmployeeForm.valid){
      this.nservice.SubmitData(this.EmployeeForm.value).subscribe(
        response=>{
          console.log('Employee data submitted successfully', response);
        }
      )
    }
    alert(this.EmployeeForm.value);
   console.log( this.EmployeeForm.value);
  }
}
