import React from 'react';
 
const DailyCost = () => {
    return (
        <div className='cost'>
            <div className='left-content'>
                <div className='form-input'>
                    <label>Ngân sách</label>
                    <input type="number" value={0} />
                </div>
                <div className='form-input'>
                    <label>Thời gian bắt đầu</label>
                    <input type="date" />
                </div>
                <button>Save</button>
            </div>
            <div className='right-content'>
            <div className='form-input'>
                    <div className='time'> Từ <span>27/3/2000</span> - <span>28/3/2000</span></div>
                    <h3>Tổng ngân sách <span>{}</span></h3>
                    <h3>Đã chi tiêu <span>{}</span></h3>
                    <h3>Còn lại<span>{}</span></h3>
                </div>
            </div>

        </div>
    );
}
 
 
export default DailyCost;