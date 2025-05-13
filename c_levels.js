// --- Game Data ---
const challengesData = [
    // Level 1: Simple For Loop
    {
        goal: "Print numbers 0 to 4 using a for loop.",
        concepts: "Includes, main function, for loop, printf",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [{text: '#include <stdlib.h>', reason: '`stdlib.h` contains general utility functions (like memory allocation, random numbers), but `printf` requires the Standard Input/Output library, which is `stdio.h`.'}, {text: '#import <stdio.h>', reason: 'Standard C uses the `#include` preprocessor directive. `#import` is a similar concept but specific to Objective-C and not part of standard C.'}], indent: 0, explanation: "Includes the Standard Input/Output library for functions like printf." },
            { correct: 'int main() {', distractors: [{text: 'void main() {', reason: 'The C standard (like C99, C11) specifies that `main` must return `int` to signal the program\'s exit status to the OS (0 for success). `void main()` is non-standard, though some compilers might allow it.'}, {text: 'function main() {', reason: 'The keyword `function` is used in languages like JavaScript to define functions, but in C, you define a function by specifying its return type (e.g., `int`), name, parameters, and body `{}`.'}], indent: 0, explanation: "The main function where program execution begins. It returns an integer." },
            { correct: 'for(int i = 0; i < 5; i++) {', distractors: [{text: 'while(int i < 5) {', reason: 'A `while` loop only checks a condition. Variable declaration (`int i`) is not allowed inside the `while` condition parentheses, and initialization/increment must happen separately before/inside the loop body.'}, {text: 'if(i < 5) {', reason: 'An `if` statement executes its block only *once* if the condition is true. A `for` loop is needed to *repeat* the block multiple times based on initialization, condition, and increment steps.'}], indent: 1, explanation: "A for loop: initializes i=0, continues while i<5, increments i after each loop." },
            { correct: 'printf("Count: %d\\n", i);', distractors: [{text: 'print("Count: %d", i);', reason: 'The standard C library function for formatted output is `printf` (print formatted). There is no standard function named `print`.'}, {text: 'console.log(i);', reason: '`console.log` is the function used for printing output in JavaScript environments (like browsers or Node.js), not in standard C.'}], indent: 2, explanation: "Prints formatted text. %d is a placeholder for an integer (i), \\n is a newline." },
            { correct: '}', distractors: [{text: 'end for;', reason: 'C uses matching curly braces `{` and `}` to define the start and end of code blocks (like loops, functions, if-statements). Keywords like `end` are not used for this.'}, {text: 'break;', reason: 'The `break;` statement is used to exit *early* from a loop (for, while, do-while) or switch statement. It does not define the normal end of the loop block.'}], indent: 1, explanation: "Closes the for loop block." },
            { correct: 'return 0;', distractors: [{text: 'exit(0);', reason: '`exit(0)` (from `stdlib.h`) forces immediate program termination from anywhere. `return 0;` specifically indicates the successful completion *of the `main` function* and allows normal program cleanup.'}, {text: 'return;', reason: 'The `main` function is declared as `int main()`, meaning it must return an integer value. `return;` is only valid for functions declared with a `void` return type.'}], indent: 1, explanation: "Indicates successful program execution by returning 0 from main." },
            { correct: '}', distractors: [{text: 'end main;', reason: 'C uses curly braces `{}` to define code blocks. Keywords like `end` are not part of the C syntax for ending functions.'}, {text: '};', reason: 'A semicolon `;` is used to terminate statements in C, but it is *not* placed after the closing curly brace `}` that defines the end of a function body.'}], indent: 0, explanation: "Closes the main function block." }
        ]
    },
    // Level 2: Simple If Statement
    {
        goal: "Check if a variable is positive and print a message.",
        concepts: "Variables, if statement, comparison operators",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [{text: '#include <math.h>', reason: 'The `math.h` header provides mathematical functions (like `sqrt`, `pow`, `sin`). It is not needed for basic comparison (`>`) or printing (`printf`).'}, {text: 'using namespace std;', reason: '`using namespace std;` is a C++ directive to avoid prefixing standard library elements with `std::`. It is not used or needed in standard C.'}], indent: 0, explanation: "Include the library needed for printing output."},
            { correct: 'int main() {', distractors: [{text: 'int start() {', reason: 'By convention and standard, the execution of a C program begins in the function named `main`. Other names like `start` won\'t be automatically recognized as the entry point.'}, {text: 'void main() {', reason: 'Standard C (like C99, C11) requires `main` to return an `int` value to indicate the program\'s exit status to the operating system. `void main()` is non-standard.'}], indent: 0, explanation: "Start the main execution block."},
            { correct: 'int number = 10;', distractors: [{text: 'float number = 10.0;', reason: 'While `float` can store 10.0, the task involves a simple positive/non-positive check. Using `int` (integer) is more direct and common for such whole number operations.'}, {text: 'char number = \'A\';', reason: 'A `char` variable stores a character value (like \'A\'). Comparing it with `> 0` might yield unexpected results based on its ASCII value, and it doesn\'t fit the goal of checking a numerical value.'}], indent: 1, explanation: "Declare an integer variable 'number' and give it a value." },
            { correct: 'if (number > 0) {', distractors: [{text: 'if number > 0:', reason: 'In C, the conditional expression following the `if` keyword *must* be enclosed within parentheses `()`. The colon `:` is used in languages like Python, not C.'}, {text: 'while (number > 0) {', reason: 'A `while` loop repeatedly executes the code block as long as the condition is true. An `if` statement executes the block only *once* if the condition is true, which is needed here.'}], indent: 1, explanation: "Check if the value of 'number' is greater than zero." },
            { correct: 'printf("Number is positive.\\n");', distractors: [{text: 'printf(number);', reason: '`printf` requires a "format string" as the first argument to specify *how* to print the following arguments. To print an integer, you need `printf("%d\\n", number);`.'}, {text: 'echo "Positive";', reason: '`echo` is a command typically used in shell environments (like Bash or Command Prompt) to display text, not a function available within standard C.'}], indent: 2, explanation: "If the condition was true, print this message." },
            { correct: '}', distractors: [{text: 'end if;', reason: 'C uses curly braces `{}` to define the beginning and end of code blocks associated with control structures like `if`. Keywords are not used to end blocks.'}, {text: 'stop;', reason: '`stop` is not a recognized keyword or command in the standard C language.'}], indent: 1, explanation: "Closes the if statement block." },
            { correct: 'return 0;', distractors: [{text: 'return 1;', reason: 'Conventionally, returning `0` from `main` indicates success, while returning a non-zero value (like `1`) signals an error or abnormal termination to the operating system.'}, {text: 'end;', reason: '`end` is not a C keyword. Use `return` followed by a value (for non-void functions) to exit a function.'}], indent: 1, explanation: "Signal that the program finished successfully."},
            { correct: '}', distractors: [{text: 'finish', reason: '`finish` is not a C keyword used for ending code blocks or functions.'}, {text: 'end main', reason: 'C uses the closing curly brace `}` to signify the end of the `main` function\'s code block.'}], indent: 0, explanation: "Closes the main function block." }
        ]
    },
    // Level 3: Basic Function Call
    {
        goal: "Define and call a simple function to add two numbers.",
        concepts: "Function declaration (prototype), function definition, function call, return value",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [{text:'#include <functions.h>', reason:'There is no standard C header file named `functions.h`. Header files typically group related declarations (like `stdio.h` for I/O).'}, {text:'#include <iostream>', reason:'`<iostream>` is the standard input/output header file for C++, used with `cout` and `cin`. C uses `<stdio.h>` for `printf` and `scanf`.'}], indent: 0, explanation: "Include necessary library for input/output."},
            { correct: '// Function declaration (prototype)', distractors: [{text:'// Variable declaration', reason:'This comment is misleading; the next line declares a function, not a variable.'}, {text:'// Loop setup', reason:'This comment is inaccurate; the next line is about a function, not setting up a loop.'}], indent: 0, explanation: "Add a comment explaining the next line's purpose."},
            { correct: 'int add(int a, int b);', distractors: [{text:'void add(int a, int b);', reason:'The function is intended to calculate and *return* the sum, which is an integer. Declaring it as `void` means it wouldn\'t return any value, contradicting the goal.'}, {text:'function add(a, b);', reason:'C requires explicit type declarations. You must specify the return type (`int`) and the type of each parameter (`int a`, `int b`). The keyword `function` is not used.'}], indent: 0, explanation: "Declare the 'add' function: specify return type (int) and parameter types (int, int)."},
            { correct: 'int main() {', distractors: [{text:'void main() {', reason:'Standard C requires `main` to return `int` to signal success (0) or failure (non-zero) to the OS.'}, {text:'program start {', reason:'C program execution starts in `int main() { ... }`. Other syntax is incorrect.'}], indent: 0, explanation: "Begin the main function."},
            { correct: 'int result = add(5, 3);', distractors: [{text:'int result = 5 + 3;', reason:'This performs the addition directly within `main`. The goal is to demonstrate defining and *calling* a separate `add` function.'}, {text:'call add(5, 3);', reason:'In C, you call a function simply by using its name followed by arguments in parentheses `()`. The keyword `call` is not used for function invocation.'}], indent: 1, explanation: "Call the 'add' function, pass 5 and 3 as arguments, and store the returned value in 'result'."},
            { correct: 'printf("Result: %d\\n", result);', distractors: [{text:'printf(result);', reason:'`printf` needs a format specifier (like `%d` for integers) within the format string (first argument) to know how to interpret and print the variable `result`.'}, {text:'print result;', reason:'`print` is not a standard C function. You must use `printf` for formatted output.'}], indent: 1, explanation: "Print the calculated result."},
            { correct: 'return 0;', distractors: [{text:'return result;', reason:'The `main` function should return `0` to indicate successful execution to the operating system, not the calculated value from the `add` function.'}, {text:'exit main;', reason:'Keywords like `exit` are not used to end `main` normally; use `return 0;`.'}], indent: 1, explanation: "Exit the main function successfully."},
            { correct: '}', distractors: [{text:'end program;', reason:'C uses the closing curly brace `}` to mark the end of the `main` function block.'}, {text:'stop;', reason:'`stop` is not a C keyword.'}], indent: 0, explanation: "Closes the main function block." },
            { correct: '// Function definition', distractors: [{text:'// Main loop', reason:'This comment is incorrect; the following code defines the `add` function, not a loop within `main`.'}, {text:'// Variable setup', reason:'This comment is inaccurate; the following code is the implementation of the `add` function.'}], indent: 0, explanation: "Add a comment indicating the start of the function's code."},
            { correct: 'int add(int a, int b) {', distractors: [{text:'void add(int a, int b) {', reason:'The function *definition* must match the *declaration* (prototype). Since it was declared to return `int`, the definition must also specify `int`.'}, {text:'define add(a, b) {', reason:'`#define` is a preprocessor directive for macros, not for defining functions. Function definitions require specifying return and parameter types.'}], indent: 0, explanation: "Define the 'add' function, matching the declaration."},
            { correct: 'return a + b;', distractors: [{text:'print a + b;', reason:'The purpose of this function, as declared, is to *return* the calculated sum, not to print it directly. Printing should happen in `main` using the returned value.'}, {text:'result = a + b;', reason:'This assigns the sum to a variable named `result`, but `result` hasn\'t been declared within this function scope, and more importantly, the value isn\'t being *returned* to the caller.'}], indent: 1, explanation: "Perform the addition and return the sum."},
            { correct: '}', distractors: [{text:'end function;', reason:'C uses the closing curly brace `}` to mark the end of the function\'s definition block.'}, {text:'end add;', reason:'C uses the closing curly brace `}` to mark the end of the function\'s definition block, not keywords.'}], indent: 0, explanation: "Closes the add function block." }
        ]
    },
    // Level 4: Basic Input with scanf
    {
        goal: "Read an integer from the user and print it.",
        concepts: "scanf, printf, variables, address-of operator (&)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [{text: '#include <input.h>', reason: 'There is no standard C header named `input.h`. Input/output functions like `scanf` and `printf` are in `stdio.h`.'}, {text: '#include <iostream>', reason: '`<iostream>` is the C++ header for input/output using `cin` and `cout`. C uses `<stdio.h>`.'}], indent: 0, explanation: "Include the standard input/output library." },
            { correct: 'int main() {', distractors: [{text: 'void main() {', reason: 'Standard C requires `main` to return an integer (`int`) to indicate exit status.'}, {text: 'main function {', reason: 'C function definition requires a return type before the name and parentheses `()`. '}], indent: 0, explanation: "Start the main function." },
            { correct: 'int userInput;', distractors: [{text: 'var userInput;', reason: 'C is statically typed; you must declare the type explicitly (like `int`, `float`, `char`). `var` is used in languages like JavaScript.'}, {text: 'integer userInput;', reason: 'The keyword for the integer data type in C is `int`, not `integer`.'}], indent: 1, explanation: "Declare an integer variable to store the user's input." },
            { correct: 'printf("Enter an integer: ");', distractors: [{text: 'print("Enter an integer: ");', reason: 'The standard C function for formatted output is `printf`.'}, {text: 'scanf("Enter an integer: ");', reason: '`scanf` is used for *reading* formatted input, not for *printing* prompts.'}], indent: 1, explanation: "Prompt the user to enter a number." },
            { correct: 'scanf("%d", &userInput);', distractors: [{text: 'scanf("%d", userInput);', reason: '`scanf` needs the memory *address* where it should store the input. The address-of operator `&` is required before the variable name (`&userInput`).'}, {text: 'scanf(userInput);', reason: '`scanf` requires a format string (like `"%d"`) to specify the type of input expected and the address (`&variable`) to store it.'}], indent: 1, explanation: "Read an integer (%d) from input and store it at the address of 'userInput'." },
            { correct: 'printf("You entered: %d\\n", userInput);', distractors: [{text: 'printf("You entered: %d\\n", &userInput);', reason: '`printf` needs the *value* of the variable to print it. Passing the address (`&userInput`) would print the memory address, not the stored integer.'}, {text: 'printf(userInput);', reason: '`printf` requires a format string as the first argument to specify how to print the subsequent arguments.'}], indent: 1, explanation: "Print the value stored in the 'userInput' variable." },
            { correct: 'return 0;', distractors: [{text: 'return 1;', reason: 'Returning 0 from `main` conventionally indicates successful execution. Non-zero often indicates an error.'}, {text: 'return userInput;', reason: '`main` should return an exit status (0 for success), not a variable\'s value unless intended as an exit code.'}], indent: 1, explanation: "Indicate successful program execution." },
            { correct: '}', distractors: [{text: 'end main;', reason: 'C uses `}` to close function blocks.'}, {text: '};', reason: 'A semicolon `;` is used after `struct` definitions, but not after the closing brace `}` of a function.'}], indent: 0, explanation: "Close the main function block." }
        ]
    },
    // Level 5: Floating-Point Arithmetic
    {
        goal: "Calculate the area of a circle given its radius (using float).",
        concepts: "float data type, arithmetic operators, constants (#define), math.h",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [{text: '#include <stdlib.h>', reason:'`stdlib.h` is for general utilities, not core I/O or math constants like M_PI.'}, {text:'#include <maths.h>', reason:'The standard math header is `<math.h>`, not `<maths.h>`.'}], indent: 0, explanation: "Include standard input/output for printing." },
            { correct: '#include <math.h>', distractors: [{text: '#include "math.h"', reason:'While sometimes permissible, standard library headers are conventionally included using angle brackets `< >`.'}, {text:'#include <float.h>', reason:'`<float.h>` defines properties of floating-point types, but not the `M_PI` constant or math functions like `pow()`.'}], indent: 0, explanation: "Include math library for constants like M_PI and functions like pow()." },
            { correct: '#define PI 3.14159f', distractors: [{text: '#define PI = 3.14159f;', reason:'`#define` is a preprocessor directive; it does not use `=` for assignment or usually end with a semicolon (the semicolon would become part of the replacement).'}, {text:'const float PI = 3.14159f;', reason:'Using `const float` is a more type-safe way to define constants in modern C, but `#define` is also common and widely used, especially in older codebases.'}], indent: 0, explanation: "Define a constant for PI (using 'f' suffix for float literal)." },
            { correct: 'int main() {', distractors: [{text:'float main() {', reason:'The C standard requires `main` to return `int`.'}, {text:'void main() {', reason:'Standard C requires `main` to return `int`. `void main` is non-standard.'}], indent: 0, explanation: "Start the main function." },
            { correct: 'float radius = 5.0f;', distractors: [{text: 'int radius = 5;', reason:'For calculations potentially involving decimals (like area with PI), using `float` or `double` provides more accurate results.'}, {text:'float radius = 5.0;', reason:'Appending `f` (e.g., `5.0f`) explicitly marks the literal as a `float`, avoiding potential implicit conversions from `double` if `5.0` were treated as `double` by default.'}], indent: 1, explanation: "Declare a float variable 'radius' and initialize it." },
            { correct: 'float area;', distractors: [{text: 'area = 0.0f;', reason:'Declaring the variable (`float area;`) must happen before assigning a value to it.'}, {text:'float area()', reason:'This syntax resembles a function declaration (`float area() { ... }`), not a variable declaration.'}], indent: 1, explanation: "Declare a float variable 'area' to store the result." },
            { correct: 'area = PI * radius * radius;', distractors: [{text: 'area = PI * (radius^2);', reason:'The `^` operator in C is the bitwise XOR operator, not exponentiation. Use `radius * radius` or `pow(radius, 2.0f)` from `<math.h>`.'}, {text:'area = PI * pow(radius, 2);', reason:'Using `pow()` from `<math.h>` is also correct (though `pow` typically takes `double` arguments, `radius` would be promoted). `radius * radius` is simpler for squaring.'}], indent: 1, explanation: "Calculate the area using the formula (PI * r^2)." },
            { correct: 'printf("Area: %.2f\\n", area);', distractors: [{text: 'printf("Area: %d\\n", area);', reason:'`%d` is the format specifier for integers. For floats, use `%f`. `%.2f` specifically formats it to 2 decimal places.'}, {text: 'printf("Area: %f.2\\n", area);', reason:'Format specifiers for precision come *before* the type character, like `%.2f`, not after (`%f.2`).'}], indent: 1, explanation: "Print the calculated area, formatted to 2 decimal places (%.2f)." },
            { correct: 'return 0;', distractors: [{text:'return area;', reason:'`main` should return 0 for success, not the calculated area value (unless intended as a specific exit code).'}, {text:'exit(0);', reason:'`return 0;` is the standard and preferred way to indicate success from `main`, allowing normal cleanup. `exit(0)` terminates immediately.'}], indent: 1, explanation: "Indicate successful execution." },
            { correct: '}', distractors: [{text:'end;', reason:'`end` is not a C keyword.'}, {text:'});', reason:'Parentheses and semicolons mark the end of statements or expressions, not code blocks.'}], indent: 0, explanation: "Close the main function." }
        ]
    },
    // Level 6: Read Character and Print ASCII
    {
        goal: "Read a single character and print its ASCII value.",
        concepts: "char data type, getchar, printf (%c, %d)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [{text:'#include <char.h>', reason:'Character I/O functions like `getchar` and `printf` format specifiers are in `stdio.h`.'}, {text:'using namespace std;', reason:'This is C++ syntax for accessing the standard namespace, not used in standard C.'}], indent: 0, explanation: "Include standard input/output library." },
            { correct: 'int main() {', distractors: [{text:'int main(void) {', reason:'Both `int main()` and `int main(void)` are valid ways to declare main with no arguments in standard C.'}, {text:'char main() {', reason:'`main` must return `int`.'}], indent: 0, explanation: "Start the main function." },
            { correct: 'char inputChar;', distractors: [{text:'string inputChar;', reason:'C does not have a built-in `string` type. Use `char` for single characters.'}, {text:'character inputChar;', reason:'The keyword for the character data type in C is `char`.'}], indent: 1, explanation: "Declare a character variable." },
            { correct: 'printf("Enter a character: ");', distractors: [{text:'puts("Enter a character: ");', reason:'`puts` also prints strings but automatically adds a newline. `printf` offers more formatting control and doesn\'t add a newline unless specified (`\\n`).'}, {text:'cout << "Enter a character: ";', reason:'`cout` is the C++ standard output stream object.'}], indent: 1, explanation: "Prompt the user." },
            { correct: 'inputChar = getchar();', distractors: [{text: 'getchar(&inputChar);', reason:'`getchar()` takes no arguments; it reads a character from standard input and *returns* its value, which should be assigned.'}, {text:'scanf("%c", &inputChar);', reason:'While `scanf("%c", &inputChar)` also works, `getchar()` is specifically designed for reading just one character simply.'}], indent: 1, explanation: "Read a single character from the input stream." },
            { correct: 'printf("Character: %c\\n", inputChar);', distractors: [{text: 'printf("Character: %s\\n", &inputChar);', reason:'`%s` expects a pointer to a null-terminated string. `%c` prints the single character value held by `inputChar`.'}, {text:'printf(inputChar);', reason:'`printf` requires a format string as the first argument.'}], indent: 1, explanation: "Print the character entered using the %c format specifier." },
            { correct: 'printf("ASCII Value: %d\\n", inputChar);', distractors: [{text: 'printf("ASCII Value: %c\\n", inputChar);', reason:'Using `%c` would print the character itself again. Using `%d` treats the `char` as its underlying integer ASCII value for printing.'}, {text:'printf("ASCII Value: %u\\n", inputChar);', reason:'While ASCII values are often positive, using `%d` (signed integer) is common practice. `%u` (unsigned) would also work for standard ASCII.'}], indent: 1, explanation: "Print the integer ASCII value of the character using the %d format specifier." },
            { correct: 'return 0;', distractors: [{text:'return inputChar;', reason:'Return 0 to indicate success.'}, {text:'return (int)inputChar;', reason:'Return 0 to indicate success, not the character\'s value.'}], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [{text:'};', reason:'Semicolon not used after function closing brace.'}], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 7: Even or Odd Check
    {
        goal: "Check if a number is even or odd.",
        concepts: "if-else statement, modulo operator (%)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [{text:'import stdio', reason:'C uses `#include <header.h>` preprocessor directive, not `import`.'}], indent: 0, explanation: "Include standard I/O." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main function." },
            { correct: 'int number = 7;', distractors: [{text:'float number = 7.0f;', reason:'The modulo operator `%` typically works with integers. Using `int` is standard for even/odd checks.'}, {text:'int number == 7;', reason:'`==` is for comparison. Use `=` for assignment during initialization.'}], indent: 1, explanation: "Declare and initialize an integer variable." },
            { correct: 'if (number % 2 == 0) {', distractors: [{text: 'if (number % 2 = 0) {', reason:'`=` is the assignment operator. `==` is the equality comparison operator, needed here to check if the remainder is zero.'}, {text:'if (number / 2 * 2 == number) {', reason:'While this logic works for positive integers, using the modulo operator `number % 2 == 0` is the direct and standard way to check for evenness.'}], indent: 1, explanation: "Check if the remainder when divided by 2 is equal to 0." },
            { correct: 'printf("%d is even.\\n", number);', distractors: [{text:'printf("Number is even.\\n");', reason:'Including `%d` and `number` makes the output more informative, showing which number was checked.'}], indent: 2, explanation: "Print if the number is even." },
            { correct: '} else {', distractors: [{text: '} if else {', reason:'The correct syntax is simply `} else {`.'}, {text: '} else (number % 2 != 0) {', reason:'The `else` block automatically handles all cases where the preceding `if` (and any `else if`) conditions were false; no condition is needed or allowed after `else`.'}], indent: 1, explanation: "Start the block for when the 'if' condition is false." },
            { correct: 'printf("%d is odd.\\n", number);', distractors: [{text:'printf("Number is odd.\\n");', reason:'Including `%d` and `number` is more informative.'}], indent: 2, explanation: "Print if the number is odd." },
            { correct: '}', distractors: [{text:'end if;', reason:'C uses `}` to close blocks.'}, {text:'};', reason:'Semicolon not used after code block closing brace.'}], indent: 1, explanation: "Close the else block." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 8: Countdown with While Loop
    {
        goal: "Print numbers from 10 down to 1 using a while loop.",
        concepts: "while loop, decrement operator (--)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main function." },
            { correct: 'int counter = 10;', distractors: [{text:'int counter;', reason:'The counter needs an initial value (10) before the loop condition `counter >= 1` is checked.'}, {text:'int counter = 11;', reason:'Starting at 11 and using `--counter` inside the loop would work, but initializing directly to 10 is simpler.'}], indent: 1, explanation: "Initialize a counter variable to 10." },
            { correct: 'while (counter >= 1) {', distractors: [{text: 'while counter >= 1 {', reason:'The condition in a `while` loop must be enclosed in parentheses `()`. '}, {text:'while (counter > 0) {', reason:'Using `> 0` is equivalent to `>= 1` for integers and also correct.'}], indent: 1, explanation: "Start a loop that continues as long as 'counter' is greater than or equal to 1." },
            { correct: 'printf("%d ", counter);', distractors: [{text:'printf(counter);', reason:'`printf` requires a format string like `"%d "`.'}, {text:'printf("%d\\n", counter);', reason:'Using `\\n` prints each number on a new line. Using a space `" "` prints them on the same line as requested.'}], indent: 2, explanation: "Print the current value of the counter." },
            { correct: 'counter--;', distractors: [{text: 'counter ++;', reason:'`++` increments the counter. `--` is needed to decrement (count down).'}, {text:'--counter;', reason:'Both pre-decrement (`--counter`) and post-decrement (`counter--`) work here as standalone statements.'}], indent: 2, explanation: "Decrement the counter by 1." },
            { correct: '}', distractors: [{text:'end while;', reason:'C uses `}` to close loops.'}, {text:'break;', reason:'`break` would exit the loop prematurely after the first iteration.'}], indent: 1, explanation: "Close the while loop block." },
            { correct: 'printf("\\n"); // Print a final newline', distractors: [{text:'println();', reason:'`println` is not a standard C function.'}, {text: 'printf(\'\\n\');', reason: '`printf` expects a string literal (double quotes \" \") for the format string, not a character literal (single quotes \' \').'}], indent: 1, explanation: "Print a newline character for cleaner output after the loop." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 9: Input Validation with Do-While
    {
        goal: "Ask the user to enter a positive number, repeat until they do.",
        concepts: "do-while loop, scanf",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main function." },
            { correct: 'int number;', distractors: [{text:'int number = 0;', reason:'Initializing is fine, but the loop guarantees execution at least once, so `scanf` will assign a value before the condition `number <= 0` is checked.'}], indent: 1, explanation: "Declare an integer variable to store user input." },
            { correct: 'do {', distractors: [{text: 'while (number <= 0) {', reason:'A `while` loop checks the condition *before* the first iteration. A `do-while` loop executes the body *at least once* before checking, which is needed here to get input first.'}, {text:'for (;;) { // Infinite loop', reason:'An infinite `for` loop would require an `if` and `break` inside, making `do-while` more suitable for this condition.'}], indent: 1, explanation: "Start a do-while loop, which executes the body at least once." },
            { correct: 'printf("Enter a positive number: ");', distractors: [], indent: 2, explanation: "Prompt the user for input inside the loop." },
            { correct: 'scanf("%d", &number);', distractors: [{text:'scanf("%d", number);', reason:'`scanf` requires the address (`&`) of the variable to store the input.'}, {text:'number = getchar();', reason:'`getchar` reads a single character, not a potentially multi-digit integer. Use `scanf` with `%d`.'}], indent: 2, explanation: "Read the integer input from the user." },
            { correct: '} while (number <= 0);', distractors: [{text: '} while number <= 0;', reason:'The condition must be enclosed in parentheses `()`. '}, {text:'} while (number < 1);', reason:'This condition is equivalent to `number <= 0` for integers and also correct.'}], indent: 1, explanation: "End the loop body and check the condition. Repeat if the number is not positive (<= 0)." },
            { correct: 'printf("Thank you! You entered: %d\\n", number);', distractors: [{text:'printf("Positive number entered.\\n");', reason:'Printing the actual number entered is more informative.'}], indent: 1, explanation: "Print the valid positive number entered." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 10: Void Function
    {
        goal: "Define a function to print a greeting and call it from main.",
        concepts: "Function definition, function call, void return type",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: '// Function declaration (prototype)', distractors: [{text:'// Function definition', reason:'This is just the declaration (prototype), announcing the function\'s signature. The definition (implementation) comes later.'}], indent: 0, explanation: "Comment explaining the next line (prototype)." },
            { correct: 'void printGreeting(void);', distractors: [{text:'int printGreeting();', reason:'The function doesn\'t calculate or return a value, so `void` is the appropriate return type.'}, {text:'void printGreeting();', reason:'Specifying `(void)` for no parameters is explicit and preferred in C over empty parentheses `()` in declarations.'}], indent: 0, explanation: "Declare the function: returns nothing (void), takes no arguments (void)." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start the main function." },
            { correct: 'printGreeting();', distractors: [{text: 'call printGreeting();', reason:'Function calls in C are done using just the function name followed by parentheses `()`. `call` is not a C keyword.'}, {text:'int result = printGreeting();', reason:'A `void` function doesn\'t return a value that can be assigned to `result`.'}], indent: 1, explanation: "Call the defined function to execute its code." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate successful execution of main." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close the main function." },
            { correct: '// Function definition', distractors: [{text:'// Function call', reason:'This marks the implementation (definition) of the function.'}], indent: 0, explanation: "Comment indicating the function's implementation." },
            { correct: 'void printGreeting(void) {', distractors: [{text:'int printGreeting(void) {', reason:'The definition must match the return type (`void`) specified in the declaration.'}, {text:'void printGreeting() {', reason:'While sometimes allowed, matching the explicit `(void)` from the prototype in the definition is good practice.'}], indent: 0, explanation: "Define the function, matching the declaration." },
            { correct: 'printf("Hello from the function!\\n");', distractors: [{text:'puts("Hello from the function!");', reason:'`puts` works but adds its own newline. `printf` requires `\\n` explicitly.'}], indent: 1, explanation: "The action performed by the function: printing a message." },
            { correct: '}', distractors: [{text:'return;', reason:'Explicit `return;` is optional at the end of a `void` function; the closing brace `}` implies it.'}, {text:'};', reason:'Semicolon not needed after function closing brace.'}], indent: 0, explanation: "Close the printGreeting function block." }
        ]
    },
    // Level 11: Function with Parameter
    {
        goal: "Define a function that takes an integer and prints it.",
        concepts: "Functions with parameters, passing arguments",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'void printNumber(int num);', distractors: [{text:'void printNumber(int);', reason:'While omitting the parameter name is allowed in declarations (prototypes), including it (`num`) makes it clearer what the function expects.'}, {text:'int printNumber(int num);', reason:'This function only prints, it doesn\'t calculate or return an integer value, so `void` return type is appropriate.'}], indent: 0, explanation: "Declare a function that takes one integer argument." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start the main function." },
            { correct: 'int myValue = 42;', distractors: [], indent: 1, explanation: "Declare a variable in main." },
            { correct: 'printNumber(myValue);', distractors: [{text: 'printNumber(int myValue);', reason:'When calling a function, you pass the variable (argument) directly, not its type declaration.'}, {text:'myValue.printNumber();', reason:'C uses procedural function calls `functionName(argument)`, not object-oriented method calls like `variable.method()`.'}], indent: 1, explanation: "Call the function, passing the value of 'myValue' as the argument." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." },
            { correct: 'void printNumber(int num) {', distractors: [{text:'void printNumber(value) {', reason:'The parameter declaration in the function definition requires a type (`int`) before the name (`num`).'}, {text:'void printNumber(int &num) {', reason:'This syntax `int &num` declares a reference parameter, which is a C++ feature, not standard C. C uses pointers (`int *num`) to achieve pass-by-reference behavior.'}], indent: 0, explanation: "Define the function, specifying the parameter type and name." },
            { correct: 'printf("The number passed is: %d\\n", num);', distractors: [{text:'printf("The number passed is: %d\\n", myValue);', reason:'Inside `printNumber`, the passed value is accessed using the parameter name `num`. `myValue` only exists within the scope of `main`.'}, {text:'printf("The number passed is: " + num);', reason:'String concatenation with `+` is not standard C for `printf`. Use format specifiers like `%d`.'}], indent: 1, explanation: "Print the value of the parameter 'num' received by the function." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close the printNumber function." }
        ]
    },
    // Level 12: Function Returning Value
    {
        goal: "Define a function that squares a number and returns the result.",
        concepts: "Functions returning values, return statement",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'int square(int x);', distractors: [{text:'void square(int x);', reason:'The function needs to return the calculated square (an integer), so the return type must be `int`, not `void`.'}, {text:'function int square(int x);', reason:'C does not use the `function` keyword.'}], indent: 0, explanation: "Declare a function 'square' that takes an int and returns an int." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'int number = 5;', distractors: [], indent: 1, explanation: "Declare a number to be squared." },
            { correct: 'int result;', distractors: [{text:'var result;', reason:'C requires explicit type declaration like `int`.'}], indent: 1, explanation: "Declare a variable to store the function's return value." },
            { correct: 'result = square(number);', distractors: [{text: 'square(number);', reason:'The `square` function returns a value. You need to capture this returned value by assigning it to a variable (like `result = ...`) to use it.'}, {text:'result = square(&number);', reason:'The `square` function expects an integer value (`int x`), not a pointer to an integer (`int *x`). Pass `number` directly.'}], indent: 1, explanation: "Call the 'square' function and assign its return value to 'result'." },
            { correct: 'printf("%d squared is %d\\n", number, result);', distractors: [{text:'printf(result);', reason:'`printf` needs a format string.'}, {text:'printf("Square is %d\\n", result);', reason:'Including the original number makes the output clearer.'}], indent: 1, explanation: "Print the original number and the calculated result." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." },
            { correct: 'int square(int x) {', distractors: [{text:'void square(int x) {', reason:'Definition must match the declared return type (`int`).'}, {text:'int square(int& x) {', reason:'C uses pointers (`int *x`) for pass-by-reference effects, not C++ reference syntax (`int&`).'}], indent: 0, explanation: "Define the 'square' function." },
            { correct: 'int calculation = x * x;', distractors: [{text:'int calculation = pow(x, 2);', reason:'Using `pow()` requires `#include <math.h>` and is slightly less efficient for simple squaring than `x * x`.'}, {text:'calculation = x * x;', reason:'The variable `calculation` must be declared (`int calculation`) before being assigned a value.'}], indent: 1, explanation: "Calculate the square." },
            { correct: 'return calculation;', distractors: [{text: 'return;', reason:'The function is declared to return `int`, so it must return an integer value. `return;` alone is only for `void` functions.'}, {text:'printf("%d", calculation); return 0;', reason:'The function\'s primary purpose is to *return* the calculated value. Printing should ideally be done by the caller (`main`).'}], indent: 1, explanation: "Return the calculated value from the function." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close the square function." }
        ]
    },
    // Level 13: Array Basics
    {
        goal: "Create an integer array, initialize it, and print the third element.",
        concepts: "Array declaration, array initialization, array indexing (0-based)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main function." },
            { correct: 'int scores[5] = {88, 92, 75, 100, 95};', distractors: [{text: 'int scores = {88, 92, 75, 100, 95};', reason:'You must specify the array size (e.g., `[5]`) or use empty brackets (`[]`) to let the compiler deduce it from the initializer list.'}, {text:'int scores(5) = {88, 92, 75, 100, 95};', reason:'Array size is specified using square brackets `[]`, not parentheses `()`.'}], indent: 1, explanation: "Declare an integer array named 'scores' of size 5 and initialize it with values." },
            { correct: 'int thirdScore;', distractors: [{text:'int scores[2];', reason:'This declares another array, not a variable to hold a single score.'}], indent: 1, explanation: "Declare a variable to hold the specific score." },
            { correct: 'thirdScore = scores[2];', distractors: [{text: 'thirdScore = scores[3];', reason:'Array indexing in C is 0-based. The third element is at index 2 (0, 1, 2). Index 3 refers to the fourth element.'}, {text:'thirdScore = scores.get(2);', reason:'C arrays do not have methods like `.get()`. Access elements using square bracket notation `scores[index]`.'}], indent: 1, explanation: "Access the third element (at index 2) of the array and store it." },
            { correct: 'printf("The third score is: %d\\n", thirdScore);', distractors: [{text:'printf("The third score is: %d\\n", scores);', reason:'Passing the array name `scores` usually decays to a pointer to the first element. `printf` with `%d` expects an integer value, not an address.'}, {text:'printf(thirdScore);', reason:'`printf` requires a format string.'}], indent: 1, explanation: "Print the value retrieved from the array." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 14: Array Iteration
    {
        goal: "Iterate through an array using a for loop and print all elements.",
        concepts: "Arrays, for loop, array indexing",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main function." },
            { correct: 'int values[4] = {10, 20, 30, 40};', distractors: [{text:'int values[]; values = {10, 20, 30, 40};', reason:'Assignment using `{}` after declaration is not allowed for arrays.'}, {text:'int values[4] = (10, 20, 30, 40);', reason:'Array initialization uses curly braces `{}`, not parentheses `()`.'}], indent: 1, explanation: "Declare and initialize an integer array." },
            { correct: 'int i;', distractors: [{text:'i = 0;', reason:'Declare the variable `int i;` before using it.'}], indent: 1, explanation: "Declare a loop counter variable." },
            { correct: 'printf("Array elements: ");', distractors: [], indent: 1, explanation: "Print a label before the elements." },
            { correct: 'for (i = 0; i < 4; i++) {', distractors: [{text: 'for (i = 0; i <= 4; i++) {', reason:'Array indices for size 4 are 0, 1, 2, 3. Using `<=` would attempt to access `values[4]`, which is out of bounds.'}, {text:'for (i = 1; i <= 4; i++) {', reason:'Array indexing starts at 0, so the loop should start at 0 to include the first element.'}], indent: 1, explanation: "Start a for loop to iterate from index 0 up to (but not including) 4." },
            { correct: 'printf("%d ", values[i]);', distractors: [{text: 'printf("%d ", &values[i]);', reason:'`&values[i]` gives the address of the element. Pass `values[i]` directly to print the value.'}, {text:'printf(values[i]);', reason:'`printf` requires a format string like `"%d "`.'}], indent: 2, explanation: "Inside the loop, print the element at the current index 'i'." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close the for loop block." },
            { correct: 'printf("\\n");', distractors: [{text:'puts("");', reason:'`puts("")` also prints a newline and is valid here.'}, {text:'return 1; // Error', reason:'This implies an error. The goal is just to print a newline for formatting before a successful exit.'}], indent: 1, explanation: "Print a final newline for formatting." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 15: Array Size with sizeof
    {
        goal: "Calculate the number of elements in an array using sizeof.",
        concepts: "sizeof operator, arrays, integer division",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main function." },
            { correct: 'int data[] = {5, 10, 15, 20, 25, 30}; // Size inferred', distractors: [{text:'int data[6] = {5, 10, 15, 20, 25, 30};', reason:'Explicit size is fine, but letting the compiler infer size `[]` from the initializer is also common and adaptable.'}, {text:'int data[]; data = {5, 10, 15, 20, 25, 30};', reason:'Array assignment after declaration isn\'t allowed this way.'}], indent: 1, explanation: "Declare and initialize an array, letting the compiler determine its size." },
            { correct: 'int size;', distractors: [{text:'float size;', reason:'The number of elements (size) should be an integer.'}, {text:'size_t size;', reason:'`size_t` is the type technically returned by `sizeof` and is appropriate for sizes, but `int` is often used for simplicity here.'}], indent: 1, explanation: "Declare a variable to store the array size." },
            { correct: 'size = sizeof(data) / sizeof(data[0]);', distractors: [{text: 'size = sizeof(data);', reason:'`sizeof(data)` gives the total size of the array in *bytes*, not the number of elements.'}, {text:'size = sizeof(data) / sizeof(int*);', reason:'`sizeof(int*)` gives the size of a pointer to an integer, not the size of an integer element itself. Use `sizeof(data[0])` or `sizeof(int)`.'}], indent: 1, explanation: "Calculate size: total bytes of array divided by bytes of one element." },
            { correct: 'printf("Number of elements: %d\\n", size);', distractors: [{text:'printf("Size in bytes: %d\\n", sizeof(data));', reason:'This would print the total byte size, not the element count.'}], indent: 1, explanation: "Print the calculated number of elements." },
            { correct: '// Now loop using the calculated size', distractors: [], indent: 1, explanation: "Comment indicating the next step." },
            { correct: 'for (int i = 0; i < size; i++) {', distractors: [{text:'for (int i = 0; i < 6; i++) {', reason:'Using the calculated `size` variable makes the loop automatically adapt if the array initialization changes. Hardcoding `6` is less flexible.'}, {text:'for (int i = 0; i <= size; i++) {', reason:'Loop must be `< size` as indices go from 0 to size-1.'}], indent: 1, explanation: "Use the calculated 'size' in the loop condition." },
            { correct: 'printf("%d ", data[i]);', distractors: [{text:'printf("%d ", i);', reason:'This prints the index, not the array value.'}], indent: 2, explanation: "Print each element." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close the loop." },
            { correct: 'printf("\\n");', distractors: [], indent: 1, explanation: "Final newline." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 16: Pointer Basics
    {
        goal: "Declare a pointer, initialize it to NULL, assign an address later, and check for NULL.",
        concepts: "Pointers, NULL, address-of operator (&), dereference operator (*), if statement",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: '#include <stdlib.h> // For NULL (though often in stdio.h too)', distractors: [{text:'#include <pointers.h>', reason:'There is no standard `<pointers.h>`. NULL is typically defined in `<stdlib.h>`, `<stdio.h>`, `<stddef.h>` and others.'}], indent: 0, explanation: "Include stdlib.h, commonly containing the NULL definition." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'int number = 50;', distractors: [], indent: 1, explanation: "Declare a regular integer variable." },
            { correct: 'int *ptr = NULL;', distractors: [{text:'int *ptr;', reason:'Initializing pointers to `NULL` when declared is good practice if they aren\'t immediately assigned a valid address.'}, {text:'int *ptr = 0;', reason:'Assigning `0` is often equivalent to assigning `NULL`, but using the `NULL` macro is more explicit and standard.'}], indent: 1, explanation: "Declare an integer pointer and initialize it to NULL." },
            { correct: 'printf("Initial ptr value: %p\\n", ptr);', distractors: [], indent: 1, explanation: "Show that the pointer initially holds the NULL address (often printed as 0 or (nil))." },
            { correct: '// Assign address later', distractors: [], indent: 1, explanation: "Comment indicating address assignment." },
            { correct: 'ptr = &number;', distractors: [], indent: 1, explanation: "Assign the memory address of 'number' to the pointer 'ptr'." },
            { correct: 'printf("Ptr value after assignment: %p\\n", ptr);', distractors: [], indent: 1, explanation: "Show the non-NULL address now stored in ptr." },
            { correct: 'if (ptr != NULL) {', distractors: [{text:'if (ptr)', reason:'While checking `if (ptr)` works because NULL evaluates to false in a boolean context, explicitly comparing `ptr != NULL` is clearer.'}, {text:'if (*ptr != NULL)', reason:'`*ptr` accesses the *value* (50). We want to check if the *pointer itself* (`ptr`) is NULL before dereferencing it.'}], indent: 1, explanation: "Check if the pointer is NOT NULL before trying to use it." },
            { correct: 'printf("Value via pointer: %d\\n", *ptr);', distractors: [], indent: 2, explanation: "Safely print the value only if the pointer is not NULL." },
            { correct: '} else {', distractors: [], indent: 1, explanation: "Block for when the pointer is NULL." },
            { correct: 'printf("Pointer is NULL, cannot dereference.\\n");', distractors: [], indent: 2, explanation: "Message indicating the pointer is NULL." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close the if/else block." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 17: Pointers and Arrays
    {
        goal: "Demonstrate accessing array elements using both array[index] and *(array + index) notation.",
        concepts: "Pointers, arrays, pointer arithmetic, dereference operator (*), equivalence",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'int nums[] = {11, 22, 33, 44};', distractors: [], indent: 1, explanation: "Declare and initialize an integer array." },
            { correct: 'int *ptr = nums; // Point ptr to the start of the array', distractors: [], indent: 1, explanation: "Declare a pointer and make it point to the first element of nums." },
            { correct: 'printf("Accessing elements for nums[]:\\n");', distractors: [], indent: 1, explanation: "Print a header." },
            { correct: 'printf("Element 0: nums[0]=%d, *(nums+0)=%d\\n", nums[0], *(nums + 0));', distractors: [{text:'printf("Element 0: nums[0]=%d, *nums+0=%d\\n", nums[0], *nums + 0);', reason:'`*nums + 0` dereferences `nums` first (gets 11) then adds 0. `*(nums + 0)` calculates the address first, then dereferences.'}], indent: 1, explanation: "Show accessing the first element using both notations with the array name." },
            { correct: 'printf("Element 1: nums[1]=%d, *(nums+1)=%d\\n", nums[1], *(nums + 1));', distractors: [], indent: 1, explanation: "Show accessing the second element using both notations." },
            { correct: 'printf("\\nAccessing elements via ptr:\\n");', distractors: [], indent: 1, explanation: "Print another header for pointer access." },
            { correct: 'printf("Element 0: ptr[0]=%d, *(ptr+0)=%d\\n", ptr[0], *(ptr + 0));', distractors: [{text:'printf("Element 0: ptr[0]=%d, *ptr[0]=%d\\n", ptr[0], *ptr[0]);', reason:'`*ptr[0]` is parsed as `*(ptr[0])` which is invalid here. Use `ptr[0]` or `*(ptr+0)`.'}], indent: 1, explanation: "Show accessing the first element using both notations via the pointer." },
            { correct: 'printf("Element 2: ptr[2]=%d, *(ptr+2)=%d\\n", ptr[2], *(ptr + 2));', distractors: [], indent: 1, explanation: "Show accessing the third element using both notations via the pointer." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 18: String Literal vs Char Array
    {
        goal: "Illustrate the difference between a string literal (often read-only) and a modifiable char array.",
        concepts: "String literals, char arrays, pointers, memory segments (conceptual)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'char *strLiteral = "Immutable"; // Pointer to string literal', distractors: [{text:'char strLiteral[] = "Immutable";', reason:'This creates a modifiable array initialized with the string. The goal here is to show a pointer to a literal.'}], indent: 1, explanation: "Declare a pointer initialized to point to a string literal (often in read-only memory)." },
            { correct: 'char charArray[] = "Modifiable"; // Modifiable char array', distractors: [{text:'char *charArray = {"Modifiable"};', reason:'This syntax is incorrect for initializing a pointer to a character array content. You would need `char *charArray = "Modifiable";` for a pointer to a literal, or `char charArray[]` for a modifiable array.'}], indent: 1, explanation: "Declare a character array initialized with a string literal (creating a copy in writable memory)." },
            { correct: 'printf("String Literal: %s\\n", strLiteral);', distractors: [], indent: 1, explanation: "Print the string literal." },
            { correct: 'printf("Character Array: %s\\n", charArray);', distractors: [], indent: 1, explanation: "Print the character array." },
            { correct: '// Attempt to modify first character', distractors: [], indent: 1, explanation: "Comment explaining the next actions." },
            { correct: 'charArray[0] = \'X\'; // OK - Modifying the array', distractors: [{text:'strLiteral[0] = \'X\';', reason:'Attempting to modify a string literal through a pointer results in undefined behavior (often a crash) because the literal may be stored in read-only memory.'}], indent: 1, explanation: "Modify the first character of the character array (this is allowed)." },
            { correct: 'printf("Modified Array: %s\\n", charArray);', distractors: [], indent: 1, explanation: "Show the modification was successful." },
            { correct: '// strLiteral[0] = \'Y\'; // <-- This would likely cause a runtime error!', distractors: [{text:'strLiteral = "New"; // OK - Changing where pointer points', reason:'Assigning a new string literal changes the pointer, but doesn\'t modify the original "Immutable" literal.'}], indent: 1, explanation: "Comment illustrating the danger of modifying a string literal." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 19: Struct Initialization
    {
        goal: "Initialize a struct variable using an initializer list.",
        concepts: "Structs, initialization lists",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'struct Point { int x; int y; };', distractors: [], indent: 0, explanation: "Define a simple Point structure." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'struct Point p1 = {15, 25};', distractors: [{text:'struct Point p1;', reason:'This only declares p1; the goal is to initialize during declaration.'}, {text:'struct Point p1 = (15, 25);', reason:'Struct initialization uses curly braces `{}`, not parentheses `()`.'}], indent: 1, explanation: "Declare and initialize struct variable p1 using an initializer list {value_for_x, value_for_y}." },
            { correct: 'printf("p1 coordinates: (%d, %d)\\n", p1.x, p1.y);', distractors: [], indent: 1, explanation: "Print the members of the initialized struct." },
            { correct: '// Designated initializers (C99 and later)', distractors: [], indent: 1, explanation: "Comment introducing designated initializers." },
            { correct: 'struct Point p2 = {.y = 50, .x = 30}; // Order doesn\'t matter', distractors: [{text:'struct Point p2 = {y: 50, x: 30};', reason:'Designated initializers use a dot (`.`) before the member name (`.y`, `.x`), not a colon.'}, {text:'struct Point p2 = {50, 30};', reason:'Without designated initializers, values are assigned in order (x=50, y=30). Designated initializers allow explicit assignment by name.'}], indent: 1, explanation: "Initialize p2 using designated initializers (explicitly naming members)." },
            { correct: 'printf("p2 coordinates: (%d, %d)\\n", p2.x, p2.y);', distractors: [], indent: 1, explanation: "Print the members of p2." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 20: Pass Struct by Value
    {
        goal: "Pass a struct to a function by value and print its members inside the function.",
        concepts: "Structs, functions, pass-by-value",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'struct Item { int id; float price; };', distractors: [], indent: 0, explanation: "Define an Item structure." },
            { correct: 'void displayItem(struct Item it); // Function takes struct by value', distractors: [{text:'void displayItem(struct Item *it);', reason:'`struct Item *it` would mean passing a pointer (pass-by-reference effect). `struct Item it` means passing a copy (pass-by-value).'}], indent: 0, explanation: "Declare function displayItem that takes a struct Item by value (a copy)." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'struct Item item1 = {101, 19.99f};', distractors: [], indent: 1, explanation: "Declare and initialize an Item struct." },
            { correct: 'displayItem(item1);', distractors: [{text:'displayItem(&item1);', reason:'The function expects a `struct Item`, not a pointer `struct Item *`. Pass `item1` directly to send a copy.'}], indent: 1, explanation: "Call displayItem, passing the item1 struct (a copy will be made)." },
            { correct: 'printf("item1 price in main after call: %.2f\\n", item1.price);', distractors: [], indent: 1, explanation: "Show that the original item1 in main is unaffected by changes inside the function (if any)." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." },
            { correct: 'void displayItem(struct Item it) {', distractors: [], indent: 0, explanation: "Define displayItem, taking a copy of the struct named 'it'." },
            { correct: 'printf("-- Inside Function --\\n");', distractors: [], indent: 1, explanation: "Indicate output is from within the function." },
            { correct: 'printf("Item ID: %d\\n", it.id);', distractors: [], indent: 1, explanation: "Print the id member of the received struct copy 'it'." },
            { correct: 'printf("Item Price: %.2f\\n", it.price);', distractors: [], indent: 1, explanation: "Print the price member of 'it'." },
            { correct: 'it.price = 0.0f; // Modify the copy', distractors: [], indent: 1, explanation: "Modify the price of the local copy 'it' within the function." },
            { correct: 'printf("Price inside function modified to: %.2f\\n", it.price);', distractors: [], indent: 1, explanation: "Show the modified price of the copy." },
            { correct: 'printf("-- Leaving Function --\\n");', distractors: [], indent: 1, explanation: "Indicate end of function execution." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close displayItem function. The copy 'it' is destroyed." }
        ]
    },
    // Level 21: Pass Struct by Pointer
    {
        goal: "Pass a pointer to a struct to a function to modify the original struct.",
        concepts: "Structs, pointers, functions, pass-by-reference (using pointers), arrow operator (->)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O." },
            { correct: 'struct Config { int settingA; char mode; };', distractors: [], indent: 0, explanation: "Define a Config structure." },
            { correct: 'void updateConfig(struct Config *confPtr); // Takes pointer', distractors: [{text:'void updateConfig(struct Config conf);', reason:'Passing by value (`struct Config conf`) sends a copy; modifications inside wouldn\'t affect the original.'}], indent: 0, explanation: "Declare function updateConfig taking a POINTER to a struct Config." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'struct Config currentConfig = { 1, \'A\' };', distractors: [], indent: 1, explanation: "Declare and initialize a Config struct." },
            { correct: 'printf("Before call: SettingA=%d, Mode=%c\\n", currentConfig.settingA, currentConfig.mode);', distractors: [], indent: 1, explanation: "Print initial values." },
            { correct: 'updateConfig(&currentConfig);', distractors: [{text:'updateConfig(currentConfig);', reason:'The function expects a pointer (`struct Config *`). Pass the address (`&`) of `currentConfig`.'}], indent: 1, explanation: "Call updateConfig, passing the ADDRESS of currentConfig." },
            { correct: 'printf("After call: SettingA=%d, Mode=%c\\n", currentConfig.settingA, currentConfig.mode);', distractors: [], indent: 1, explanation: "Print values again to show they were modified by the function." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." },
            { correct: 'void updateConfig(struct Config *confPtr) { // Receives pointer', distractors: [], indent: 0, explanation: "Define updateConfig, receiving a pointer named 'confPtr'." },
            { correct: 'printf("-- Inside updateConfig --\\n");', distractors: [], indent: 1, explanation: "Indicate execution within the function." },
            { correct: 'confPtr->settingA = 99;', distractors: [{text:'confPtr.settingA = 99;', reason:'`confPtr` is a pointer; use the arrow operator `->` to access members via the pointer.'}, {text:'*confPtr.settingA = 99;', reason:'Operator precedence is wrong; use `(*confPtr).settingA` or preferably `confPtr->settingA`.'}], indent: 1, explanation: "Modify the settingA member of the ORIGINAL struct via the pointer." },
            { correct: 'confPtr->mode = \'Z\';', distractors: [{text:'*confPtr->mode = \'Z\';', reason:'`confPtr->mode` already accesses the member value; no extra `*` is needed.'}], indent: 1, explanation: "Modify the mode member of the ORIGINAL struct via the pointer." },
            { correct: 'printf("Config updated inside function.\\n");', distractors: [], indent: 1, explanation: "Confirmation message." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close updateConfig function." }
        ]
    },
    // Level 22: File Read with fgets
    {
        goal: "Open an existing file ('output.txt'), read lines from it using fgets, and print them.",
        concepts: "File I/O, FILE pointer, fopen, fgets, fclose, file modes (\"r\"), char arrays (buffers)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include standard I/O for file operations and printf." },
            { correct: '// Assumes "output.txt" exists (e.g., from a previous write operation)', distractors: [], indent: 0, explanation: "Comment reminding prerequisite." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'FILE *readFilePtr;', distractors: [], indent: 1, explanation: "Declare a FILE pointer for reading." },
            { correct: 'char lineBuffer[100]; // Buffer to hold one line', distractors: [{text:'char *lineBuffer;', reason:'`fgets` needs a character array (buffer) allocated in memory to store the line it reads. A simple pointer isn\'t enough.'}, {text:'char lineBuffer;', reason:'A single char cannot hold a line of text.'}], indent: 1, explanation: "Declare a character array to act as a buffer for reading lines." },
            { correct: 'readFilePtr = fopen("output.txt", "r");', distractors: [{text:'readFilePtr = fopen("output.txt", "w");', reason:'Mode "w" is for writing (and truncates the file). Mode "r" is needed for reading.'}, {text:'readFilePtr = fopen("input.txt", "r");', reason:'The goal is to read "output.txt". Ensure the filename matches the intended file.'}], indent: 1, explanation: "Open 'output.txt' in read mode ('r')." },
            { correct: 'if (readFilePtr == NULL) {', distractors: [], indent: 1, explanation: "Check if the file failed to open (e.g., doesn't exist)." },
            { correct: 'perror("Error opening file for reading"); return 1;', distractors: [{text:'printf("Error opening file!\\n"); return 1;', reason:'`perror` is useful as it prints the system error message corresponding to why `fopen` failed.'}], indent: 2, explanation: "Print a system error message using perror and exit if file couldn't be opened." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close error check." },
            { correct: 'printf("Contents of output.txt:\\n---\n");', distractors: [], indent: 1, explanation: "Print a header before showing file content." },
            { correct: 'while (fgets(lineBuffer, sizeof(lineBuffer), readFilePtr) != NULL) {', distractors: [{text:'while (!feof(readFilePtr)) {', reason:'Checking `feof` *before* reading can lead to issues. The standard idiom is to check the return value of the read function (`fgets` or `fscanf`) itself. `fgets` returns NULL on end-of-file or error.'}, {text:'fgets(lineBuffer, 100, readFilePtr); while(1) { ... }', reason:'`fgets` should be *inside* the loop condition to read each line and check the return value.'}], indent: 1, explanation: "Loop while fgets successfully reads a line into lineBuffer (returns non-NULL)." },
            { correct: 'printf("%s", lineBuffer); // fgets includes newline', distractors: [{text:'printf("%s\\n", lineBuffer);', reason:'`fgets` reads and stores the newline character (`\\n`) if it fits in the buffer. Adding another `\\n` in `printf` would cause double spacing.'}], indent: 2, explanation: "Print the line read by fgets. It usually includes the newline." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close the while loop." },
            { correct: 'printf("---\\nEnd of file.\\n");', distractors: [], indent: 1, explanation: "Print a footer after reading the file." },
            { correct: 'fclose(readFilePtr);', distractors: [{text:'fclose(lineBuffer);', reason:'`fclose` closes the `FILE` stream pointed to by `readFilePtr`.'}], indent: 1, explanation: "Close the file stream." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 23: Dynamic Memory with calloc
    {
        goal: "Allocate memory for an array of 3 integers using calloc() (initializes to zero) and print them.",
        concepts: "Dynamic memory allocation, calloc, free, sizeof, pointers, initialization to zero",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include for printf." },
            { correct: '#include <stdlib.h>', distractors: [], indent: 0, explanation: "Include stdlib.h for calloc and free." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'int *zeroArray;', distractors: [], indent: 1, explanation: "Declare a pointer for the dynamically allocated array." },
            { correct: 'int count = 3;', distractors: [], indent: 1, explanation: "Define the number of elements needed." },
            { correct: 'zeroArray = (int *)calloc(count, sizeof(int));', distractors: [{text:'zeroArray = (int *)malloc(count * sizeof(int));', reason:'`malloc` allocates memory but doesn\'t initialize it (contains garbage values). `calloc` allocates *and* initializes the memory to zero.'}, {text:'zeroArray = (int *)calloc(sizeof(int), count);', reason:'The arguments for `calloc` are `(number_of_elements, size_of_each_element)`.'}], indent: 1, explanation: "Allocate memory for 'count' integers using calloc (initializes to zero) and cast." },
            { correct: 'if (zeroArray == NULL) {', distractors: [], indent: 1, explanation: "Check if calloc failed." },
            { correct: 'printf("Memory allocation failed!\\n"); return 1;', distractors: [], indent: 2, explanation: "Handle allocation failure." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close error check." },
            { correct: 'printf("Array elements after calloc (should be 0):\\n");', distractors: [], indent: 1, explanation: "Print a header." },
            { correct: 'for (int i = 0; i < count; i++) {', distractors: [], indent: 1, explanation: "Loop through the allocated elements." },
            { correct: 'printf("zeroArray[%d] = %d\\n", i, zeroArray[i]);', distractors: [], indent: 2, explanation: "Print the index and the value (should be 0)." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close the loop." },
            { correct: 'free(zeroArray);', distractors: [{text:'free(&zeroArray);', reason:'`free` needs the pointer (`zeroArray`) that holds the address returned by `calloc`.'}], indent: 1, explanation: "Free the memory allocated by calloc." },
            { correct: 'zeroArray = NULL;', distractors: [], indent: 1, explanation: "Set pointer to NULL after freeing (good practice)." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 24: Dynamic Memory with malloc
    {
        goal: "Allocate memory for an array of 5 floats dynamically using malloc, use it, and free it.",
        concepts: "Dynamic memory allocation, malloc, free, sizeof, pointers, pointer arithmetic/array notation",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include for printf." },
            { correct: '#include <stdlib.h>', distractors: [], indent: 0, explanation: "Include stdlib.h for malloc and free." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'float *dynFloatArray;', distractors: [{text:'float dynFloatArray[5];', reason:'This declares a static array on the stack. We need a pointer for dynamically allocated memory.'}], indent: 1, explanation: "Declare a pointer to float for the dynamic array." },
            { correct: 'int numElements = 5;', distractors: [], indent: 1, explanation: "Define the desired number of elements." },
            { correct: 'dynFloatArray = (float *)malloc(numElements * sizeof(float));', distractors: [{text:'dynFloatArray = (float *)malloc(numElements);', reason:'`malloc` needs total *bytes*. Multiply the number of elements by the size of *each* element (`sizeof(float)`).'}, {text:'dynFloatArray = (float *)malloc(sizeof(float[numElements]));', reason:'While `sizeof(float[numElements])` might work if `numElements` is a compile-time constant, the standard way is `count * sizeof(type)`.'}], indent: 1, explanation: "Allocate memory for 'numElements' floats and cast the result to float*." },
            { correct: 'if (dynFloatArray == NULL) {', distractors: [], indent: 1, explanation: "Check if memory allocation failed." },
            { correct: 'printf("Memory allocation failed!\\n"); return 1;', distractors: [], indent: 2, explanation: "Handle allocation failure." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close error check." },
            { correct: '// Initialize the dynamic array', distractors: [], indent: 1, explanation: "Comment indicating array initialization." },
            { correct: 'for (int i = 0; i < numElements; i++) {', distractors: [], indent: 1, explanation: "Loop through the allocated elements." },
            { correct: 'dynFloatArray[i] = (float)i * 1.1f;', distractors: [{text:'*(dynFloatArray + i) = (float)i * 1.1f;', reason:'Both array notation `dynFloatArray[i]` and pointer arithmetic `*(dynFloatArray + i)` are valid ways to access elements of the dynamically allocated block.'}], indent: 2, explanation: "Assign values using array notation (e.g., 0.0, 1.1, 2.2,...)." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close initialization loop." },
            { correct: 'printf("Dynamic array elements: ");', distractors: [], indent: 1, explanation: "Print a label." },
            { correct: 'for (int i = 0; i < numElements; i++) {', distractors: [], indent: 1, explanation: "Loop again to print the elements." },
            { correct: 'printf("%.1f ", dynFloatArray[i]);', distractors: [], indent: 2, explanation: "Print each element, formatted to one decimal place." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close printing loop." },
            { correct: 'printf("\\n");', distractors: [], indent: 1, explanation: "Final newline." },
            { correct: 'free(dynFloatArray);', distractors: [], indent: 1, explanation: "Free the entire allocated block of memory." },
            { correct: 'dynFloatArray = NULL;', distractors: [], indent: 1, explanation: "Set pointer to NULL after freeing." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 25: String Copy with strcpy
    {
        goal: "Copy one string to another using strcpy.",
        concepts: "strcpy, string.h, char arrays, null termination, buffer safety (conceptual)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include for printf." },
            { correct: '#include <string.h>', distractors: [{text: '#include <strings.h>', reason:'The standard C header for string manipulation functions is `<string.h>`, not `<strings.h>` (which is a non-standard POSIX header).'}], indent: 0, explanation: "Include string.h for strcpy." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'char source[] = "Hello C!";', distractors: [{text:'char *source = "Hello C!";', reason:'While a pointer can point to a string literal, `strcpy` typically expects a null-terminated char array as its source.'}], indent: 1, explanation: "Declare and initialize the source string." },
            { correct: 'char destination[20];', distractors: [{text:'char destination[];', reason:'When declaring a char array that will be a destination for `strcpy`, its size must be specified and large enough to hold the source string including the null terminator.'}, {text:'char *destination;', reason:'`destination` needs to be an allocated character array, not just an uninitialized pointer, for `strcpy` to write into.'}], indent: 1, explanation: "Declare the destination string buffer (must be large enough)." },
            { correct: 'strcpy(destination, source);', distractors: [{text:'strcpy(source, destination);', reason:'The first argument to `strcpy` is the destination, and the second is the source.'}, {text:'destination = source;', reason:'Assigning one char array to another using `=` is not allowed in C; it would attempt to assign pointers, not copy content.'}], indent: 1, explanation: "Copy the source string to the destination string." },
            { correct: 'printf("Source: %s\\n", source);', distractors: [], indent: 1, explanation: "Print the source string." },
            { correct: 'printf("Destination: %s\\n", destination);', distractors: [], indent: 1, explanation: "Print the copied string in destination." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 26: String Concatenation with strcat
    {
        goal: "Concatenate two strings using strcat.",
        concepts: "strcat, string.h, char arrays, buffer overflow risk (conceptual)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include for printf." },
            { correct: '#include <string.h>', distractors: [], indent: 0, explanation: "Include string.h for strcat." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'char str1[50] = "Hello, ";', distractors: [{text:'char str1[] = "Hello, ";', reason:'While `str1[]` works for initialization, for `strcat` the destination array must be explicitly sized large enough to hold the concatenated result.'}], indent: 1, explanation: "Declare first string with enough space for concatenation." },
            { correct: 'char str2[] = "World!";', distractors: [], indent: 1, explanation: "Declare the second string to append." },
            { correct: 'strcat(str1, str2);', distractors: [{text:'strcat(str2, str1);', reason:'`strcat` appends the second string to the first. `str2` might not have enough space if `str1` is appended to it.'}, {text:'str1 = str1 + str2;', reason:'String concatenation with `+` is not a feature of C char arrays; use `strcat`.'}], indent: 1, explanation: "Append str2 to the end of str1." },
            { correct: 'printf("Concatenated string: %s\\n", str1);', distractors: [], indent: 1, explanation: "Print the resulting string in str1." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 27: String Length with strlen
    {
        goal: "Find the length of a string using strlen.",
        concepts: "strlen, string.h, null termination (excluding)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include for printf." },
            { correct: '#include <string.h>', distractors: [], indent: 0, explanation: "Include string.h for strlen." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'char myString[] = "Test"; // Length is 4', distractors: [], indent: 1, explanation: "Declare and initialize a string." },
            { correct: 'int length;', distractors: [{text:'size_t length;', reason:'`strlen` returns `size_t`, but `int` is often used for simplicity if string lengths are known to be small. `size_t` is the more correct type.'}], indent: 1, explanation: "Declare a variable to store the length." },
            { correct: 'length = strlen(myString);', distractors: [{text:'length = sizeof(myString);', reason:'`sizeof(myString)` would give the size of the array in bytes, including the null terminator (and potentially padding). `strlen` counts characters *before* the null terminator.'}, {text:'length = strlen(&myString);', reason:'`strlen` expects a `char*` (pointer to the first character), which an array name decays to. `&myString` is a pointer to the whole array (`char (*)[size]`), a different type.'}], indent: 1, explanation: "Calculate the length of the string." },
            { correct: 'printf("The length of \\"%s\\" is %d.\\n", myString, length);', distractors: [], indent: 1, explanation: "Print the string and its calculated length." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 28: String Comparison with strcmp
    {
        goal: "Compare two strings using strcmp.",
        concepts: "strcmp, string.h, return values (0, <0, >0)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include for printf." },
            { correct: '#include <string.h>', distractors: [], indent: 0, explanation: "Include string.h for strcmp." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'char s1[] = "apple";', distractors: [], indent: 1, explanation: "Declare first string." },
            { correct: 'char s2[] = "apply";', distractors: [], indent: 1, explanation: "Declare second string (different)." },
            { correct: 'char s3[] = "apple";', distractors: [], indent: 1, explanation: "Declare third string (same as s1)." },
            { correct: 'int result12 = strcmp(s1, s2);', distractors: [{text:'int result12 = s1 == s2;', reason:'Comparing char arrays with `==` compares their memory addresses, not their content. Use `strcmp` for content comparison.'}], indent: 1, explanation: "Compare s1 and s2." },
            { correct: 'int result13 = strcmp(s1, s3);', distractors: [], indent: 1, explanation: "Compare s1 and s3." },
            { correct: 'if (result12 < 0) { printf("%s comes before %s\\n", s1, s2); }', distractors: [{text:'if (result12 == 0) { printf("s1 and s2 are equal.\\n"); }', reason:'`strcmp` returns 0 if strings are equal. "apple" and "apply" are not equal; "apple" comes before "apply" lexicographically.'}], indent: 1, explanation: "Check if s1 is lexicographically less than s2." },
            { correct: 'if (result13 == 0) { printf("%s and %s are equal\\n", s1, s3); }', distractors: [{text:'if (result13 != 0) { printf("s1 and s3 are different.\\n"); }', reason:'`strcmp` returns 0 when strings are identical.'}], indent: 1, explanation: "Check if s1 and s3 are equal." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 29: Function Pointer
    {
        goal: "Declare and use a simple function pointer.",
        concepts: "Function pointers (declaration, assignment, call)",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include for printf." },
            { correct: 'void sayHello() { printf("Hello!\\n"); }', distractors: [], indent: 0, explanation: "Define a simple function." },
            { correct: 'int add(int a, int b) { return a + b; }', distractors: [], indent: 0, explanation: "Define another function with parameters and return type." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'void (*helloPtr)();', distractors: [{text:'void *helloPtr();', reason:'This declares `helloPtr` as a function returning `void*`. A function pointer declaration needs parentheses around `*ptrName`.'}, {text:'void helloPtr();', reason:'This declares `helloPtr` as a regular function, not a pointer to one.'}], indent: 1, explanation: "Declare a function pointer 'helloPtr' that can point to a void function with no arguments." },
            { correct: 'helloPtr = sayHello;', distractors: [{text:'helloPtr = &sayHello();', reason:'Assign the function name directly (which decays to its address). `sayHello()` would call the function.'}, {text:'helloPtr = *sayHello;', reason:'Assign the function name `sayHello` or its address `&sayHello`. `*sayHello` is not standard for assignment here.'}], indent: 1, explanation: "Assign the address of 'sayHello' to 'helloPtr'." },
            { correct: 'helloPtr(); // Call function via pointer', distractors: [{text:'*helloPtr();', reason:'While `(*helloPtr)()` is also a valid way to call, simply `helloPtr()` is more common and often preferred for readability.'}], indent: 1, explanation: "Call the function using the function pointer." },
            { correct: 'int (*mathOp)(int, int);', distractors: [{text:'int *mathOp(int, int);', reason:'This declares `mathOp` as a function returning `int*`. Parentheses around `*mathOp` are crucial for function pointer syntax.'}], indent: 1, explanation: "Declare a function pointer 'mathOp' for a function taking two ints and returning an int." },
            { correct: 'mathOp = add;', distractors: [], indent: 1, explanation: "Assign the address of 'add' to 'mathOp'." },
            { correct: 'printf("Sum: %d\\n", mathOp(5, 3));', distractors: [{text:'printf("Sum: %d\\n", (*mathOp)(5, 3));', reason:'Both `mathOp(5,3)` and `(*mathOp)(5,3)` are valid ways to call the function through the pointer.'}], indent: 1, explanation: "Call 'add' via 'mathOp' and print the result." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
    // Level 30: Enum Usage
    {
        goal: "Define an enum for days of the week and use it.",
        concepts: "enum keyword, enum values, using enum variables",
        sequence: [
            { correct: '#include <stdio.h>', distractors: [], indent: 0, explanation: "Include for printf." },
            { correct: 'enum Weekday { SUN, MON, TUE, WED, THU, FRI, SAT };', distractors: [{text:'enum Weekday [ SUN, MON, TUE ];', reason:'Enum members are listed within curly braces `{}` and separated by commas.'}, {text:'struct Weekday { SUN, MON, TUE };', reason:'`struct` is used for defining structures (collections of variables), not enumerated constants.'}], indent: 0, explanation: "Define an enumeration for days of the week (SUN=0, MON=1, etc.)." },
            { correct: 'int main() {', distractors: [], indent: 0, explanation: "Start main." },
            { correct: 'enum Weekday today;', distractors: [{text:'Weekday today;', reason:'In C, you must use the `enum` keyword when declaring a variable of an enum type (e.g., `enum Weekday`). C++ allows omitting it.'}], indent: 1, explanation: "Declare a variable 'today' of type 'enum Weekday'." },
            { correct: 'today = WED;', distractors: [{text:'today = "WED";', reason:'Enum values are integer constants, not strings. Assign the enumerator `WED` directly.'}, {text:'today = 2;', reason:'While `WED` might correspond to 2 (if SUN=0, MON=1, TUE=2), it\'s best practice and more readable to use the enumerator name `WED`.'}], indent: 1, explanation: "Assign an enum value to 'today'." },
            { correct: 'if (today == WED) {', distractors: [{text:'if (today == "WED") {', reason:'Compare enum variables with enum constants directly, not with strings.'}], indent: 1, explanation: "Check the value of the enum variable." },
            { correct: 'printf("Today is Wednesday!\\n");', distractors: [], indent: 2, explanation: "Print a message based on the enum value." },
            { correct: '}', distractors: [], indent: 1, explanation: "Close if block." },
            { correct: 'printf("Value of FRI: %d\\n", FRI);', distractors: [{text:'printf("Value of FRI: %s\\n", FRI);', reason:'Enum values are integers. Use `%d` to print their underlying integer value.'}], indent: 1, explanation: "Print the integer value of an enumerator." },
            { correct: 'return 0;', distractors: [], indent: 1, explanation: "Indicate success." },
            { correct: '}', distractors: [], indent: 0, explanation: "Close main." }
        ]
    },
 
];

// If you were using this in a module system (like Node.js or with ES6 modules in the browser),
// you might export it like this:
// export default challengesData;
// or for CommonJS (Node.js):
// module.exports = challengesData;

// For simple browser usage, just having the const challengesData defined globally (or within
// the scope of your other scripts if this file is loaded first) is sufficient.
