fetch("https://sofienorling.com/wp-json/cowp/v1/pastevent")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => console.log(data));

console.log("whaaat");
