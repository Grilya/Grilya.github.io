/*Weather*/
/*12 Characters max*/
    const weatherArray = ["꒰•ᴗ•꒱  ꒰•ᴗ•꒱  ꒰•ᴗ•꒱  ꒰•ᴗ•꒱  ꒰•ᴗ•꒱ ꒰•ᴗ•꒱", "꒰•`´•꒱ ꒰•`´•꒱ ꒰•`´•꒱ ꒰•`´•꒱ ꒰•`´•꒱","｀ヽ｀ヽ｀、ヽ(ノ＞＜)ノ ｀、ヽ｀ヽ｀" ];
    var weather;
    var currentTemp;

    link = "https://api.openweathermap.org/data/2.5/weather?q=freiburg,de&units=metric&apikey=55218528e65960e07b1d793baff27503";
    async function Weather(){
    const response = await fetch(link);
    const data = await response.json();
    weather = data.weather[0].main;
    currentTemp = data.main.temp;
    console.log(data.weather[0].main);
    switch(weather)
        {
            case "Clouds": document.getElementById("weather").innerHTML = weatherArray[0];
            break;
            case "Storm": document.getElementById("weather").innerHTML = weatherArray[1];
            break;
            case "Rain":
            document.getElementById("weather").innerHTML = weatherArray[2];
            break;
            default:
            document.getElementById("weather").innerHTML = "Add new Weather!!!"
            break;
        }

    document.getElementById("temp").innerHTML= "Current Temp:" +currentTemp + "°";
    }
    /*Date Funktion*/
    setInterval(dateFunktion,500);
    setInterval(Weather,500);

    function dateFunktion(){
    const d= new Date();
    document.getElementById("timer").innerHTML = d.toLocaleTimeString();
    document.getElementById("date").innerHTML = d.toLocaleDateString();
    }
