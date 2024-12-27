# React Native TypeError: Cannot read properties of undefined (reading 'property')

This repository demonstrates a common React Native error: `TypeError: Cannot read properties of undefined (reading 'property')`.  This error arises when trying to access a property of an object that is currently null or undefined, often due to asynchronous data loading.

The `bug.js` file shows the erroneous code, while `bugSolution.js` provides a corrected version using optional chaining and nullish coalescing to handle potential undefined values gracefully. This prevents the error and ensures smoother user experience.

## Setup

Clone the repository and run:

```bash
npm install
react-native run-android  // or react-native run-ios
```