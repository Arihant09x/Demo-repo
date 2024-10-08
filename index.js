let fs = require("fs");
function resolve(call, cd) {
  return new Promise(function (resolve) {
    fs.readFile(call, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(call, data, function () {
        resolve();
      });
    });
  });
}
async function main() {
  await resolve("b.txt");
  console.log("cleaed");
}
main();
