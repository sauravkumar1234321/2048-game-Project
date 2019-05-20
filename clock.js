function timer(Date_init) {

this.sec = Date_init.getSeconds(),
this.min = Date_init.getMinutes(),
this.hrs = Date_init.getHours(),

this.Time_lag =  function(){
    var Date_final = new Date();
    var Date_lag = Date_final - Date_init;
    return Date_lag;
    }
};