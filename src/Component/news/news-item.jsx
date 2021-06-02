import React from "react"


export default function NewsItem(props) {

    const { name, data, sale, bonus, number, keys, date, summ, adr, plus } = props;
    // вывод значений взависимости от принятых данных
    return (
        <div>
            {keys === "adjustment" ?
                (<>{name}
                    <a href="#dw"> {data}</a>
                    {sale && (<><span className="bold"> скидка &#43;{sale}</span></>)}
                    {(bonus && (<><span className="bonus"> {!plus && (<>&#43;</>)}{bonus} &#x263B;</span> </>))}
                    {number && (<> &#8470;{number}</>)}</>)
                :
                (<>{name} {number && (<> &#8470;{number} </>)}
                    <a href="#dw">{data}
                        {date && (date + (" на "))}
                        {summ && (<> {summ} &#8381; </>)}
                        {adr && (<>по адресу &laquo;{adr}&raquo;</>)}</a>
                    {sale && (<><span className="bold"> скидка &#43;{sale}</span></>)}
                    {(bonus && (<><span className="bonus"> {!plus && (<>&#43;</>)}{bonus}&#x263B;</span> </>))} </>)}
        </div>
    )
}

