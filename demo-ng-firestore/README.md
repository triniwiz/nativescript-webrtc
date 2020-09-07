# NativeScript WebRTC Demo (Angular/Firestore)

This `demo-ng-firestore` project uses Firebase and Firestore for signalling.

## Get Started
1. Create a Firebase project
2. Under `Authentication` enable `Anonymous` as a sign-in method
3. Under `Database` enable the `Firestore` database
4. Under `Project Settings` add an application for Android and/or iOS where the package name or bundle id matches the NativeScript id from this app's `package.json` (e.g. `org.nativescript.demongfirestore`)
5. Copy the file `google-services.json` obtained from Firebase to this project's `App_Resources/Android` directory
6. Copy the file `GoogleService-Info.plist` obtained from Firebase to this project's `App_Resources/iOS` directory
7. If you are running in your own NativeScript project on Android, ensure that you copied this demo project's `App_Resources/Android/app.gradle` & `App_Resources/Android/gradle.properties` files.
8. Run the app on two real devices and tap the "call" button.
