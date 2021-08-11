window.onload = function(){
    requestImage(vin);
}

function requestImage(vin){
    //console.log('button clicked');
    //STEP 1: create XMLhttpRequest Object
    let xHttp = new XMLHttpRequest();
    //STEP 2: create callback func onreadystatechange, this funciton will be called throughout the ajax process
    xHttp.onreadystatechange = function(){
        /*
            defines logic that will process the response once it is ready
            Uses ready states and status codes to determine if the request was processed
            ready state determines the stage of the request
                5 stages:
                    0: not initialized
                    1: server connection is established
                    2: request has been received by the server
                    3: request is being processed
                    4: request is complete and response is ready
        */
       if(xHttp.readyState == 4 && xHttp.status == 200){
           let carObj = JSON.parse(xHttp.responseText);
           console.log(carObj);
       }
    }
    //STEP 3: create connection with the server and provide the http method
    /*
        {
            "content-type":"application/json",
            "authorization":"your_auth_key_here",
            "partner-token":"your_partner_token_here"
        }                           
    */
    xHttp.setRequestHeader('content-type', 'application/json');
    xHttp.setRequestHeader('authorization', 'Basic OTZmNDcxNDctNDY4Zi00NWVlLWI0OGYtMWZjNzU3Njk0MmQ4');
    xHttp.setRequestHeader('partner-token', '65ecdc32811542658881d4d9e5ef4f15');

    xHttp.open('GET', 'http://api.carmd.com/v3.0/image?vin=5TFEV54198X043410');
    //STEP 4: send the request
    xHttp.send();
}