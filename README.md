# Week9: React Testing

This week involved learning React testing. The React Testing Library is a tool that helps us test React applications by simulating user interactions and verifying that components behave as expected.

## Types of Testing

There are different types of testing commonly used in software development:

### Unit Testing

Unit testing involves testing individual components or functions in isolation. This type of test focuses on small, specific parts of the application to ensure they perform as expected. For example, a unit test might verify that a function correctly returns a calculated result or that a component renders properly given specific props.

### Integration Testing

Integration testing examines how multiple components or modules work together. Instead of testing a single function or component, it checks how they integrate and interact with each other. This type of test is useful for detecting issues that may arise when components are combined in the same context.

### End-to-End (E2E) Testing

End-to-End testing simulates real user scenarios and tests the entire application flow from start to finish. It ensures that various parts of the application work together as a whole, replicating actual user actions like navigating through pages or submitting forms. E2E tests are often used to catch issues that may be missed in unit or integration tests.

## Why We Test

We test our applications to verify that the functionality is working as intended. Testing helps us ensure that all parts of the React app perform as expected, providing a reliable and predictable experience for users.

## Importance of Testing

- To catch bugs early
- Increases confidence in the aplication
- Speeds up QA time
- Can serve as documentation

## What I Worked On

I worked on a simple counter component, which includes three main actions:

- Increment: Increases the count value by 1.
- Decrement: Decreases the count value by 1.
- Reset: Resets the count value to 0.

## Tests

The buttons were tested to ensure they work as intended. Each button was clicked programmatically, and the resulting count was checked to confirm that it updated correctly, verifying that each button’s functionality aligns with expectations.

View live link: [Click here](https://lucky-mousse-4433e9.netlify.app/)
