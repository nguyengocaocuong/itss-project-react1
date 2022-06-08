import './card.css'
const sum = (array)=>{
    let total = 0
    for(let i = 0;i < array.length;i++) {
        total += parseInt(array[i].price)
    }
    return total
}
function Card({item}) {
    return (
        <div className='card'>
            <p><span>日付 :</span> <span>{item.date}</span></p>
            <p><span>料理の数 :</span> <span>{item.listFood.length}</span></p>
            <p><span>合計 :</span> <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(sum(item.listFood))}</span></p>
        </div>
    )
}

export default Card
