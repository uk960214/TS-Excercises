/*

Intro:

    In order to engage users in the communication with
    each other we have decided to decorate usernames
    in various ways. A brief search led us to a library
    called "str-utils". Bad thing is that it lacks
    TypeScript declarations.

Exercise:

    Check str-utils module implementation at:
    node_modules/str-utils/index.js
    node_modules/str-utils/README.md

    Provide type declaration for that module in:
    declarations/str-utils/index.d.ts

    Try to avoid duplicates of type declarations,
    use type aliases.

*/

// declarations/str-utils/index.d.ts
declare module "str-utils" {
  export function strReverse(value: string): string;
  export function strToLower(value: string): string;
  export function strToUpper(value: string): string;
  export function strRandomize(value: string): string;
  export function strInvertCase(value: string): string;
}

// node_modules/str-utils/index.js

// /**
//  * Reverses a string.
//  * @param {String} value
//  * @return {String}
//  */
// function strReverse(value) {
//     return value.split('').reverse().join('');
// }

// /**
//  * Converts a string to lower case.
//  * @param {String} value
//  * @return {String}
//  */
// function strToLower(value) {
//     return value.toLowerCase();
// }

// /**
//  * Converts a string to upper case.
//  * @param {String} value
//  * @return {String}
//  */
// function strToUpper(value) {
//     return value.toUpperCase();
// }

// /**
//  * Randomizes characters of a string.
//  * @param {String} value
//  * @return {String}
//  */
// function strRandomize(value) {
//     var array = value.split('');
//     for (var i = array.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array.join('');
// }

// /**
//  * Inverts case of a string.
//  * @param {String} value
//  * @return {String}
//  */
// function strInvertCase(value) {
//     return value
//         .split('')
//         .map(function(c) {
//             if (c === c.toLowerCase()) {
//                 return c.toUpperCase();
//             } else {
//                 return c.toLowerCase();
//             }
//         })
//         .join('');
// }

// module.exports = {
//     strReverse,
//     strToLower,
//     strToUpper,
//     strRandomize,
//     strInvertCase
// };
