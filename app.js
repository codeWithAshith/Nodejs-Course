// to run -> "node app"

global.setTimeout(() => {
    console.log("Timeout with global");
}, 3000);

setTimeout(() => {
    console.log("Timeout without global");
}, 3000);

console.log(__dirname);
console.log(__filename);
