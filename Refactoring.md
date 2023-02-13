# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. Created a constants.js file to export all the required constants. For example:- TRIVIAL_PARTITION_KEY & MAX_PARTITION_KEY_LENGTH.

2. Destructured required keys in the deterministicPartitionKey function.

3. Destructured event object, if event object is provided.

4. Created a common arrow function to get hex string named getHexString.

5. candidate variable is initially assigned with TRIVIAL_PARTITION_KEY because in the original implementation candidate variable is assigned TRIVIAL_PARTITION_KEY, if it is undefined/null.

6. If partitionKey is not provided in the event object then the event is directly converted into a hex string and returned.

7. Added two more test cases: -
  a.) if event object is provided.
  b.) if partitionKey is provided inside event object.
