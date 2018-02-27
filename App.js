import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/Detail/PlaceDetail';

import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "react-native-starter.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "react-native-starter.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "react-native-starter.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "react-native-starter.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "react-native-starter.AuthScreen",
    title: "Login"
  }  
});
