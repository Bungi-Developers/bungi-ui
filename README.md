# Bungi
"Take the leap"

### About
This application is written using [React Native](https://facebook.github.io/react-native/docs/getting-started) + [Expo](https://docs.expo.io/versions/latest/).

### Getting Started
Make sure you have the latest version of node 
```
nvm install 12.13.0
```

Download the expo CLI tool
```
npm install expo-cli -g
```

Download and install [Android Studio](https://developer.android.com/studio) to simulate Android OS
* Go to `Preferences` -> `Appearance & Behavior` -> `System Settings` -> `Android SDK`. Click on the "SDK Tools" tab and make sure you have at least one version of the "Android SDK Build-Tools" installed.
* Copy or remember the path listed in the box that says "Android SDK Location."
* Add the following lines to your `~/.bash_profile`
    * `export ANDROID_SDK=/Users/myuser/Library/Android/sdk`
    * `export PATH=/Users/myuser/Library/Android/sdk/platform-tools:$PATH`
* Make sure that you can run `adb` from your terminal.
* Set up a new Virtual Device
    * From the Android Studio main screen, go to `Tools` -> `Android` -> `AVD Manager`.
    * Press the "+ Create Virtual Device" button.

Download and install [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) (if you don't already have it) to simulate iOS
* Open Xcode, then choose `Preferences` from the Xcode menu (or press `⌘+`,). Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

> NOTE: these instructions assume you are running on a Mac. If you are on a Windows machine, you cannot simulate iOS, as it doesn't support XCode.

Download the Expo client on your mobile device if you want to run the application from there.

### Running
1. Run `yarn` to install dependencies
1. Set your api url: `export BUNGI_API_URL="http://000.000.0.0:1337"`
  NOTE: this will need to be set to your internal IP address. Checkout [this article](https://lifehacker.com/how-to-find-your-local-and-external-ip-address-5833108) for instructions on how to find it.
1. Run `yarn start`

A new tab should open in your browser with the Expo client.

* To run the app on your mobile device
    * Select the `tunnel` option in the bottom, left-hand corner of the screen.
    * Scan the QR code with your Expo app.
    * Then the app will open up on your device.
* To run the app with the Android emulator
    * Launch Android Studio.
    * Go to `Tools` -> `AVD Manager` to open up your Virtual Devices, and click the green play button to launch the emulator (it will take a moment to boot up).
    * Click on `Run on Android device/emulator` in the Expo client and it will install the Expo client in your virtual Android device and launch the app.
    * _NOTE: You can also launch into Android by pressing `a` in the terminal where the expo client is running or use the start command `yarn start --android`._
* To run the app with the iPhone emulator
    * Launch XCode.
    * Go to `XCode` -> `Open Developer Tool` -> `Simulator` (it will take a moment to boot up).
    * Click on `Run on iOS simulator` in the Expo client and it will install the Expo app in your virtual iOS device and launch the app.
    * _NOTE: You can also launch into iOS by pressing `i` in the terminal where the expo client is running or use the start command `yarn start --ios`._

### Debugging
Installing the [react-native debugger](https://github.com/jhen0409/react-native-debugger) will help w/ debugging tremendously.
1. Follow the installation instructions on the [react-native debugger repo](https://github.com/jhen0409/react-native-debugger#react-native-debugger).
1. Open the debugger from your application menu
1. Set the port to `19001` by pressing Cmd+T in the debugger.
1. In the developer console within expo on your device, open the developer menu and select "Debug Remote JS".  Your app should now be running in the debugger.
1. Follow the react-native debugger repo's readme to setup extensions or if you run into issues.
