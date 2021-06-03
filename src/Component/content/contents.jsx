import React, { useState } from 'react';
import Prod from "../product/product.jsx";
import ReactCSSTransitionGroup from "react-addons-css-transition-group" // Подключение состояния анимации Реакт

import "./RCSSRG.css"


function Contents(props) {
    const [isActive, setIsActive] = useState(props.detail);
    const [count, setCount] = useState(props.products_list);
    const [product_summ, setProduct_summ] = useState(props.products_list.map(i => i.price * i.count)); // запись суммы продуктов для каждого заказа
    const [summ_order, setSumm_order] = useState();
    const [productshow, setProductshow] = useState(false);
    const [MoDorate, setMoDorate] = useState("");


    const Ps = (ite) => { // расчет суммы продуктов по умолчанию или при изменении 
        let newItem = 0;
        if (ite) {
            ite.map(i =>
                newItem += i.price * i.count
            );
        } else {
            count.map(i =>
                newItem += i.price * i.count
            );
        }
        setProduct_summ(newItem);
        // Формула расчета общей суммы заказа 
        setSumm_order(
            (
                (newItem - ((rate_bonus) ? rate_bonus : 0)) - ((newItem - ((rate_bonus) ? rate_bonus : 0))
                    * (person_discount + discount_poll) / 100)
                + rate_delivery).toFixed()
        )
    }
    // стили
    let stile = "accordion-content",
        style_form = "form-content",
        block_content = "block-content",
        types = "text",
        wrapper = "head-wrapper-cont";
    if (isActive) {
        stile += " active";
        block_content += " actives"
        wrapper += " wrapper-content"
    }
    // состояния открытия или скрытия окна продуктов в заказе 
    const products = () => {
        if (!productshow) {
            setProductshow(true);
        } else {

            setProductshow(false);
        }
    }
    // анамация затухания и всплытия при изменении количества продуктов и их суммы
    // пересчет общей суммы от числа продуктов
    const Pl = (ItemId) => {
        const newOrder = count.map(el => {
            if (el.id === ItemId) {
                const newcount = el.count + 1;
                setMoDorate("show_rate ");
                setTimeout(() => setMoDorate(""), 500)
                return {
                    ...el,
                    count: newcount
                };
            } else return el;
        })
        setCount(newOrder);
        Ps(newOrder);
    }
    //состояние открытие окна заказов
    if (!isActive || !props.detail) {
        types = "buttom";
        style_form += " hover";
    }
    // назначение имен пропсов
    const { order,
        dates,
        coming_bonus,
        data_account,
        tel,
        dats,
        tims,
        person_discount,
        rate_bonus,
        name,
        addr,
        before,
        withs,
        discount_poll,
        rate_delivery,
        payment_methods,
        comment
    } = props;
    // повторный расчет суммы заказа для заголовка заказа
    let withing = withs.split(":");
    let befores = before.split(":");
    let product_summs = 0;
    props.products_list.map(i => product_summs += i.price * i.count);
    let summ_orders = ((product_summs - ((rate_bonus) ? rate_bonus : 0)) - ((product_summs - ((rate_bonus) ? rate_bonus : 0)) * (person_discount + discount_poll) / 100) + rate_delivery).toFixed();
    return (

        <div typeof={types} key={props.key} className={wrapper} >
            {/* создание тумблера для переключения содержимого контента заказов */}
            <span className={style_form} onClick={() => { setIsActive(!isActive); Ps(); }}>
                <div className="accordion-titel" >
                    <div className={stile}>
                        {!isActive && (<>&#9655;</>)}
                    </div>
                </div>

                <><span>{order}</span>
                    <span>{dates}</span>
                    <span className="rate-bonus-style">{coming_bonus && (<>{coming_bonus}&#x263B;</>)}</span>
                    <div>
                        <div className="rate-style">-{summ_order > 0 ? summ_order : summ_orders} &#8381;</div>
                        {rate_bonus && (<div className="rate-bonus-style rate-bonus-left">-{rate_bonus}&#x263B;</div>)}
                    </div>
                    <span>{name}:&nbsp;{addr}</span></>
            </span>
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionAppear={true}
                transitionAppearTimeout={500}>
                {(isActive) && (
                    <div className={block_content} style={{ marginLeft: "1vw" }}>

                        <div>Данные получателя</div>
                        <div>{data_account}</div>
                        <div>Телефон</div>
                        <div>{tel.map((item, index) => ((!tel.length == index) ? (<div className="tel">{item}</div>) : (<div>{item}</div>)))}</div>
                        <div>Дата доставка</div>
                        <div>{dats}&nbsp;{tims}</div>
                        <div>Интервал доставки</div>
                        <div>{withing[0]}<span className="up">{withing[1]}</span> &#8212;{befores[0]}<span className="up">{befores[1]}</span></div>
                        <div>Комментарий</div>
                        <div>{comment.map(item => (<div>{item}</div>))}</div>
                        <div>Способы оплаты</div>
                        <div>{payment_methods}</div>
                        <div className="item_prods" onClick={() => products()}>Список товаров</div>
                        <div></div>
                        <ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                            transitionAppear={true}
                            transitionAppearTimeout={500}>
                            {productshow && (
                                <>
                                    <div className="product-content">
                                        {
                                            <Prod key={count.id + "sd"} count={count} MoDorate={MoDorate} Pl={Pl} />
                                        }
                                    </div>

                                </>
                            )}
                        </ReactCSSTransitionGroup>
                        <div></div>
                        <div>Стоимость продуктов</div>
                        <div className={MoDorate + "size1_1"}>{product_summs} &#8381;</div>
                        <div>Оплачено балами</div>
                        <div className="rate-bonus size1_1">{rate_bonus ? (<>{rate_bonus}&#x263B;</>) : 0}</div>
                        <div>Персональная скидка</div>
                        <div className="size1_2">{person_discount} %</div>
                        <div>Скидка за опросник</div>
                        <div className="size1_2">{discount_poll} %</div>
                        <div>Стоимость доставки</div>
                        <div className="size1_2">{rate_delivery} &#8381;</div>
                        <div className="pluss2">Повторить весь заказ</div>
                        <div className="size1_4_bold"><div className={MoDorate + "pluss1"}>{summ_orders} &#8381;</div> <div className="plus_add plus_add_1">+</div> <div className="povtororder fontdecor">Повторить весь заказ</div></div>
                        <div>Бонус балов за заказ</div>
                        <div className="rate-bonus size1_1">{coming_bonus ? (<>{coming_bonus}&#x263B;</>) : 0}</div>
                    </div>

                )
                }
            </ReactCSSTransitionGroup>
        </div >
    );

}

export default Contents;