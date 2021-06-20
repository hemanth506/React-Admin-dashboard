import cardcss from "./card.module.css"

function Card(props){
    return <div className={cardcss.card}>{props.children}</div>
}

export default Card