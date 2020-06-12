import { Component, AfterViewInit, OnInit, ViewContainerRef, ViewChild, ElementRef } from "@angular/core";
import { alert, AlertOptions, capitalizationType, inputType, prompt, PromptOptions, PromptResult } from "@nativescript/core/ui/dialogs";
import { ModalDialogOptions, ModalDialogService } from '@nativescript/angular/modal-dialog';
import { device, screen } from '@nativescript/core/platform';
import { Page } from "@nativescript/core/ui/page";

import { FirebaseProvider } from './firebase.provider';
import { PeerSelectModal } from './peer-select.modal';
import { WebRTCPeer } from './webrtc.model';
import { WebRTCProvider } from "./webrtc.provider";


@Component({
  templateUrl: './webrtc.component.html',
  styleUrls: ['./webrtc.component.css'],
})
export class WebRTCComponent implements AfterViewInit, OnInit {
  @ViewChild("remoteVideo", { static: true }) remoteVideo: ElementRef;
  private peers: Array<WebRTCPeer>;
  private clientId: string; // our clientId
  public localVideoHeight: number;
  public localVideoWidth: number;

  constructor(
    private firebase: FirebaseProvider,
    private modalService: ModalDialogService,
    private page:Page,
    private vcr: ViewContainerRef,
    private webrtc:WebRTCProvider,

  ) {}

  public ngOnInit() {
    this.page.actionBarHidden=true;
    this.localVideoHeight = screen.mainScreen.heightDIPs/4;
    this.localVideoWidth = screen.mainScreen.widthDIPs/4;
  }

  public ngAfterViewInit() {
    /*
       Wait until we are signalled that we have Firebase auth
    */
    this.firebase.getFirebaseAuth()
    .subscribe((clientId) => {
      this.clientId = clientId;
      this.getName();
    });


    this.webrtc.getRemoteStreamUpdate()
    .subscribe((stream) => {
      this.remoteVideo.nativeElement.srcObject = stream;
    });
  }

  private getName() {
    const options: PromptOptions = {
      title: "Hey there!",
      message: "What's your name?",
      okButtonText: "OK",
      cancelable: false,
      inputType: inputType.text, // email, number, text, password, or email
      capitalizationType: capitalizationType.words, // all, none, sentences or words
    };

    setTimeout(() => {
      prompt(options)
      .then((input: PromptResult) => {
        let name:string = (input.result && input.text.length>0)
          ? input.text
          : `${device.manufacturer} ${device.model} (${device.deviceType})`

        this.firebase.registerAsPeer(name)
        .then(() => { console.log('Successfully registered as peer: '+name); })
        .catch((error) => { console.error(error); });
      });
    },0);
  }
  
  public videoLoaded(event) {
    try {
      const view = event.object;
      if (view && view.id === 'localVideo') {
        this.webrtc.localView = view;
        this.webrtc.localView.mirror = true;
        this.webrtc.init();
      }
      if (view && view.id === 'remoteVideo') {
        this.webrtc.remoteView = view;
      }
    } catch(error) {
      console.error(error);
    }
  }

  public makeCall(event) {
    this.firebase.getPeers()
    .then((peers:Array<WebRTCPeer>) => {
      // console.dir(peers);
      if (peers.length<2) {
        const options:AlertOptions = {
          title: "No peers!",
          message: "Looks like no one else registered to call...",
          okButtonText: "OK",
        }

        alert(options);

      } else {
        /*
           We should have at least one peer logged in
        */
        let options: ModalDialogOptions = {
          context: peers.filter((peer) => peer.clientId!==this.clientId),
          fullscreen: true,
          viewContainerRef: this.vcr,
        };

        this.modalService
        .showModal(PeerSelectModal, options)
        .then((result) => {
          console.log('peer selected: '+result)
          if (result) {
            this.webrtc.makeCall(result);
          }
        });
      }
    })
  }

  public endCall(event) {
    this.webrtc.endCall(event.object);
  }

  public switchCamera(event) {
    this.webrtc.switchCamera(event.object);
  }

  public shareScreen(event) {
    this.webrtc.shareScreen(event.object);
  }
}