import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
studentData:any=[];
weatherData:any=[];
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.GetStudentData().subscribe(
    (data)=>{
      this.studentData = data.students;
      console.log(this.studentData);
    }
    );

    this.service.GetWeather().subscribe(
      (dataw)=>{
        this.weatherData = dataw.weather;
        console.log(this.weatherData);
      }

    );
  }

}
