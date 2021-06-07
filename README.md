Cover with tests a function `splitInteger` that accepts two positive integers `num` and `parts`.
The function divide `num` into even parts - or at least as even as they can be.

Here are some details:
- the function return an integer array;
- there are `parts` elements (for example, if `parts = 5`, the `num` would be 
splitted into 5 integers);
- the parts of the `num` would be as close as possible;
- the integers in the result array would be in the ascending order;
- there is no reason to test for edge cases: the input to your function will always 
be valid.

Examples:
```
splitInteger(8, 1) === [8]
splitInteger(6, 2) === [3, 3]
splitInteger(17, 4) === [4, 4, 4, 5]
splitInteger(32, 6) === [5, 5, 5, 5, 6, 6]
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)