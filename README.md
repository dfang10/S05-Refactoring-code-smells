# Section 5 – Refactoring Code Smells in Practice

Long methods, unclear variable names, comments.

Changed unclear variable names to names that better reflect their purpose such as a to increment, b to amount, h to title. Helps the code by allowing for better understanding of variables.

Removed unneeded comments. Helps the code become more readable and in case it does change, the comments aren't outdated.

Split the long function and created a separate function to handle button creation and click. All the logic isn't put into 1 function to improve readability.
