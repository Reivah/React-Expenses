import './Date.css'
const Date = props => {
    const year = props.date.toLocaleString('en-US', {year: 'numeric'})
    const month = props.date.toLocaleString('en-US', {month: '2-digit'})
    const day = props.date.toLocaleString('en-US', {day: 'numeric'})
    return (
        <div className='expense-date'>
            <div className='expense-date__year '>{year}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default Date