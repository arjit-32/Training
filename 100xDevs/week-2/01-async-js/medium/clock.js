function runEverySecond() {
    let curDate = new Date();
    console.log(curDate);
    setTimeout(runEverySecond, 1000);
}
runEverySecond();