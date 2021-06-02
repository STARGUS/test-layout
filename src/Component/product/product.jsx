import React from "react"
// вывод элемента продукта в заказе
function Prod(props) {
        const { count, Pl = Function.prototype, MoDorate } = props;

        return (
                count.map((item, index) => (<>
                        <div className="item_prod">{item.product}</div>
                        <div>{item.size}</div>
                        <i className="plus_add" onClick={() => { Pl(item.id);}}>+</i>
                        <div className="rate-style-1">{item.price} &#8381;</div>
                        <div className={MoDorate}>x {item.count}</div>
                        <div>=</div>
                        <div className={MoDorate + " rate-style-1"}>{item.count * item.price} &#8381;</div>
                </>))
        );

}

export default Prod;