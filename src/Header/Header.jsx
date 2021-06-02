import "./Header.css";
import "../App";
import Boximg from "../Component/boximg/boximg.jsx";
import React from "react"


function Header(props) {
// присваивание значений переданных от родительского элемента
    const { moneybalans, bonusbalans, moneybonus, sale, collection_to, collection_max, tasks_to, tasks_max } = props.money;
    const { awards_all } = props;
    return (
        <div className="head">
            <span className="item-head-01">Личный кабинет</span>
            <div className="wrapper-head">
                <div className="item-head-02">
                    <div>
                        <div>На&nbsp;вышем&nbsp;счёте</div>
                        <div><span className="fontsize">{moneybalans}&#8381;</span>&nbsp;и&nbsp;<span className="colorbonus"><span className="fontsize">{bonusbalans}Б</span>&nbsp;баллов</span></div>
                    </div>
                    <div>
                        <div>скидка</div>
                        <div><span className="fontsize">{sale}%</span></div>
                    </div>
                </div>
                <div className="item-head-03">
                    сэкономлено&nbsp;баллами
                    <div>
                        <span className="fontsize">{moneybonus}&#8381;</span>
                    </div>
                </div>
                <div className="item-head-04">
                    в&nbsp;коллекции
                    <div>
                        <span className="fontsize">{collection_to}</span>&nbsp;из&nbsp;<span className="fontsize">{collection_max}</span>&nbsp;<span className="fontdecor">рецептов</span>
                    </div>
                </div>
                <div className="item-head-05">
                    выполнено
                    <div>
                        <span className="fontsize">{tasks_to}</span>&nbsp;из&nbsp;<span className="fontsize">{tasks_max}</span>&nbsp;<span className="fontdecor">заданий</span>
                    </div>
                </div>
                <div className="item-head-06">
                    {
                        awards_all.map((item, index) => (
                            (index < 3) && <Boximg key={index} awards_img={item.awards_img} awards_name={item.awards_name} />
                        ))
                    }
                    <div>
                        и &nbsp;ещё
                        <div className="fontsize">{awards_all.length}&nbsp;награды</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header;