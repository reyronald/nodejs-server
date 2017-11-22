# nodejs-server

Starts an express server that prints to the console any POST request headers and body. Originally developed to test the Webhooks feature in [ProDoctivity](http://www.prodoctivity.com/).

#### Hit the server
```bash
$ http :3000 message="Hello world"

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 34
Content-Type: application/json; charset=utf-8
Date: Wed, 22 Nov 2017 15:39:26 GMT
ETag: W/"22-jHtZBC83TSxzyJR4Ab9YJ+Br/Zw"
Strict-Transport-Security: max-age=15552000; includeSubDomains
X-Content-Type-Options: nosniff
X-DNS-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block

"{\"message\": \"Hello world\"}"
```

#### Get the response
```bash
$ npm start

> nodejs-server@1.0.0 start \nodejs-server
> node start

Express server listening on localhost:3000 in DEV mode
POST / 200 5.493 ms - 34
HEADERS
{
  "host": "localhost:3000",
  "connection": "keep-alive",
  "accept-encoding": "gzip, deflate",
  "accept": "application/json, */*",
  "user-agent": "HTTPie/1.0.0-dev",
  "content-type": "application/json",
  "content-length": "28"
}
PRETTY BODY
{
  "message": "Hello world"
}
RAW BODY
{"message": "Hello world"}
```


###
### Try it out

As simple as...

```bash
npm install
npm start
```
