import { useState } from 'react'
import './menu.css'
const menuItems = [
    { id: 0, icon: "fa fa-money", title: "Thiết lập ngân sách" },
    { id: 1, icon: "fa fa-cutlery", title: "Danh sách nguyên liệu" },
    { id: 2, icon: "fa fa-shopping-basket", title: "Chi tiêu trong ngày" }
]
function Menu() {
    const [index, setIndex] = useState(0)
    return (
        <div className="menu">
            {
                menuItems.map(item =>
                (
                    <div className={`menu-item ${index == item.id ? 'selected' : ''}`} onClick={()=> setIndex(item.id)}>
                        <i class={item.icon} aria-hidden="true"></i>
                        <span>{item.title}</span>
                    </div>
                )
                )
            }
        </div>
    )
}

export default Menu
