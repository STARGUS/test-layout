import React from 'react';
import Products from './products.jsx';
// вывод элемента продукта в заказе
function Prod(props) {
    return props.count.map((item, index) => (
        <Products key={index + 'prod'} item={item} Pl={props.Pl} />
    ));
}

export default Prod;
