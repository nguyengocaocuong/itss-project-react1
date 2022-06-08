import './card.css'
import { format } from 'date-fns'
function Card({item = {date:'12/02/2000',listFood:[]}}) {
    return (
        <div className='card'>
            <p><span>Ngày mua :</span> <span>{format(item.date,'MM/dd/yyyy').toString()}</span></p>
            <p><span>Tổng số nguyên liệu :</span> <span>{item.listFood.length}</span></p>
            <p><span>Tổng giá trị :</span> <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.listFood.reduce((total,food) =>  total = total + food.price , 0 ))}</span></p>
        </div>
    )
}

export default Card
