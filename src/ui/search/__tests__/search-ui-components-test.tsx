import React from 'react';
import renderer from 'react-test-renderer';
import SearchLander from '../searchlander.component';
import SearchNoResults from '../searchnoresults.component';

test('SearchLander renders correctly', () => {
  const tree = renderer.create(<SearchLander />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Searchnoresults renders correctly', () => {
  const tree = renderer.create(<SearchNoResults />).toJSON();
  expect(tree).toMatchSnapshot();
});
