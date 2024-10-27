# Day 1 Lesson: Java Program Execution Flow

## Overview

When you write a Java program, the execution process involves several steps, checking for errors and converting the code into a runnable format. Here’s how it works:

## Execution Flow

2. **Compile the Code**:

   - **JDK (Coaching Staff)**:
     • JDK (Java Development Kit): Represents the entire coaching staff. It includes everything you need to prepare the team (compile and develop).
     • Compiler (Referee): The referee (compiler) checks the game plan (Java code) and ensures everything is correct before the match (compilation into bytecode).
     - The Java Development Kit (JDK) compiles the code using the Java compiler (`javac`).
     - It checks for any syntax errors in the code.
   - **If No Errors**:
     - If there are no errors, the compiler converts the Java code into bytecode (e.g., `HelloWorld.class`).

3. **Send to JRE**:

- JRE (Stadium):
  • JRE (Java Runtime Environment): This is the football stadium where the match takes place. It provides the environment necessary for the game (execution).
  • It includes the JVM and all the essential resources (libraries) needed for the match.

- The compiled bytecode is then sent to the Java Runtime Environment (JRE) for execution.

4. **Execution by JVM**:

   - JVM (Players on the Field):
     • JVM (Java Virtual Machine): Represents the players executing the game plan. The JVM executes the bytecode (players running the match) to produce the outcome (output).
     • It loads the game plan (bytecode), verifies it (ensures fair play), and runs it (executes the match).

   - The JVM executes the bytecode, translating it into machine code that the computer can understand and run.

## Summary

- Write Java Code → **JDK Checks for Errors** → Compile Code → Send to **JRE** → Execute with **JVM**.

# Day 2 Lesson: Java Program Execution Flow

Here’s a version of Day 2 notes that you can use for a GitHub README or documentation file. This is structured in Markdown to look clean on GitHub.

Day 2: Java Basics - Variables, Data Types, and Operators

1. **Variables in Java**

Definition: Variables are containers that hold data values in Java. There are three main types:

    •	Local Variables: Defined within methods, accessible only within that method.
    •	Instance Variables: Declared in a class, but outside any method. Each instance of the class has its own copy.
    •	Class (Static) Variables: Declared with static; shared across all instances of the class.

- Example:

public class Example {
int instanceVar = 5; // Instance variable
static int staticVar = 10; // Class (static) variable

    public void method() {
        int localVar = 15; // Local variable
        System.out.println(localVar + instanceVar + staticVar);
    }

}

2. **Data Types in Java**

Java has two main categories of data types:

- Primitive Data Types

Simple data types that store basic values:

    •	int: Integer values (e.g., 25)
    •	double: Decimal values (e.g., 3.14)
    •	char: Single character (e.g., 'A')
    •	boolean: Logical values (true/false)

- Reference Data Types

Reference types store addresses of complex objects and include String, arrays, and custom classes.

- Example of Primitive Types:

int age = 25;
double price = 19.99;
char grade = 'A';
boolean isStudent = true;

3. **Operators in Java**

Operators are symbols that perform operations on values and variables.

    •	Arithmetic Operators: +, -, *, /, %
    •	Example: int sum = 5 + 3; // sum = 8
    •	Relational Operators: ==, !=, >, <, >=, <=
    •	Example: 5 > 3 // true
    •	Logical Operators: &&, ||, !
    •	Example: (5 > 3) && (3 < 4) // true

**Day 3: Java Control Flow Statements(3)**

1. If-Else Statements

   • Purpose: Execute code based on conditions

int score = 85;
if (score >= 90) {
System.out.println("Grade A");
} else if (score >= 80) {
System.out.println("Grade B");
} else {
System.out.println("Grade C");
}

2. Switch Statements

   • Purpose: Simplify multiple exact matches.

   • Example:

int day = 3;
switch (day) {
case 1:
System.out.println("Monday");
break;
case 3:
System.out.println("Wednesday");
break;
default:
System.out.println("Other day");
}

3. Loops

Loops help repeat actions based on conditions.

For Loop

    •	Structure: for (initialization; condition; update)
    •	Example:

for (int i = 0; i < 5; i++) {
System.out.println("Count: " + i);
}

While Loop

    •	Structure: while (condition)
    •	Example:

int i = 0;
while (i < 5) {
System.out.println("Count: " + i);
i++;
}

Do-While Loop

    •	Structure: do { ... } while (condition);
    •	Example:

int i = 0;
do {
System.out.println("Count: " + i);
i++;
} while (i < 5);
