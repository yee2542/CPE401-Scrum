const who = ["narisy", "chonrady", "korbby"];

// const today = new Date("2021-01-12");
const today = new Date();
const offset = 86400000 ;

const day = new Date(today.valueOf() - offset);

function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  return weekNo;
}
const nWeek = getWeekNumber(day);
const scrum = nWeek % 3;
console.log('Today is' ,who[scrum], 'tadaaaa');
