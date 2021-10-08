//Weather
//12 Characters max
    const weatherArray = ["꒰•ᴗ•꒱  ꒰•ᴗ•꒱  ꒰•ᴗ•꒱  ꒰•ᴗ•꒱  ꒰•ᴗ•꒱ ꒰•ᴗ•꒱", "꒰•`´•꒱ ꒰•`´•꒱ ꒰•`´•꒱ ꒰•`´•꒱ ꒰•`´•꒱","｀ヽ｀ヽ｀、ヽ(ノ＞＜)ノ ｀、ヽ｀ヽ｀" ];
    var weather;
    var currentTemp;

    link = "https://api.openweathermap.org/data/2.5/weather?q=freiburg,de&units=metric&apikey=55218528e65960e07b1d793baff27503";
    async function Weather(){
    const response = await fetch(link);
    const data = await response.json();
    weather = data.weather[0].main;
    currentTemp = data.main.temp;
    //console.log(data.weather[0].main);
    switch(weather)
        {
            case "Clouds":
            document.getElementById("weather").style.backgroundImage = "url('Images/Pixel_Cloud.png')";
            /*
                document.getElementById("weather").innerHTML = weatherArray[0];
            */
                break;
            case "Storm": document.getElementById("weather").innerHTML = weatherArray[1];
            break;
            case "Rain":
            document.getElementById("weather").style.backgroundImage = "url('Images/Rain_Cloud.png')";
            break;
            default:
            document.getElementById("weather").style.backgroundImage = "Add new Weather!!!"
            break;
        }

    document.getElementById("temp").innerHTML= "Current Temp:" +currentTemp + "°";
    }
    //Date Funktion
    setInterval(dateFunktion,500);
    setInterval(Weather,500);

    function dateFunktion(){
    const d= new Date();
    document.getElementById("timer").innerHTML = d.toLocaleTimeString();
    document.getElementById("date").innerHTML = d.toLocaleDateString();
    }
    //Walking animation routine*/
    /*determines when to switch between 2 animations(going-left and going-right)*/
    var animation = 1;
    function wait(){
    console.log(animation);

        function switchDirection(){
            if(animation == 0){
                //first animation
                var image = document.getElementById("walking");
                image.className = "walking_right";
                var div = document.getElementById("moving_div");
                div.className = "moving_Picture_right";
                animation=0;
            }
            else {
                //second animation
                var image = document.getElementById("walking");
                image.className = "walking_left";
                var div = document.getElementById("moving_div");
                div.className = "moving_Picture_left";
                console.log(div.className);
                animation = 0;
            }
        }
    switchDirection();
    setInterval(function(){switchDirection()},20000);
    }
