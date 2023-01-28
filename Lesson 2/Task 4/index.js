
const testGrades = require("./../Task 3/index.js");
const http = require("http");
const httpStatus = require("http-status-codes"); //1

const port = 4000; //2
const app = http.createServer((request, response) => { //3
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, { //4
        "Content-Type": "text/html"
    }); 
    let responseMessage = `<h1>Hello, Student! Here is your grade : ${testGrades.grade}</h1>`;
    response.write(responseMessage); //5
    response.end(); //6
    console.log(`Sent a response : ${responseMessage}`);
    response.write("test");
    
});

app.listen(3000); //7
console.log(`The server has started and is listening on port number: ${port}`);