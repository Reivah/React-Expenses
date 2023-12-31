import './ExpenseYearSearch.css'
const ExpenseYearSearch = (props) => {

    const yearValueHandler = event => {
        const yearValue = event.target.value
        props.onSelectedYearValue(yearValue)
    }

    return (

        
        <div className="filter-main">
            <div className="filter-main__box">
                <label>Search by year</label>
                <select value={props.onSelectedYear} onChange={yearValueHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseYearSearch