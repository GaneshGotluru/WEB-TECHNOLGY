console.warn('Date object model')
function dateTime(){
    let dateObj=new Date()
    console.log(dateObj)

    //current year
    let curYear= dateObj.getFullYear()
    console.log(curYear)

    let dd=dateObj.getDate()
    console.log(dd)

    let mm=dateObj.toDateString()
    console.log(mm)

    let month=dateObj.getMonth()+1
    console.log(month)

    let day=dateObj.getDay()
    console.log(day)

    // let year=dateObj.get
}
dateTime()
