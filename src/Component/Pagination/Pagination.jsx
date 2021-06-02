import React from "react";
import "./Pagination.css"

// Создание Пагинации данных заказов
// Прописываем получаемые значения за место props-ов
export default function Pagination({ postPerPage, totalPost, paginete, currentPage }) {
    const pageNumbers = [];
    const all_page = Math.ceil(totalPost / postPerPage); // расчет количества страниц
    for (let i = 1; i <= all_page; i++) {
        // создает массив с нумерацией страниц добавляя последующее число в конец массива
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                <li
                    onClick={() => paginete(currentPage - 1)} //перелистывает назад
                    //если открыта 1 страница то кнопка назад откл
                    className={(currentPage == 1) ? "disabled" : "page-next_prev"}> 
                    &#10229;
                     <span>предыдущая</span>
                </li>
                <li
                    onClick={() => paginete(currentPage + 1)} // перелистывает вперед
                    //если открыта последняя страница то кнопка вперед откл
                    className={(currentPage === all_page) ? "disabled" : "page-next_prev"}>
                    <span>следующая</span>
                    &#10230;
                </li>
                {
                    //вывод нумерации страниц
                    pageNumbers.map(i => (
                        <li
                            key={i + "as"}
                            // при клике присваиват еласс активного элемента
                            className={(currentPage == i) ? "page-item active" : "page-item"}>
                            <a
                                onClick={() => paginete(i)} //получает значение страницы кликнутого элемента
                                href="!#"
                                className="page-link">
                                {i}
                            </a>
                        </li>
                    ))}
            </ul>
        </div>

    )


}