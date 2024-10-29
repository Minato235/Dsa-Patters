
## Day 1: Java Program Execution Flow  

When you write a Java program, the execution process involves several steps, checking for errors, and converting the code into a runnable format.  

### Execution Flow  

1. **Compile the Code:**  
   - **JDK (Coaching Staff):**  
     - **JDK (Java Development Kit):** Represents the entire coaching staff. It includes everything you need to prepare the team (compile and develop).  
     - **Compiler (Referee):** The referee (compiler) checks the game plan (Java code) and ensures everything is correct before the match (compilation into bytecode).  
   - The JDK compiles the code using the Java compiler (`javac`) and checks for syntax errors.  
   - **If No Errors:** The compiler converts the Java code into bytecode (e.g., `HelloWorld.class`).  

2. **Send to JRE (Java Runtime Environment):**  
   - **JRE (Stadium):**  
     - Represents the football stadium where the match takes place. It provides the environment necessary for the game (execution).  
     - Includes the **JVM** and essential resources (libraries).  
   - The compiled bytecode is sent to the JRE for execution.  

3. **Execution by JVM:**  
   - **JVM (Players on the Field):**  
     - Executes the bytecode (players running the match) to produce the outcome (output).  
     - Loads the game plan (bytecode), verifies it, and runs it.  

### Summary  
- Write Java Code → **JDK Checks for Errors** → Compile Code → Send to **JRE** → Execute with **JVM**  

---

## Day 2: Java Basics - Variables, Data Types, and Operators  

### 1. Variables in Java  

- **Local Variables:** Defined within methods and accessible only within that method.  
- **Instance Variables:** Declared in a class but outside any method; each instance of the class has its own copy.  
- **Class (Static) Variables:** Declared with `static` and shared across all instances of the class.  

#### Example  
```java
public class Example {
    int instanceVar = 5;  // Instance variable  
    static int staticVar = 10;  // Static variable  

    public void method() {
        int localVar = 15;  // Local variable  
        System.out.println(localVar + instanceVar + staticVar);
    }
}
```

---

### 2. Data Types in Java  

- **Primitive Data Types:**  
  - `int`: Integer values (e.g., 25)  
  - `double`: Decimal values (e.g., 3.14)  
  - `char`: Single character (e.g., 'A')  
  - `boolean`: Logical values (true/false)  

- **Reference Data Types:** Store addresses of complex objects, such as `String`, arrays, and custom classes.  

#### Example of Primitive Types  
```java
int age = 25;
double price = 19.99;
char grade = 'A';
boolean isStudent = true;
```

---

### 3. Operators in Java  

- **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%`  
  - Example:  
    ```java
    int sum = 5 + 3;  // sum = 8
    ```

- **Relational Operators:** `==`, `!=`, `>`, `<`, `>=`, `<=`  
  - Example:  
    ```java
    System.out.println(5 > 3);  // true
    ```

- **Logical Operators:** `&&`, `||`, `!`  
  - Example:  
    ```java
    System.out.println((5 > 3) && (3 < 4));  // true
    ```

---

## Day 3: Java Control Flow Statements  

### 1. If-Else Statements  

```java
int score = 85;
if (score >= 90) {
    System.out.println("Grade A");
} else if (score >= 80) {
    System.out.println("Grade B");
} else {
    System.out.println("Grade C");
}
```

---

### 2. Switch Statements  

```java
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
```

---

### 3. Loops  

- **For Loop**  
  ```java
  for (int i = 0; i < 5; i++) {
      System.out.println("Count: " + i);
  }
  ```

- **While Loop**  
  ```java
  int i = 0;
  while (i < 5) {
      System.out.println("Count: " + i);
      i++;
  }
  ```

- **Do-While Loop**  
  ```java
  int i = 0;
  do {
      System.out.println("Count: " + i);
      i++;
  } while (i < 5);
  ```

---

## Day 4: Java Methods, Scope, and Instances  

### 1. Methods  

- **Void Method:** Performs an action but doesn’t return a value.  
  ```java
  public void greet() {
      System.out.println("Hello!");
  }
  ```

- **Return Method (Non-void):** Returns a value after performing an action.  
  ```java
  public int add(int a, int b) {
      return a + b;
  }
  ```

---

### 2. Creating Instances  

- **What is an Instance?**  
  - An instance is an individual object of a class.  
  - Think of a class as a blueprint, and an instance as a real object created from it.  

#### How to Create an Instance  
```java
ClassName objectName = new ClassName();
```

#### Example  
```java
Player player1 = new Player();
player1.greet();
```

---

### 3. Method Overloading  

Allows multiple methods with the same name but different parameters.  

```java
public void display(String text) {
    System.out.println(text);
}

public void display(int number) {
    System.out.println(number);
}
```

---

### 4. Scope  

- **Local Scope:** Variables declared within a method, accessible only within that method.  
  ```java
  public void exampleMethod() {
      int localVar = 10;
  }
  ```

- **Instance Scope:** Variables declared in a class, accessible by all methods in the instance.  
  ```java
  public class Player {
      String playerName;
  }
  ```

- **Class Scope (Static):** Variables shared across all instances of the class.  
  ```java
  public class Game {
      static int totalPlayers = 0;
  }
  ```

---

## Summary  

This document covers essential Java concepts across four days:  

- **Day 1:** Java program execution flow.  
- **Day 2:** Variables, data types, and operators.  
- **Day 3:** Control flow statements (if-else, switch, loops).  
- **Day 4:** Methods, creating instances, method overloading, and scope.  

---

