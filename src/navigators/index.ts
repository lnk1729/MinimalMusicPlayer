import {NavigationContainerRef} from '@react-navigation/native';
import React from 'react';

export enum NAVIGATION_ROUTES {
  LANDING = 'Landing',
  HOME = 'Home',
  COLLECTION = 'Collection',
  SEARCH = 'Search',
  ACCOUNT = 'Account',
  PLAYER = 'Player',
}

export const navigationRef: React.RefObject<NavigationContainerRef<any>> =
  React.createRef();
export const navigateTo = (name, params) => {
  navigationRef.current?.navigate(name, params);
};
export const goBack = () => {
  navigationRef.current?.goBack();
};

export {default as LandingNavigator} from './landing.navigator';
export {default as RootNavigator} from './root.navigator';
