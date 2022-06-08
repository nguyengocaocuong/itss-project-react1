import './menu.css'
const menuItems = [
    { id: 1, icon: "fa fa-shopping-basket", title: "一日で費用" },
    { id: 2, icon: "fa fa-cutlery", title: "料理リスト" }
   
]
function Menu({ changeId, id }) {
    return (
        <div className="menu">
            <div className='menu-content'>
                {
                    menuItems.map(item =>
                    (
                        <div className={`menu-item ${id == item.id ? 'selected' : ''}`} onClick={() => changeId(item.id)}>
                            <i class={item.icon} aria-hidden="true"></i>
                            <span>{item.title}</span>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Menu
