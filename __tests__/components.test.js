import React from 'react';
import renderer from 'react-test-renderer';

import CardFavorito from './../src/shared/favoriteCard'
import Card from './../src/shared/Card'

it('Renderizar componentes compartilhados', () => {
  const componentCardFav = renderer.create(
    <CardFavorito data={{poster: 'img.jpg', show_title: 'Título do filme'}} />
  ).toJSON();
  expect(componentCardFav).toMatchSnapshot();

  const componentCard = renderer.create(
    <Card data={{poster: 'img.jpg', show_title: 'Título do filme'}} />
  ).toJSON();
  expect(componentCard).toMatchSnapshot();
});
