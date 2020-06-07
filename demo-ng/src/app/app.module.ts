import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular/nativescript.module";
import { SocketIOModule } from 'nativescript-socketio/angular';
import { WebRTCModule } from "nativescript-webrtc/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { server } from './webrtc/environment';
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
    SocketIOModule.forRoot(server),
    WebRTCModule,
  ],
  declarations: [
    AppComponent,
    WebRTCComponent,
  ],
  entryComponents: [
  ],
  providers: [
    WebRTCProvider,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
