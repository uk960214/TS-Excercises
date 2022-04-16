/*

Intro:

    We have so many users and admins in the database!
    CEO's father Jeff says that we are a BigData
    startup now. We have no idea what it means, but
    Jeff says that we need to do some statistics and
    analytics.

    We've ran a questionnaire within the team to
    figure out what do we know about statistics.
    The only person who filled it was our coffee
    machine maintainer. The answers were:

     * Maximums
     * Minumums
     * Medians
     * Averages

    We found a piece of code on stackoverflow and
    compiled it into a module `stats`. The bad
    thing is that it lacks type declarations.

Exercise:

    Check stats module implementation at:
    node_modules/stats/index.js
    node_modules/stats/README.md

    Provide type declaration for that module in:
    declarations/stats/index.d.ts

Higher difficulty bonus exercise:

    Avoid duplicates of type declarations.

*/

// declarations/stats/index.d.ts
declare module "stats" {
  type comparator<T> = (a: T, b: T) => number;
  export function getMaxIndex<T>(input: T[], comparator: comparator<T>): number;
  export function getMinIndex<T>(input: T[], comparator: comparator<T>): number;
  export function getMedianIndex<T>(
    input: T[],
    comparator: comparator<T>
  ): number;
  export function getMaxElement<T>(
    input: T[],
    comparator: comparator<T>
  ): T | null;
  export function getMinElement<T>(
    input: T[],
    comparator: comparator<T>
  ): T | null;
  export function getMedianElement<T>(
    input: T[],
    comparator: comparator<T>
  ): T | null;
  export function getAverageValue<T>(
    input: T[],
    getValue: (item: T) => number
  ): number | null;
}

// node_modules/stats/index.js
/**
 * function getMaxIndex(input, comparator) {
    if (input.length === 0) {
        return -1;
    }
    var maxIndex = 0;
    for (var i = 1; i < input.length; i++) {
        if (comparator(input[i], input[maxIndex]) > 0) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function getMaxElement(input, comparator) {
    var index = getMaxIndex(input, comparator);
    return index === -1 ? null : input[index];
}

function getMinIndex(input, comparator) {
    if (input.length === 0) {
        return -1;
    }
    var maxIndex = 0;
    for (var i = 1; i < input.length; i++) {
        if (comparator(input[maxIndex], input[i]) > 0) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function getMinElement(input, comparator) {
    var index = getMinIndex(input, comparator);
    return index === -1 ? null : input[index];
}

function getMedianIndex(input, comparator) {
    if (input.length === 0) {
        return -1;
    }
    var data = input.slice().sort(comparator);
    return input.indexOf(data[Math.floor(data.length / 2)]);
}

function getMedianElement(input, comparator) {
    var index = getMedianIndex(input, comparator);
    return index === -1 ? null : input[index];
}

function getAverageValue(input, getValue) {
    if (input.length === 0) {
        return null;
    }
    return input.reduce(
        function (result, item) {
            return result + getValue(item);
        },
        0
    ) / input.length;
}
 */
