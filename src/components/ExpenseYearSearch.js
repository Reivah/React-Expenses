import './ExpenseYearSearch/'
const ExpenseYearSearch = () => {
    return (
        <div className="filter-main">
            <div className="filter-main__box">
                <label>Search by year</label>
                <select>
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