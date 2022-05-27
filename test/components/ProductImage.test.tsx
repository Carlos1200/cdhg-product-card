import React from 'react';
import rendered from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe de mostrar el componente correctamente la url por defecto', () => {
    const wrapper = rendered.create(
      <ProductImage img="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con la url del producto', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
