var request = require("request");

function myFunc(arraye) {
  for (j = 0; j < 100; j++) {
    let y = arraye[j];
    let httpReg = /\/.+watermark=none/;
    y = y.match(httpReg);
    y = y[0];
    // console.log(y);
    // y = x.slice(1, -1);
    y = "https://memegen.link" + y;

    return y;
  }
}

var fs = require("fs");
var https = require("https");
//Node.js Function to save image from External URL.
function saveImageToDisk(url, localPath) {
  var fullUrl = url;
  var file = fs.createWriteStream(localPath);
  var request = https.get(url, function(response) {
    response.pipe(file);
  });
}

request(
  {
    uri: "https://memegen.link/examples"
  },
  function(error, response, body) {
    body1 = body.match(/ src.+watermark=none/g);
    console.log("type of body: " + typeof body1);
    console.log(body1);

    let x = body1[106];
    console.log("type of x: " + typeof x);
    let httpReg = /\/.+watermark=none/;
    x = x.match(httpReg);
    console.log("type of x: " + typeof x);
    x = x[0];
    console.log("type of x: " + typeof x);
    // console.log(x);
    // x = x.slice(1, -1);
    x = "https://memegen.link" + x;

    console.log(x);
    saveImageToDisk(x, "Pix/neg.png");
    return x;
  }
);
