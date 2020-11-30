import { HttpClient } from "@angular/common/http";
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(http: HttpClient) {
    http
      .get("https://en.wikipedia.org/api/rest_v1/page/summary/Viljandi_County")
      .subscribe((data: any) => {
        console.log(data);
        this.pageSummary = data.extract;
      });
  }
  name = "Angular " + VERSION.major;

  pageSummary: string;
}
