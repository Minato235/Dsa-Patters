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
