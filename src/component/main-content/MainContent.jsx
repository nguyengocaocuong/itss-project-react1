import DailyCost from "../daily-cost/DailyCost";
import ListFood from "../list-food/ListFood";
import './main-content.css'

const getContent = (id) => {
    switch (id) {
        case 0:
            return <DailyCost />
        case 1:
            return <ListFood />
    }
}
const MainContent = ({id}) => {
    return (
        <div className="main-content">
            {
                getContent(id)
            }
        </div>
    );
}


export default MainContent;