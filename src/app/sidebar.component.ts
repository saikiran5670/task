import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public spaceData;

  public years; 

  constructor(private http: HttpClient) {}
  apiUrl = "https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014";
  

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.years = data;
      console.log(this.years); 

    });
  }
}

// let filteredData = [];
// let arrayData = [{
//   "app": "database_1",
//   "host": "my_host1",
//   "ip": "00.000.00.000"
// },
// {
//   "app": "database_1",
//   "host": "my_host1",
//   "ip": "00.000.00.000"
// },
// {
//   "app": "database_2",
//   "host": "my_host2",
//   "ip": "00.000.00.000"
// },
// {
//   "app": "database_2",
//   "host": "my_host2",
//   "ip": "00.000.00.000"
// }];

// Observable.merge(arrayData)
//   .distinct((x) => x.app)
//   .subscribe(y => {
//     filteredData.push(y)
//     console.log(filteredData)
//   });



}