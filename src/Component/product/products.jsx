import React, { useState, useEffect } from 'react';

function Products(props) {
    const { item, Pl = Function.prototype } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [show, setShow] = useState('show_rate');
    const Shows = () => {
        setIsVisible(true);
        setShow('show_rate ');
        setTimeout(() => {
            setShow('');
            setIsVisible(false);
        }, 500);
    };

    return (
        <>
            <div className='item_prod alert'>{item.product}</div>
            <div>{item.size}</div>
            <i
                className='plus_add'
                onClick={() => {
                    Pl(item.id);
                    Shows();
                }}
            >
                +
            </i>
            <div className={isVisible ? show + 'rate-style-1' : 'rate-style-1'}>
                {item.price} &#8381;
            </div>
            <div className={isVisible ? show + 'rate-style-1' : 'rate-style-1'}>
                x {item.count}
            </div>
            <div>=</div>
            <div className={isVisible ? show + 'rate-style-1' : 'rate-style-1'}>
                {item.count * item.price} &#8381;
            </div>
        </>
    );
}

export default Products;
