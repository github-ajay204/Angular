import { Component } from '@angular/core';
import { Emp } from '../Emp';
 import { NsService } from '../ns.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TdfComponent {

  constructor(private nservice: NsService){}
  data: any;

  skills = ['Java', 'Python', 'Sql', 'C++']
  model = new Emp();//1, "Ajay", "Developer", this.skills[0])
  IsSubmitted=false;
  Onsubmit(){
    this.IsSubmitted=true;
    console.log(this.model);
  }
  get diagnostic(){
    return JSON.stringify(this.model);
  }

  ngOnInit(): void {
    // debugger;
    // this.nservice.getData().subscribe(
    //   (response) => {
    //     this.data = response;
    //   },
    //   (error) => {
    //     console.error('Error fetching data:', error);
    //   }
    // );
  }
}
