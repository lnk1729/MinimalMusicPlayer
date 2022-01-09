import React from 'react';
import {View} from 'react-native';
import renderer from 'react-test-renderer';
import Header from '../header.component';
import Screen from '../screen.component';

test('Header renders correctly', () => {
  const tree = renderer.create(<Header title="Mock title" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Screen renders correctly', () => {
  const tree = renderer
    .create(
      <Screen hasPadding={false}>
        <View />
      </Screen>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
