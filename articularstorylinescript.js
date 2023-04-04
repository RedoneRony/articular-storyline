var inputVal = GetPlayer().GetVar("TextEntry");
var url = "http://localhost:5000/api/chat";
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    message: inputVal,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    GetPlayer().SetVar("resultText", data.data);
  })
  .catch((error) => console.error(error));
