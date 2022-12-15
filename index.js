let key = "e4c70ce6a6821649a416cb9521d5f4f8"

    let container = document.getElementById("container")
    let map = document.getElementById("gmap_canvas")
    //="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
    async function getWeather() {
        try {
            let city = document.getElementById('city').value;
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);

            let data = await res.json()

            console.log('data:', data);
            appendData(data)
        } catch (err) {
            console.log('err:', err);
        }

    }

    function appendData(data) {
        container.innerHTML = null;
        let name = document.createElement("p")
        name.innerText = `Name - ${data.name}`
        let temp = document.createElement("p");
        temp.innerText = `Temp-${data.main.temp}`
        let humidity = document.createElement("p");
        humidity.innerText = `Humidity-${data.main.humidity}`;
        let Pressure = document.createElement("p");
        Pressure.innerText = `Pressure-${data.main.pressure}`;

        container.append(name, temp, humidity, Pressure);

        //appending a map
        map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    }