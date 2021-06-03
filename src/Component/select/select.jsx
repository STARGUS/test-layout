import "./select.css"
import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"


function Selecting({ name_adr, onChange = Function.prototype }, props) {
    //создание состояний изменяемых элементов (для рендеринга значений)
    const [ul, setUl] = useState(false),
        [data, setData] = useState(props.data ? props.data : "Все адреса"),
        [time, setTime] = useState(props.data_time ? props.data_time : "за все время"),
        ul_list_on = () => {
            setUl(!ul) // при клике всплавыющий список
        },
        //присвоений значений констант (не обязательные поля)
        all_adr = "Все адреса",
        years = "за год",
        month = "за месяц",
        prochie = "Прочие адреса",
        all_time = "за все время",
    
        li_data = (e) => { // функция призвоения значения родителю дочерних элементов всплывающнго списка
            if (e.target.textContent != all_adr) { // если событе клика по указанному элементу
                if (name_adr) {
                    name_adr.map((item) => { // перебор массива имен записанных адресов в базу, для выплывающего спика
                        if (e.target.textContent == item.name) {
                            setData(item.name);
                            onChange();
                        }
                    });
                    if (e.target.textContent == prochie) {
                        setData(prochie);
                        onChange();
                    }
                }
                if (e.target.textContent == years) {
                    setTime(years);
                    onChange();
                    console.log(e.target.textContent);
                }
                if (e.target.textContent == month) {
                    setTime(month);
                    onChange();
                }
                if (e.target.textContent == all_time) {
                    setTime(all_time);
                    onChange();
                }
            } else if (e.target.textContent == all_adr) {
                setData(all_adr);
                onChange();
            }
            setUl(false); // функция скрытия всплывающей области
        };
        if(props.data_time){
            setTime(props.data_time)
        }
    return (// если в модуль приходят значения адресов из базы

        (name_adr ?

            <ul className="faux-select" >
                <li
                    onClick={() => { ul_list_on(); onChange() }} //событие клика с вызовом функций 
                    // изменение стилкй при нажатом элементе ->
                    className={ul ? "selected-option active" : "selected-option"}>
                    <div>
                        <span
                            style={{ paddingLeft: "0.3vw" }}
                            id="operation">{data}
                        </span>
                        <span className="openlist">&#9660;</span>
                    </div>
                </li>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppear={true}
                    transitionAppearTimeout={500}>
                    {
                        ul && (<div className=" dropdown ">
                            <li
                                onClick={li_data}
                                id="q8">
                                <span>{all_adr}</span>
                            </li>
                            {name_adr.map((item, index) => ( //перебор массива адресов для заполнения всплывающего окна
                                index < 4 && ( // вывод первых не более 4х значений массива
                                    <li
                                        key={index + "li"}
                                        onClick={li_data}
                                        id={index + 2 + "q"}>
                                        <span>{item.name}</span>
                                    </li>
                                )
                            ))}
                            <li
                                onClick={li_data}
                                id="q12">
                                <span>{prochie}</span>
                            </li>
                        </div>)
                    }
                </ReactCSSTransitionGroup>
            </ul>
            : // повторения операций только когда мы е получаем массив с адресами
            <ul className="faux-select" >
                <li
                    onClick={() => { ul_list_on() }}
                    className=" selected-option none ">
                    <div>
                        <span id="times">{time}</span>
                    </div>
                </li>
                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionAppear={true}
                    transitionAppearTimeout={500}>

                    {
                        ul && (<div className=" dropdown ">
                            <li
                                onClick={li_data}
                                id="qq8">
                                <span>{all_time}</span>
                            </li>
                            <li
                                onClick={li_data}
                                id="qq9">
                                <span>{years}</span>
                            </li>
                            <li
                                onClick={li_data}
                                id="qq10">
                                <span>{month}</span>
                            </li>
                        </div>)
                    }
                </ReactCSSTransitionGroup>
            </ul>
        )
    )
}


export default Selecting;
