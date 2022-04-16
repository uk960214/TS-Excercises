/*

Intro:

    The next logical step for us is to provide more
    precise registration date for our users and admins.
    We've approximately made up dates for each user and
    admin and used a library called "date-wizard" in
    order to pretty-format the dates.

    Unfortunately, type declarations which came with
    "date-wizard" library were incomplete.

    1. DateDetails interface is missing
       time related fields such as hours, minutes and
       seconds.
    2. Function "pad" is exported but not declared.

Exercise:

    Check date-wizard module implementation at:
    node_modules/date-wizard/index.js
    node_modules/date-wizard/index.d.ts

    Extend type declaration of that module in:
    module-augmentations/date-wizard/index.ts

*/

// node_modules/date-wizard/index.d.ts
declare module "date-wizard" {
  function pad(s: number): string;

  interface DateDetails {
    hours: number;
    minutes: number;
    seconds: number;
  }
}

// node_modules/date-wizard/index.js
// function dateWizard(date, format) {
//   var details = dateWizard.dateDetails(date);
//   return format.replace(/{([^}]+)}/g, function (s, match) {
//     return dateWizard.pad(details[match]);
//   });
// }

// dateWizard.pad = function (s) {
//   s = String(s);
//   while (s.length < 2) {
//     s = "0" + s;
//   }
//   return s;
// };

// dateWizard.dateDetails = function dateDetails(date) {
//   return {
//     year: date.getFullYear(),
//     month: date.getMonth() + 1,
//     date: date.getDate(),
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     seconds: date.getSeconds(),
//   };
// };

// dateWizard.utcDateDetails = function getUTCDateDetails(date) {
//   return {
//     year: date.getUTCFullYear(),
//     month: date.getUTCMonth() + 1,
//     date: date.getUTCDate(),
//     hours: date.getUTCHours(),
//     minutes: date.getUTCMinutes(),
//     seconds: date.getUTCSeconds(),
//   };
// };

// module.exports = dateWizard;
