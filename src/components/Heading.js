const Heading = ()=>{
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    const today = new Date();
    const formatted = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
    return (
    <div className='header'>
        <h1>To-Do!</h1>
        <h3>{daysOfWeek[today.getDay()]}, {months[today.getMonth()]} {today.getDate()} {today.getFullYear()} </h3>
    </div>
);
}

export default Heading;