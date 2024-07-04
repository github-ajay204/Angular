import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NsService } from '../ns.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-empployee',
  templateUrl: './empployee.component.html',
  styleUrls: ['./empployee.component.css']
})
export class EmpployeeComponent implements OnInit {
  employeeForm: FormGroup;
  skills: string[] = ['Angular', 'React', 'Node'];
  displayedColumns: string[] = ['id', 'name', 'designation', 'skills', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(private fb: FormBuilder, private nservice: NsService) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      skills: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.GetAllData();
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.nservice.SubmitData(this.employeeForm.value).subscribe(
        response => {
          console.log('Employee data submitted successfully', response);
          this.GetAllData(); // Refresh the data after submission
        },
        error => {
          console.error('Error submitting employee data', error);
        }
      );
    } else {
      console.error('Form is invalid');
      this.showValidation(this.employeeForm);
    }
  }

  showValidation(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field)!;
      if (control instanceof FormGroup) {
        this.showValidation(control);
      } else {
        control.markAsTouched({ onlySelf: true });
      }
    });
  }

  isFieldValid(field: string) {
    const control = this.employeeForm.get(field)!;
    return control.invalid && control.touched;
  }

  getErrorMessage(field: string) {
    const control = this.employeeForm.get(field)!;
    if (control.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }

  GetAllData() {
    this.nservice.getAllEmployee().subscribe(
      response => {
        console.log(response);
        this.dataSource.data = response.Table; // Set the dataSource's data
        //this.employeeForm=response;
      },
      error => {
        console.error('Error fetching employee data', error);
      }
    );
  }

  editEmployee(id:any){

  }
  deleteEmployee(id:any){

  }
}
