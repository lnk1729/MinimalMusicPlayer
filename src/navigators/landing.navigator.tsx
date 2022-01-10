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
import {COLORS} from '../theme';
import {TextStyle} from 'react-native';

const LandingStack = createBottomTabNavigator();

const LandingNavigator = () => {
  const commonScreenSettings = {
    headerShown: false,
    tabBarLabelStyle: {
      fontWeight: '700',
      letterSpacing: 1,
      fontSize: 12,
    } as TextStyle,
    tabBarActiveTintColor: COLORS.PRIMARY,
  };
  return (
    <LandingStack.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: COLORS.PRIMARY,
          paddingTop: 10,
          backgroundColor: COLORS.BACKGROUNDDARK,
        },
        tabBarAllowFontScaling: true,
        tabBarHideOnKeyboard: true,
      }}>
      <LandingStack.Screen
        name={NAVIGATION_ROUTES.HOME}
        options={{
          headerShown: commonScreenSettings.headerShown,
          tabBarLabel: 'Home',
          tabBarLabelStyle: commonScreenSettings.tabBarLabelStyle,
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarActiveTintColor: commonScreenSettings.tabBarActiveTintColor,
        }}
        component={HomeScreen}
      />
      <LandingStack.Screen
        name={NAVIGATION_ROUTES.COLLECTION}
        options={{
          headerShown: commonScreenSettings.headerShown,
          tabBarLabel: 'Collection',
          tabBarLabelStyle: commonScreenSettings.tabBarLabelStyle,
          tabBarIcon: ({color}) => <Icon name="disc" color={color} size={24} />,
          tabBarActiveTintColor: commonScreenSettings.tabBarActiveTintColor,
        }}
        component={CollectionScreen}
      />
      <LandingStack.Screen
        name={NAVIGATION_ROUTES.SEARCH}
        options={{
          headerShown: commonScreenSettings.headerShown,
          tabBarLabel: 'Search',
          tabBarLabelStyle: commonScreenSettings.tabBarLabelStyle,
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarActiveTintColor: commonScreenSettings.tabBarActiveTintColor,
        }}
        component={SearchScreen}
      />
      <LandingStack.Screen
        name={NAVIGATION_ROUTES.ACCOUNT}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarLabelStyle: commonScreenSettings.tabBarLabelStyle,
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={24} />,
          tabBarActiveTintColor: commonScreenSettings.tabBarActiveTintColor,
        }}
        component={AccountScreen}
      />
    </LandingStack.Navigator>
  );
};

export default LandingNavigator;
