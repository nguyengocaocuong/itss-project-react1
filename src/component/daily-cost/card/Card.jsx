import './card.css'
const sum = (array)=>{
    let total = 0
    for(let i = 0;i < array.length;i++) {
        total += parseInt(array[i].price)
    }
    console.log(total)
    return total
}
function Card({item}) {
    return (
        <div className='card'>
            <p><span>Ngày mua :</span> <span>{item.date}</span></p>
            <p><span>Tổng số nguyên liệu :</span> <span>{item.listFood.length}</span></p>
            <p><span>Tổng giá trị :</span> <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sum(item.listFood))}</span></p>
        </div>
    )
}

export default Card
