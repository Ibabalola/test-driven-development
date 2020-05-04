# JavaScript: Test-Driven-Development (ES6)

TDD is one of the most hotly discussed subjects in the software development world. Even the most carefully constructed applications grow to the point where debugging and ensuring quality becomes difficult. Test-driven development (TDD) helps with this tremendously by ensuring that all parts of your application are covered by tests. In this course, Shaun Wassell explores the foundational techniques and tools for unit and integration tests. Along the way, he zooms out to examine how they all fit together. Shaun also highlights TDD's strengths and weaknesses and provides real-world examples that showcase how TDD can fit into your development workflow.

* Learning objectives
* Advantages and disadvantages of TDD
* The basic TDD cycle
* The purpose of unit testing
* Testing basic and asynchronous functions
* How integration tests fit into TDD
* JavaScript libraries for integration testing
* Improving your TDD workflow
* Checking the test coverage of the codebase

## Software Installation

* `node -v // v10.15.1`
* `npm -v // 6.6.1`
* `npm install`
* `Mocha JS // test runner and testing framework`
* `Chai // assertion library`

## Test-Driven Development

Writing tests for your production code _before_ you actually write the production code

1. The goal of test-driven development is code quality.
2. There are good and bad tests.
3. There are many different opinions about the right way to do TDD

### Advantages of TDD

1. TDD forces us to clarify our thinking.
2. TDD improves communication between developers.
3. TDD prevents code rot, a slow deterioration of software quality over time.
4. TDD improves the structure of our production code, to create loosely coupled modular code.
5. Allows developers to make 'worry-free' changes.

### Disadvantages of TDD

1. TDD takes longer at first.
2. TDD isn't always a favourite with management.
3. Beware of writing bad tests!

## The basic TDD cycle

1. [RED]        Write a failing test.
2. [GREEN]      Write production code to make the test pass.
3. [REFACTOR]   Refactor the code you wrote.

## Writing Good Test

### Criteria for a Good Test

* **R**eadable
* **I**solated
* **T**horough
* **E**xplicit

### 3 different types of tests

* Unit Tests                -   Test very specific, low-level pieces of functionality
* Integration Tests         -   Ensure that the individual pieces of your application work together correctly
* End-to-End (E2E) Tests    -  Ensure your entire application works as seen from the viewpoint of a user

### The Purpose of Unit Testing

- Unit tests cover the smallest pieces of functionality: functions.
- Our test should cover a representative range of inputs.
- If you can break your production code without breaking your tests, they're not thorough enough.
- Units tests are you used to test the outcomes of pure functions, functions without states or side effects.

### TDD needs 3 basic tools

1. A testing environment/test runner
2. A testing framework
3. An asserting library

### Integration Testing

"Mocks" and "stubs" are the most common test doubles.
"Don't mock what you don't own."
Pure functions equals loosely coupled code.

### Categories of Integration test

1. Single-Service Integration Test
    - Test a single piece, or "service" o fyour application end to end, independent of the other pieces.
    - Suspectible to Outside Change
2. Boudary Integration Tests
    - Test the communcation between different pieces of your application.
    - Don't use test double for boundary tests.

### REST API
- GET -> '/users/abc' -> returns { id, username, email } "Status Code OK 200" && Content-type: JSON Header 

#### Next Steps
 Learning Functional Programming with JavaScript