import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {LandingNavigator, navigationRef, NAVIGATION_ROUTES} from '.';
import {PlayerScreen} from '../screens';
import {Platform} from 'react-native';
import TrackPlayer, {Capability} from 'react-native-track-player';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  React.useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        capabilities: [Capability.Play, Capability.Pause],
        compactCapabilities: [],
      });
    })();
    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
        initialRouteName={NAVIGATION_ROUTES.LANDING}>
        <RootStack.Screen
          options={{
            headerShown: false,
            cardStyleInterpolator:
              Platform.OS === 'android'
                ? CardStyleInterpolators.forScaleFromCenterAndroid
                : CardStyleInterpolators.forHorizontalIOS,
          }}
          name={NAVIGATION_ROUTES.LANDING}
          component={LandingNavigator}
        />
        <RootStack.Screen
          options={{
            headerShown: false,
            cardStyleInterpolator:
              Platform.OS === 'android'
                ? CardStyleInterpolators.forScaleFromCenterAndroid
                : CardStyleInterpolators.forHorizontalIOS,
          }}
          name={NAVIGATION_ROUTES.PLAYER}
          component={PlayerScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
