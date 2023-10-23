const Date = props => {
    const year = props.date.toLocaleString('en-US', {year: 'numeric'})
    const month = props.date.toLocaleString('en-US', {month: '2-digit'})
    const day = props.date.toLocaleString('en-US', {day: 'numeric'})
    return (
        <div>
            <div>{year}</div>
            <div>{month}</div>
            <div>{day}</div>
        </div>
    )
}

export default Date