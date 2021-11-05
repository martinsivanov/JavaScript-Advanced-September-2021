function solve(inputObj) {

    method(inputObj);
    uri(inputObj);
    version(inputObj);
    message(inputObj);

    return inputObj;
    function method(inputObj) {
        let arr = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let methodName = inputObj.method;
        if (!arr.includes(methodName)) {
            throw Error('Invalid request header: Invalid Method');
        }
    }

    function uri(inputObj) {
        let uriValue = inputObj.uri;
        let regex = /^\*$|^[a-zA-Z0-9.]+$/;
        let test = regex.test(uriValue);
        if (!regex.test(uriValue) || uriValue === undefined) {
            throw Error('Invalid request header: Invalid URI');
        }
    }

    function version(inputObj) {
        let versionName = inputObj.version;
        let arr = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        if (versionName === '' || !arr.includes(versionName)) {
            throw Error('Invalid request header: Invalid Version');
        }
    }

    function message(inputObj) {
        let messageValue = inputObj.message;
        let regexMsg = /^[0-9]?$|^[^<>\\&'"]+$/;
        if (!regexMsg.test(messageValue) || messageValue === undefined) {
            throw Error('Invalid request header: Invalid Message');
        }
    }
}

try {
    console.log(solve({

        method: 'GET',

        uri: 'svn.public.catalog',

        version: 'HTTP/1.1',

        message: ''

    }));

    console.log(solve({

        method: 'POST',
        version: 'HTTP/2.0',
        message: 'rm -rf /*'

    }));
} catch (error) {
    console.log(error.message);
}
