The solution involves using optional chaining (`?.`) and the nullish coalescing operator (`??`) to safely access properties and provide default values.

```javascript
// Corrected code
<Text>{this.state.userData?.name ?? 'Guest'}</Text>
```

Optional chaining (`?.`) short-circuits the evaluation if `this.state.userData` is null or undefined, preventing the error. The nullish coalescing operator (`??`) provides a default value ('Guest' in this case) if the preceding expression is null or undefined.  You can adapt the default value to whatever is suitable for your application.

Alternatively, you can use a conditional rendering approach:

```javascript
{this.state.userData ? <Text>{this.state.userData.name}</Text> : <Text>Guest</Text>}
```

This approach conditionally renders the name only when the `userData` is available.  Choose the method most suitable for your coding style and application requirements.