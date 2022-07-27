import React from 'react';
import PropTypes from 'prop-types';
import Datapicker from 'data-picker';
import './date-picker/dist/css/date-picker.css';

function SimpleForm(props) {
    const [selectedDate,setSelectedDate] = useState(null);

    return (
        <>
            <Datapicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                filterData={date => date.getDay() !== 6 & date.getDay() !== 0}
                isClearable
                showYearDropdown
                scrollableMonthYearDropDown
            />
        </>
    );
}

SimpleForm.propTypes = {
    
}

export default SimpleForm
