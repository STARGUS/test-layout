import "./nav.css"

export default function Nav() {
    // элемент навигации
    return (
        <div className="navigation">
            <div className="item activ"><a href="#2">Сводка</a></div>
            <div className="item"><a href="#1">Задания</a><sub>20</sub></div>
            <div className="item"><a href="#3">Детализация</a></div>
            <div className="item"><a href="#4">Избранное</a><sub>3</sub></div>
            <div className="item"><a href="#5">Ваши&nbsp;рецепты</a><sub>9</sub></div>
            <div className="item"><a href="#6">Адреса&nbsp;доставки</a><sub>4</sub></div>
            <div className="item"><a href="#7">Профиль&nbsp;и&nbsp;напоминания</a></div>
        </div>
    )
}