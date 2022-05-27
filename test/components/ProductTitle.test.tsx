import React from 'react';
import rendered from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = rendered.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Debe de mostrar el componente con el nombre del producto', () => {
    const wrapper = rendered.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
