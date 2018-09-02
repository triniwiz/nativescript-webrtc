import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { SocketIOModule } from 'nativescript-socketio/angular';
import { server } from './environment';
import { CallComponent } from '~/call/call.component';
import { MainComponent } from '~/main/main.component';
import { LoginComponent } from '~/login/login.component';
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { CallService } from '~/call.service';
import { WebRTC } from 'nativescript-webrtc-plugin';
import { WebRTCModule } from 'nativescript-webrtc-plugin/angular';
WebRTC.init();

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        SocketIOModule.forRoot(server),
        NativeScriptFormsModule,
        WebRTCModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, CallComponent, MainComponent, LoginComponent],
    providers: [CallService],
    schemas: [NO_ERRORS_SCHEMA]
})

export class AppModule {
}
