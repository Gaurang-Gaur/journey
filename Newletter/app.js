const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");// able to send the data to our local server 
// using bodyparser 
const https = require("https")
const request = require("request");


app.use(express.static("public"));// In short it tell our app(express) to use the require module 
// here app=express which means express using the express.static () function with public as parameter.
app.use(bodyParser.urlencoded({ extended: true }));//now we parse the data of the form using post method on action ="/" to root route

// Note : we reach this home directory  route on the webserver it's send the res. sendfile();


// Note:


// Express' app.get() function lets you define a route handler for GET requests to a given URL. For example,
//  the below code registers a route handler 
// that Express will call when it receives an HTTP GET request to /test.

// const app = require('express')();

// // If you receive a GET request with `url = '/test'`, always
// // send back an HTTP response with body 'ok'.
// app.get('/test', function routeHandler(req, res) {
//   res.send('ok');
// });
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");


})
// remember we use the http . method inside the app.post middlware because we are posting via using the https method
app.post("/", function (req, res) {


    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    // here, inside the data object we have to send those key value pair which are recoginised by the mailchimp

    const data = {
        // here member is array of objects.
        members: [
            {
                email_address: email,
                status: "Subsricbed",
                merge_fields: {
                    FName: firstName,
                    LName: lastName
                }
            }

        ]
    };// this complete js object which we will send the mailchimp server
    // but we have to turn it into Json format to send

    const jsonData = JSON.stringify(data);
    const url = "https://us21.api.mailchimp.com/3.0/lists/896ecaf051.";

    const options = {
        method: "POST",//This we posting 
        auth: "gaurang:3e98fac6f520ececf97369db311f52b9-us21"
    }

    // INside the app.post still we have to https we have to made https request to external server
    // NOte : we mainly wanted to send the data to mailchimp server on response back on our https. request
       const request=  https.request(url, options, function (response) {
        // This respond will getting back for the external server from the mailchimp on our https request which call by our
        // app.post middlware layer using url, options 
        //Note: this will tell the data it send us back for the external server

        response.on("data", function (data) {
            console.log(JSON.parse(data));
        })

    })
    // now, our task it that we have to send the data to mailchimp server
    request.write(jsonData);
    request.end();


    // NOw our target to send the 

    // console.log(req);

});

// api key
// 3e98fac6f520ececf97369db311f52b9-us21
// audience id
// 896ecaf051.
// 896ecaf051.








app.listen(port, function () {


    // res.write("Hello world");
    // res.send("Hello world");
    console.log("server is listen on port 3000");

})