import React, { Component } from 'react';
import Contents from "./contents"
import "./content.css"
import Pagination from "../Pagination/Pagination.jsx"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // подключение модуля даты 
import Infobar from "../infobar/infobar.jsx"
import Selecting from "../select/select.jsx"

class Content extends Component {
    state = {
        account: [],
        name_adr: [],
        product: [],
        list_content: [],
        select_oper: "Все адреса",
        isActivyears: true,
        detail: true,
        data_time: "за все время",
        years: "за год",
        month: "за месяц",
        date1: new Date(),
        startDate: new Date(),
        currentPage: 1,
        postPerPage: 10,

    };
    // Кнопка сброса всех фильтров, параметры по умолчанию
    sbros = () => {
        this.setState({
            list_content: this.state.account
        });
        document.querySelector("#times").textContent = "за все время";
        setTimeout(() => {
            this.setState({
                detail: false,
                isActivyears: false,
                select_oper: document.querySelector("#operation").textContent = "Все адреса"
            });
        }, 100)
        this.clickselect0();
    }
    // состояния разворота подробной информации о каждом заказе
    detail_click() {
        if (this.state.detail == false)
            this.setState({
                detail: true
            })
        else
            this.setState({
                detail: false
            })
    }
    // Создание кликера открытия списка селект
    clickselect0 = () => {
        setTimeout(() => {
            if (this.state.data_time != (document.querySelector("#times").textContent)) {
                this.setState({
                    data_time: (document.querySelector("#times").textContent),
                    list_content: this.state.account,
                    isActivyears: true
                });
                this.dop2();
            } else {
                this.setState({
                    isActivyears: true
                })
            }
        }, 100)
    }
    // Создание фильтрации по дате
    clickselect1 = (date) => {
        this.setState({
            date1: date
        });
        if (this.state.date1) {
            if (this.state.data_time == "за год") {
                this.setState({
                    list_content: this.state.list_content.filter((a) => this.state.date1.getFullYear() == (new Date(a.dates).getFullYear()))
                })
            }
            if (this.state.data_time == "за месяц") {
                this.setState({
                    list_content: this.state.list_content.filter((a) => (this.state.date1.getMonth() + 1 == (new Date(a.dates).getDate()) && this.state.date1.getFullYear() == (new Date(a.dates).getFullYear())))
                })
            }
            if (this.state.data_time != "за год" && this.state.data_time != "за месяц") {
                this.setState({
                    list_content: this.state.list_content
                });

            }
            this.dop2();
        }

    }
    // Создание дополнительного филтра по адресам и дате
    dop2() {
        setTimeout(() => {
            this.setState({
                select_oper: document.querySelector("#operation").textContent
            })
            if (this.state.select_oper != "Все адреса" && this.state.select_oper != "Прочие адреса") {
                this.setState({
                    list_content: this.state.account.filter((a) => a.addr_account.name == this.state.select_oper)
                });

            } else if (this.state.select_oper == "Прочие адреса") {
                this.state.name_adr.map((item, index) => {
                    if (index > 4)
                        this.setState({
                            list_content: this.state.account.filter((a) => a.addr_account.name == item.name)
                        })
                });


            } else if (this.state.select_oper == "Все адреса") {
                this.setState({
                    list_content: this.state.account
                });

            }
            if (this.state.date1) {
                if (this.state.data_time == "за год") {
                    this.setState({
                        list_content: this.state.list_content.filter((a) => this.state.date1.getFullYear() == (new Date(a.dates).getFullYear()))
                    })

                }
                if (this.state.data_time == "за месяц") {
                    this.setState({
                        list_content: this.state.list_content.filter((a) => (this.state.date1.getMonth() + 1 == (new Date(a.dates).getDate()) && this.state.date1.getFullYear() == (new Date(a.dates).getFullYear())))
                    })

                }
                if (this.state.data_time != "за год" && this.state.data_time != "за месяц") {
                    this.setState({
                        list_content: this.state.list_content
                    });

                }
            }
        }, 1)


    }
    // Повтор фильтра по адресам для избежания зацикливания
    clickselect2 = () => {
        setTimeout(() => {
            this.setState({
                select_oper: document.querySelector("#operation").textContent
            });
            this.dop2();
        }, 1)

    }
    // Элементы которые загружаются при первом запуске страницы
    componentDidMount() {
        //Fetch Загрузка массива данных о заказах
        fetch("orders.json")
            .then((response) => response.json())
            .then((response) => { this.setState({ account: response.orders }); console.log("Good job-1"); })
            .then((error) => { this.setState({ false: true, error }) })
            .finally(() => { this.setState({ list_content: this.state.account }); this.clickselect2(); this.detail_click() });

        fetch("address.json")
            .then((response) => response.json())
            .then((response) => { this.setState({ name_adr: response.sort((a, b) => { return b.wt - a.wt }) }); console.log("Good job-2"); })
            .then((error) => { this.setState({ false: true, error }) });

    }
    // Запись состояния выбранной (текущей) страницы
    paginete = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }
    render() {
        const IndexofLastPost = this.state.currentPage * this.state.postPerPage; // последний пост
        const IndexofFirstPost = IndexofLastPost - this.state.postPerPage; // Первый пост
        const currentPost = this.state.list_content.slice(IndexofFirstPost, IndexofLastPost) //Посты к выгрузке
        return (
            <>
                <div className="header-content">
                    <span className="order">Последние заказы</span>
                    <span className="details" onClick={() => this.detail_click()}>Все детали</span>
                </div>
                <div className="inner-header-content">
                    <div className="margin text" >Отображать</div>
                    <div style={{ marginRight: "3vw" }}>
                        <div className="positionselect" >
                            <Selecting onChange={this.clickselect0} />
                        </div>
                        {
                            <div style={{ marginTop: "2rem" }}>
                                {this.state.isActivyears && (<>
                                    {(this.state.data_time == "за год") &&
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={date => {
                                                this.setState({
                                                    startDate: date
                                                }); this.clickselect1(date);
                                            }}
                                            showYearPicker
                                            dateFormat="yyyy"
                                            yearItemNumber={9}
                                        />
                                    }
                                    {(this.state.data_time == "за месяц") &&
                                        <DatePicker
                                            selected={this.state.startDate}
                                            onChange={date => {
                                                this.setState({
                                                    startDate: date
                                                }); this.clickselect1(date);
                                            }}
                                            dateFormat="MMMM"
                                            showMonthYearPicker
                                            showFullMonthYearPicker
                                        />

                                    } </>)}
                            </div>
                        }
                    </div>
                    <div className="text">
                        адрес доставки:
                    </div>
                    <div className="positionselect">
                        <Selecting name_adr={this.state.name_adr} onChange={this.clickselect2} />
                    </div>

                    <div className="sbros" style={{ fontSize: "1.2vw" }} onClick={() => this.sbros()} >
                        Сбросить
                    </div>
                </div>
                <div className="inner-wrapper-content">
                    <div className="header-wrapper">
                        <div>
                            Заказ
                    </div>
                        <div>
                            Дата
                    </div>
                        <div>
                            Приход
                    </div>
                        <div>
                            Расход
                    </div>
                        <div>
                            Адрес
                    </div>

                    </div>
                    <div></div>
                    <div>
                        {(this.state.detail) && (
                            <div>
                                {currentPost.map(
                                    (item, index) => {
                                        return (
                                            <Contents
                                                detail={true}
                                                key={index + "jhjhjh"}
                                                order={item.order}
                                                dates={item.dates}
                                                coming_bonus={item.coming_bonus}
                                                rate={item.rate}
                                                data_account={item.data.data_account}
                                                tel={item.data.tel}
                                                dats={item.data.date_delivery.dats}
                                                tims={item.data.date_delivery.tims}
                                                rate_bonus={item.data.rate_bonus}
                                                name={item.addr_account.name}
                                                addr={item.addr_account.addr}
                                                before={item.data.interval_delivery.before}
                                                withs={item.data.interval_delivery.withs}
                                                person_discount={item.data.person_discount}
                                                discount_poll={item.data.discount_poll}
                                                rate_delivery={item.data.rate_delivery}
                                                summ_bonus={item.data.summ_bonus}
                                                products_list={item.data.products_list}
                                                payment_methods={item.data.payment_methods}
                                                comment={item.data.comment}
                                            />
                                        )
                                    }
                                )
                                }
                                <div><Pagination totalPost={this.state.list_content.length} postPerPage={this.state.postPerPage} paginete={this.paginete} currentPage={this.state.currentPage} /></div>
                            </div>
                        )}
                        {(!this.state.detail) && (
                            <div>
                                {currentPost.map(
                                    (item, index) => {
                                        return (
                                            <Contents
                                                detail={false}
                                                key={index + "jhjhsah"}
                                                order={item.order}
                                                dates={item.dates}
                                                coming_bonus={item.coming_bonus}
                                                rate={item.rate}
                                                data_account={item.data.data_account}
                                                tel={item.data.tel}
                                                dats={item.data.date_delivery.dats}
                                                tims={item.data.date_delivery.tims}
                                                rate_bonus={item.data.rate_bonus}
                                                name={item.addr_account.name}
                                                addr={item.addr_account.addr}
                                                before={item.data.interval_delivery.before}
                                                withs={item.data.interval_delivery.withs}
                                                person_discount={item.data.person_discount}
                                                discount_poll={item.data.discount_poll}
                                                rate_delivery={item.data.rate_delivery}
                                                summ_bonus={item.data.summ_bonus}
                                                products_list={item.data.products_list}
                                                payment_methods={item.data.payment_methods}
                                                comment={item.data.comment}
                                            />
                                        )
                                    }
                                )
                                }
                                <div>
                                    <Pagination totalPost={this.state.list_content.length} postPerPage={this.state.postPerPage} paginete={this.paginete} currentPage={this.state.currentPage} /></div>
                            </div>

                        )}

                    </div>
                    <Infobar />
                </div>
            </>
        );
    }
}

export default Content;