function digitalClock(){
    let dateObj= new Date()
    // console.log(dateObj)
    let selectedElem= document.getElementsByTagName('span')
    
    let curHrs=dateObj.getHours()
    selectedElem[0].innerHTML=curHrs

    selectedElem[1].innerText=dateObj.getMinutes()

    selectedElem[2].innerText=dateObj.getSeconds()

    selectedElem[3].innerText=dateObj.getDate()
  
    let curMonth=dateObj.getMonth()

    switch(curMonth){
        case 9: curMonth='Sep'
    }
    selectedElem[4].innerText= curMonth


    selectedElem[5].innerText=dateObj.getFullYear()

    

    let curDay=dateObj.getDay()

    switch(curDay){
        case 0: curDay='Sun'
        break;
        case 1: curDay='Monday'
        break;
        case 2: curDay='Tues'
        break;
        case 3: curDay='Wed'
        break;
        case 4: curDay='Thurs'
        break;
        case 5: curDay='Friday'
        break;
        case 6: curDay='saturday'
        break;
    }
     selectedElem[6].innerText= curDay
}