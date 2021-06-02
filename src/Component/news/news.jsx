
import NewsItem from "./news-item";
import "./new.css";
import React from "react";


export default function News(props) {
    const { new_soon, new_recently } = props;
    return (
        <div className="newItem">
            <div className="Items">
                <span className="itemshead">Скоро</span>
                {
                    //перебор массива в передачей данных дочернему элементу
                    new_soon.map((post, index) => (
                        index < 4 && (<NewsItem
                            key={post.id+"ad"}
                            keys={post.key}
                            name={post.name}
                            data={post.data}
                            sale={post.sale}
                            bonus={post.bonus} />
                        )
                    ))
                }
            </div>
            <div className="Items border">
                <span className="itemshead">Недавно</span>
                {
                    new_recently.map((post, index) => (
                        index < 4 && (<NewsItem
                            plus={true}
                            key={post.id+"qw"}
                            date={post.date}
                            keys={post.key}
                            name={post.name}
                            data={post.data}
                            sale={post.sale}
                            bonus={post.bonus}
                            number={post.number}
                            adr={post.addr}
                            summ={post.summ} />
                        )
                    ))
                }
            </div>


        </div>

    )
}