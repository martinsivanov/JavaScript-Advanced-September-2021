class Request{
    constructor(method,uri,version,message){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '') 
let myData2 = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
let result = [];
result.push(myData);
result.push(myData2);

console.log(myData2); 