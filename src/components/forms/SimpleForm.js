import React,{ useState} from 'react';
import Datapicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SimpleForm(props) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selected, setSelected] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <>
            <h2>Date Picker - Done</h2>
            {/* <h3>Selected Date: {selectedDate}</h3> */}
            <Datapicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                filterData={date => date.getDay() !== 6 & date.getDay() !== 0}
                isClearable
                showYearDropdown
                scrollableMonthYearDropDown
            />

            <h2>DateRange Picker</h2>

            <h2>DropDown - Done</h2>
            <h3>Selected Value: {selected}</h3>
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option></option>
                <option>Apple</option>
                <option>Mango</option>
                <option>Orange</option>
            </select>

            <h2>CheckBox Group</h2>
            <h3>Selected Value: {selectedItem}</h3>
            <div>
                <input type="checkbox" name="gender" value="A" onChange={e => setSelectedItem(e.target.value)}></input><label>A</label>
                <input type="checkbox" name="gender" value="B" onChange={e => setSelectedItem(e.target.value)}></input><label>B</label>
            </div>

            <h2>Radio Group</h2>
            <h3>Selected Value: {selectedGender}</h3>
            <div>
                <input type="radio" name="gender" value="1" onChange={e => setSelectedGender(e.target.value)}></input><label>Male</label>
                <input type="radio" name="gender" value="0" onChange={e => setSelectedGender(e.target.value)}></input><label>Female</label>
            </div>

            <h2>Paging Sorting Filtering Export</h2>

            <h2>Timy MCE</h2>

            <h2>Multi Select</h2>

            <h2>Auto Complete</h2>

            <h2>Vitual Scroll</h2>

            <h2>Switch</h2>
        </>
    );
}

export default SimpleForm;
