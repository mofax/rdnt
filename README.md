## rdnt

This npm library provides a TypeScript implementation for handling results and errors in a functional style.

## Installation

To install the library, run:

```sh
npm install rdnt
```

## Usage

Here's a quick example to get you started:

```ts
import { Result, Err, unwrap } from 'rdnt';

const result = Result(42);
const error = Err({ message: 'Error occurred' });

try {
  const value = unwrap(result);
  console.log(value); // Outputs: 42
} catch (e) {
  console.error(e);
}
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
