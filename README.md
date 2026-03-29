# QA: Split integer ([uk](readme.uk.md))

Write tests for `splitInteger` function that takes 2 positive integers `value`
and `numberOfParts` and returns an array containing exactly `numberOfParts`
integer elements.

- The difference between the max and min number in the array should be <= 1
- The array should be sorted ascending (from lowest to highest)

You don't need to validate arguments (they are always valid).

Examples:

```js
splitInteger(8, 1) === [8]
splitInteger(6, 2) === [3, 3]
splitInteger(17, 4) === [4, 4, 4, 5]
splitInteger(32, 6) === [5, 5, 5, 5, 6, 6]
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/docs/expect).

Test
