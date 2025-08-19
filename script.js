const getCountStats = ()=>{
    const targetDate = '08-30-2025';
    const targetObj = new Date(targetDate);
    let now = new Date();

    const diff = targetObj - now;

    const seconds = Math.floor(((diff)/(1000))%60);
    const minutes = Math.floor(((diff)/(1000*60))% 60);
    const hours = Math.floor(((diff)/(1000*60*60))% 24);
    const days = Math.floor(((diff)/(1000*60*60*24)));

    return(
        {
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    )
};

const displayCountStat = () =>{
    const result = getCountStats();

    const container = document.getElementById('container');

    const divItems = `
    <div id="box">
    <div> <h2>${result.days} </h2><h2>Days</h2></div>

     <div><h2>${result.hours} </h2><h2>Hours</h2></div>

      <div><h2>${result.minutes} </h2><h2>Minutes</h2></div>

    <div><h2>${result.seconds} </h2><h2>Seconds</h2></div>
    </div>
    `;
    container.innerHTML = divItems

    if(result.days<= 0 && result.hours<=0 && result.minutes<=0 && result.seconds<=0){
        clearInterval(interval);
        container.innerHTML = 'Welcome the main day'
    }
}

const interval = setInterval(displayCountStat, 1000);

displayCountStat()
