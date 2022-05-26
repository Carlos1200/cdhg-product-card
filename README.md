# cdhg-Product-Card

Este es un paquete de pruebas de despliegue de NPM


## Carlos David Herrera Guardado

## Ejemplo
```
import {
    ProductCard,
    ProductImage,
    ProductTitle,
    ProductButtons,
    } from 'cdhg-Product-Card'
```


```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
    >
    {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
        <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
        </>
    )}
</ProductCard>
```