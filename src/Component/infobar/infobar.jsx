

const Infobar = () => {
    // вывод информационного бара
    return (<>
        <div className="infobar">Способы накопить баллы
            <p >Заказывать много: <br /> 7&divide;13&nbsp;товаров&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="arrow"><span className="arrow-1"></span></span> <span className="rate-bonus">50 &#x263B;</span>
                <br />
                14&divide;120&nbsp;товаров&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="arrow"><span className="arrow-1"></span></span><span className="rate-bonus">100 &#x263B;</span>
                <br />
                21 и больше&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="arrow"><span className="arrow-1"></span></span><span className="rate-bonus">200 &#x263B;</span>
            </p>
            <p>
                <a href="!#">Выполнять задания</a>
            </p>
            <p>
                Покупать<a href="!#"> специальные продукты</a>
            </p>
            <p style={{ marginTop: "3vw", fontWeight: "700" }}>
                Правила
                </p>
            <p>
                Баллы появляются на балансе не сразу, а в день фактического выполнения заказа.
                </p>
            <p>
                Ограничения по использованию баллов: <span style={{ fontWeight: "700" }}>15% от суммы заказа</span>
            </p>
            <p>
                Через 3 месяца после зачисления баллы сгорают
                </p>

            <p style={{ marginTop: "3vw", fontWeight: "700" }}>
                Совет
                </p>
            <p>
                добавляйте полюбившиеся товары в <a href="!#">Избранное</a>, чтобы иметь к ним быстрый доступ
                </p>
            <p style={{ marginTop: "3vw" }}>
                Возле каждого товара вы видите  <span style={{ backgroundColor: "#ccda16" }}>сколько</span> человек добавили его в избранное
                </p>
        </div>
        
    </>
    )
}

export default Infobar