
// setInterval(()=>{
//     console.log("Tick");
// },1000);

function runEverySecond() {
    console.log("This function runs every 1 second");
    setTimeout(runEverySecond, 1000);
}
runEverySecond();

