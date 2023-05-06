const express = require("express")
const app = express();
const https = require("https");

const port = 3000;



// this part res to reach to home directory "/" and then call function on reaching the home directory
app.get("/", function (req, res) {

//NOTE:This 'res' what we get from our our local server ( or own server that we created)

    // res.send("server is responding");


    //Note  : local server can have only res.send but multiple res.write()
    // so , we create new one down 


    const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=f34d39f3ba80e7672a11300e0966eb28";
//this part the respond for the api 

    https.get(url, function (respond) {

        // NOTE:this "respond" is what we are getting for the exteranl server


        console.log(respond.statusCode);
        // this part show that data of api
        respond.on("data", function (data) {
            // console.log(data);
            // This part will convert the hexadecimall code into the js object
            const weatherData=JSON.parse(data);
            console.log(weatherData);

            // const object={
            //     name:"Gaurang",
            //     aga:34
            // };
            // console.log(JSON.stringify(object));// this convert that object to string json it opposite of json.parse
            const temp=weatherData.main.temp;
            const humadity=weatherData.main.humidity;
            const weatherDescript=weatherData.weather[0].description;
            console.log(weatherDescript);
            console.log(humadity);
            
            console.log(temp);
            const id=weatherData.weather[0].id;
            // console.log(id);
            const icon=weatherData.weather[0].icon;
            const imgUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png>"


            res.write("<h1>The temperature is :"+temp+"Kelvien</h1>");
            res.write("<h1>The temperature description is :"+weatherDescript+" really!</h1>");
            res.write("<img src="+imgUrl+"");
            res.send();
            
        })
    })
    // let call respond . on to 

})











// this part will create server
app.listen(port, function () {
    console.log("server is created and running on port 3000");
})