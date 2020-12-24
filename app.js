const who = ["narisy", "chonrady", "korbby"];

function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
}

function findIndexScrum() {
  const today = new Date();
  const offset = 86400000;

  const day = new Date(today.valueOf() - offset);

  const nWeek = getWeekNumber(day);
  const scrum = nWeek % 3;
  return scrum;
}

const http = require("http");
const server = http.createServer((req, res) => {
  res.write("Today is " + who[findIndexScrum()] + " " + "tadaaaa");
  res.end();
});

server.listen(process.env.PORT || 80, () => console.log("server started"));
