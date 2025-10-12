// ----------------------------------------------
// Date and Time Operations in JavaScript – Clear and Engaging
// ----------------------------------------------
// Demonstrates Date creation, formatting methods, timestamp calculation,
// and retrieving date components including time zone conversion.

// ---------------------------------------------------
// 1. Creating Date Instances
// ---------------------------------------------------
let myDate = new Date();
console.log(myDate);
// current date-time in UTC, e.g., 2025-10-08T16:50:05.963Z

// ---------------------------------------------------
// 2. Date Formatting Methods
// ---------------------------------------------------
console.log(myDate.toString());
// full date-time string in local time zone

console.log(myDate.toDateString());
// date portion only, e.g., "Wed Oct 08 2025"

console.log(myDate.toISOString());
// ISO 8601 format in UTC, e.g., "2025-10-08T16:51:36.799Z"

console.log(myDate.toLocaleString());
// locale-specific date and time, e.g., "10/8/2025, 10:21:36 PM"

console.log(myDate.toLocaleDateString());
// locale-specific date only, e.g., "10/8/2025"

// ---------------------------------------------------
// 3. Parsing Invalid Dates and Month Offset
// ---------------------------------------------------
// Note: month index starts at 0 (January = 0)
let myCreatedDate = new Date("2023-02-31");
let myCreatedDate2 = new Date("2023-14-01");
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
// invalid dates roll over or result in "Invalid Date"

// ---------------------------------------------------
// 4. Timestamps and Calculations
// ---------------------------------------------------
console.log(Date.now());
// milliseconds since Jan 1, 1970 UTC

console.log(Math.floor(Date.now() / 1000));
// seconds since Jan 1, 1970 UTC

// ---------------------------------------------------
// 5. Retrieving Date Components
// ---------------------------------------------------
let today = new Date();
console.log(today.getDay());
// day of week (0 = Sunday, 1 = Monday, ...)

console.log(today.getFullYear());
// four-digit year

console.log(today.getMonth());
// month index (0 = January, 9 = October)

// ---------------------------------------------------
// 6. Time Zone Conversion
// ---------------------------------------------------
let indiaDate = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Kolkata",
});
console.log(indiaDate);
// current date-time in IST, e.g., "10/9/2025, 12:30:00 AM"

// ---------------------------------------------------
// Key Takeaways
// ---------------------------------------------------
// • Date.now() provides high-precision timestamps in milliseconds.
// • toISOString(), toLocaleString(), and related methods offer flexible formatting.
// • Invalid date strings roll over or error—handle with care.
// • Date getters (.getDay(), .getMonth(), .getFullYear()) retrieve specific components.
// • toLocaleString() with timeZone option enables easy conversion between zones.
