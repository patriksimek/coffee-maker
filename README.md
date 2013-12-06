# coffee-maker

A simple tool to watch multiple coffee sources at once. It simply creates multiple processes with shared stdout, so their output is consolidated to one console window.

## Installation

    sudo npm install -g coffee-maker

## Quick Example

Create a **.coffeemaker** and add one command per line.

#### Example:
```
coffee --compile --watch --output ./app ./src/app
coffee --compile --join base.js --watch --output ./app/public/js ./src/base
coffee --compile --join package1.js --watch --output ./app/public/js ./src/package1
coffee --compile --join package2.js --watch --output ./app/public/js ./src/package2
stylus --watch --out ./app/public/css ./src/app/public/css
```
*All paths must be relative to .coffeemaker file.

#### And simply run:

	$ coffeemaker

<a name="license" />
## License

Copyright (c) 2013 Patrik Simek

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
