# Demo 
- [Release APK File](https://drive.google.com/file/d/1-NrZlacEE08ahfp44qcTKNRIiMCtPFU_/view?usp=sharing)
# Minimal Music Player

## Technologies used
 
- React (v17.0.2)
- React Native (v0.66.4)
- Redux / Redux Thunk
- Redux Persist
- React Navigation v6
- React-native Track player

## Installation

Use the Yarn package manager to install all dependencies\
```javascript
yarn install
```
To build iOS:
```bash
cd ios && pod install
```

## Usage

Run tests:
```bash
yarn jest -u
```

Run build locally:
```bash
yarn run android/ios
```

## Generating APK file

```bash
cd android && ./gradlew assembleRelease
```
Build will be generated in : 
/android/app/build/outputs/apk/release

