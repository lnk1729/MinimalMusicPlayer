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

const LandingStack = createBottomTabNavigator();

const LandingNavigator = () => {
  return (
    <LandingStack.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: COLORS.GREY2,
          paddingTop: 10,
        },
        tabBarAllowFontScaling: true,
        tabBarHideOnKeyboard: true,
      }}>
      <LandingStack.Screen
        name={NAVIGATION_ROUTES.HOME}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarActiveTintColor: COLORS.PRIMARY,
        }}
        component={HomeScreen}
      />
      <LandingStack.Screen
        name={NAVIGATION_ROUTES.COLLECTION}
        options={{
          headerShown: false,
          tabBarLabel: 'Collection',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarActiveTintColor: COLORS.PRIMARY,
        }}
        component={CollectionScreen}
      />
      <LandingStack.Screen
        name={NAVIGATION_ROUTES.SEARCH}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarActiveTintColor: COLORS.PRIMARY,
        }}
        component={SearchScreen}
      />
      <LandingStack.Screen
        name={NAVIGATION_ROUTES.ACCOUNT}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={24} />,
          tabBarActiveTintColor: COLORS.PRIMARY,
        }}
        component={AccountScreen}
      />
    </LandingStack.Navigator>
  );
};

export default LandingNavigator;
