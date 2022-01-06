import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {NAVIGATION_ROUTES} from '.';
import {
  AccountScreen,
  CollectionScreen,
  HomeScreen,
  SearchScreen,
} from '../screens';

type BottomTabInitialScreenParams = {
  backgroundColor: string;
  nextScreen: NAVIGATION_ROUTES;
};

type RootStackParamList = {
  Home: BottomTabInitialScreenParams;
  Collection: BottomTabInitialScreenParams;
  Search: BottomTabInitialScreenParams;
  Account: BottomTabInitialScreenParams;
};

const RootStack = createBottomTabNavigator<RootStackParamList>();

const tabs = {
  Home: {
    labelStyle: {
      color: '#0034B9',
    },
    icon: {
      component: props => <Icon name="home" {...props} />,
      activeColor: '#0034B9',
      inactiveColor: '#919191',
    },
    background: {
      activeColor: '#ECF1FF',
      inactiveColor: 'rgba(223,215,243,0)',
    },
  },
  Collection: {
    labelStyle: {
      color: '#0034B9',
    },
    icon: {
      component: props => <Icon name="clipboard" {...props} />,
      activeColor: '#0034B9',
      inactiveColor: '#919191',
    },
    background: {
      activeColor: '#ECF1FF',
      inactiveColor: 'rgba(247,215,243,0)',
    },
  },
  Search: {
    labelStyle: {
      color: '#0034B9',
    },
    icon: {
      component: props => <Icon name="bell" {...props} />,
      activeColor: '#0034B9',
      inactiveColor: '#919191',
    },
    background: {
      activeColor: '#ECF1FF',
      inactiveColor: 'rgba(251,239,211,0)',
    },
  },
  Account: {
    labelStyle: {
      color: '#0034B9',
    },
    icon: {
      component: props => <Icon name="user" {...props} />,
      activeColor: '#0034B9',
      inactiveColor: '#919191',
    },
    background: {
      activeColor: '#ECF1FF',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: 'white',
          elevation: 5,
        },
      }}>
      <RootStack.Screen
        name={NAVIGATION_ROUTES.HOME}
        initialParams={{
          backgroundColor: tabs.Home.labelStyle.color,
          nextScreen: NAVIGATION_ROUTES.COLLECTION,
        }}
        component={HomeScreen}
      />
      <RootStack.Screen
        name={NAVIGATION_ROUTES.COLLECTION}
        initialParams={{
          backgroundColor: tabs.Collection.labelStyle.color,
          nextScreen: NAVIGATION_ROUTES.SEARCH,
        }}
        component={CollectionScreen}
      />
      <RootStack.Screen
        name={NAVIGATION_ROUTES.SEARCH}
        initialParams={{
          backgroundColor: tabs.Search.labelStyle.color,
          nextScreen: NAVIGATION_ROUTES.ACCOUNT,
        }}
        component={SearchScreen}
      />
      <RootStack.Screen
        name={NAVIGATION_ROUTES.ACCOUNT}
        initialParams={{
          backgroundColor: tabs.Account.labelStyle.color,
          nextScreen: NAVIGATION_ROUTES.HOME,
        }}
        component={AccountScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
