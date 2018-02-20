import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fancy-directives",
  templateUrl: "./fancy-directives.component.html",
  styleUrls: ["./fancy-directives.component.css"],
})
export class FancyDirectivesComponent implements OnInit {
  private listOfStuff = ["one", "two", "three"];
  private show = true;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.show = !this.show;
  }
}
