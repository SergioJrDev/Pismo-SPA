import React from 'react';
import renderer from 'react-test-renderer';

import CardFavorito from './../src/shared/favoriteCard'

it('renders correctly', () => {
  const component = renderer.create(
    <CardFavorito data={{poster: 'img.jpg', show_title: 'Título do filme'}} />
  ).toJSON();
  expect(component).toMatchSnapshot();
});
