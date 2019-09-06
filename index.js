var request = require("request");

// function myFunc(arraye) {
//   for (let j = 0; j < 100; j++) {
//     let y = arraye[j];
//     let httpReg = /\/.+watermark=none/;
//     y = y.match(httpReg);
//     y = y[0];
//     // console.log(y);
//     // y = x.slice(1, -1);
//     y = "https://memegen.link" + y;

//     return y;
//   }
// }

var fs = require("fs");
var https = require("https");
var decode = require("decode-html");

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
    const body1 = body.match(/ src.+watermark=none/g);
    // console.log("type of body: " + typeof body1);
    // console.log(body1);

    const body2 = body1.map(itm => {
      itm = itm.match(/\/.+watermark=none/);
      itm = "https://memegen.link" + itm;
      // itm = decode(itm);
      itm = itm.replace("&#39;", "'");
      itm = itm.replace("&#39;", "'");
      itm = itm.replace("’", "'");
      return itm;
    });
    console.log(body2);
    console.log(body2.length);
    for (let i = 87; i < 94; i++) {
      const nfile = "Pix/nfile" + i + ".jpg";
      saveImageToDisk(body2[i], nfile);
    }

    // const readline = require("readline").createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });

    // readline.question(`Give the image number?`, imgNumber => {
    //   const imgNr = imgNumber;
    //   readline.close();
    // });

    // readline.question(`Give the text`, userText => {
    //   const uTxt = userText;
    //   readline.close();
    // });

    // let x = body2[imgNr];
    // let newText = uTxt.replace(" ", "_");
    // console.log(newText);
    // console.log(x);
  }
);

// console.log(body2);

// let x = body1[2];
// // console.log("type of x: " + typeof x);
// let httpReg = /\/.+watermark=none/;
// x = x.match(httpReg);
// // console.log("type of x: " + typeof x);
// x = x[0];
// // console.log("type of x: " + typeof x);
// // console.log(x);
// // x = x.slice(1, -1);
// x = "https://memegen.link" + x;

// console.log(x);
// saveImageToDisk(x, "Pix/neg.jpg");
// return x;
