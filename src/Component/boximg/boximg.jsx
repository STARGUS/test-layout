import React from "react"

// Элемент изоображения награды
export default function Boximg(props) {
    const {awards_img, awards_name} = props;

    return (
        <div className="boximg" key={awards_name}>
            <img className="img" src={awards_img} alt={awards_name} />
        </div>
    )
}
