# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @irha/lotide`

**Require it:**

`const _ = require('@irha/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Checks if the two primitive values are equal and outputs the appropriate message.
* `assertArraysEqual(actual, expected)`: Checks if the two arrays are equal and outputs the appropriate message.
* `assertObjectsEqual(actual, expected)`: Checks if the two objects are equal and outputs the appropriate message.
* `eqArrays(actual, expected)`: Checks if the two arrays are equal.
* `eqObjects(actual, expected)`: Checks if the two objects are equal.
* `countLetters(phrase)`: Counts the number of times each letter occurs in the given phrase.
* `countOnly(allItems, itemsToCount)`: Counts the number of occurences in an array (allItems) of items denoted true in an object (itemsToCount).
* `letterPositions(sentence)`: Finds the indices of each letter found in the phrase.
* `findKey(object, callback)`: Finds the first key that satistfies the callback function.
* `findKeyByValue(object, value)`: Finds the first key that has the given value.
* `flatten(array)`: Flattens the given (nested) array.
* `head(array)`: Returns the head (ie. first item) of the array.
* `middle(array)`: Returns the middle of the array.
* `tail(array)`: Returns the tail (ie. all but the first element) of the array.
* `takeUntil(array, callback)`: Returns items of an array until the callback function is satisfied.
* `without(array, itermsToRemove)`: Removes the specified items from an array.
* `map(array, callback)`: Returns an array with each element from original array modified by callbackFunction.