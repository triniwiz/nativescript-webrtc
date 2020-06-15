import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular/nativescript.module";
import { WebRTCModule } from "nativescript-webrtc/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirebaseProvider } from './webrtc/firebase.provider';
import { PeerSelectModal } from './webrtc/peer-select.modal';
import { WebRTCProvider } from "./webrtc/webrtc.provider";
import { WebRTCComponent } from "./webrtc/webrtc.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    WebRTCModule,
  ],
  declarations: [
    AppComponent,
    PeerSelectModal,
    WebRTCComponent,
  ],
  entryComponents: [
    PeerSelectModal,
  ],
  providers: [
    FirebaseProvider,
    WebRTCProvider,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
