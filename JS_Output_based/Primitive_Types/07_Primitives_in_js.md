# primitive types in js

In JavaScript, primitive types are the simplest types of data that are not objects and immutable, meaning their values cannot be changed directly after creation. JavaScript has seven primitive types:

# Number

Represents numeric values including integers and decimal numbers.

```javascript
let age = 30;
let price = 19.99;
console.log(typeof age); // "number"
```

Special numeric values: Infinity, -Infinity, and NaN.
NaN stands for “Not a Number” and indicates a value that cannot be represented as a normal number.

```javascript
let invalid = 0 / 0;
console.log(invalid); // NaN
```

Note: NaN is still of type "number".

# BigInt

Used for integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1).
let bigNumber = 1234567890123456789012345678901234567890n; // "n" at the end indicates BigInt

# String

Represents sequences of characters (text).

```javascript
let name = "Nagpur";
let greeting = "Hello, World!";
```

# Boolean

Represents logical values: true or false.

```javascript
let isActive = true;
let hasAccess = false;
```

# Undefined

Indicates that a variable has been declared but not yet initialized.

```javascript
let value;
console.log(value); // undefined
```

# Null

Represents the intentional absence of any object value. It is a primitive type.

```javascript
let data = null;
```

Even though typeof null returns "object" due to a historical JavaScript bug, null is still a primitive, used to denote “no value”.

# Symbol (ES6)

Used to create unique identifiers, often for object property keys.

```javascript
let id = Symbol("userID");
```

# Why Null Is Considered a Primitive

null does not have properties or methods, making it a primitive. It is a lightweight way to explicitly say a variable currently holds no value.
The "object" result from typeof null is an old JavaScript quirk and does not change the fact that null is a primitive.

# Why NaN Uses Capital N

NaN stands for Not-a-Number and is a special numeric value, not a separate type.
Its capital letters follow the standard naming for built-in numeric constants in JavaScript (Infinity also uses a capital letter).
Despite being a number, it is unique in that NaN !== NaN; use Number.isNaN(value) to check properly.
console.log(Number.isNaN(0 / 0)); // true
console.log(typeof NaN); // "number"

```

```
