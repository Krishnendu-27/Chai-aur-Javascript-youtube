let clock = document.querySelector("#clock");

const date = new Date();
let localtime = (date, locale) =>
  date.toLocaleDateString(locale, { weekday: "short" });
let getMonthName = (date, locale = "en-US") =>
  date.toLocaleDateString(locale, { month: "short" });

let weekname = localtime(new Date());
let monthname = getMonthName(new Date());
let formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
let formattedTime = formatter.format(date);
let totaltime = `${weekname} ${monthname} ${date.getDate()} ${formattedTime}`;

clock.textContent = `${totaltime}`;
