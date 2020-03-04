import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}

    GetStudentData():Observable<any>
    {
      return this.http.get('https://www.jsonblob.com/api/jsonblob/8d32d8e1-5e22-11ea-a136-47e86d5c3d39');
    }
   GetWeather():Observable<any>
   {
     return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=3e920f32dae31659f0e1405859bda70f');
   }
}
