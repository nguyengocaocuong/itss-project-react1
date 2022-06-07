import './card.css'

function Card({item = {date:'12/02/2000',listFood:[]}}) {
    return (
        <div className='card'>
            <p><span>Ngày mua :</span> <span>{item.date}</span></p>
            <p><span>Tổng số nguyên liệu :</span> <span>{item.listFood.length}</span></p>
            <p><span>Tổng giá trị :</span> <span>{100000}</span> VND</p>
        </div>
    )
}

export default Card
