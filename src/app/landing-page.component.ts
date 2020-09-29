import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"]
})
export class LandingPageComponent implements OnInit {
  constructor(private http: HttpClient) {}
  public spaceData;
  apiUrl = "https://api.spacexdata.com/v3/launches?limit=100";

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.spaceData = data;
    });
  }
}
