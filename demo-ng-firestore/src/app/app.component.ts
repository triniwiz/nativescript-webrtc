import { Component, OnInit } from "@angular/core";
import { FirebaseProvider } from './webrtc/firebase.provider';


@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

  constructor(private firebase: FirebaseProvider) { }

  public ngOnInit() {
    this.firebase.initFirebase()
    .catch((error) => { console.error(error); });
  }
}
