













class Arredondar {

    round(number, precision){
        var factor = Math.pow(10, precision);
        var tempNumber = number * factor;
        var roundedTempNumber = Math.round(tempNumber);
        return roundedTempNumber / factor;
    }
}

export default new Arredondar();

