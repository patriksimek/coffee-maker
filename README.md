# coffee-maker

A simple tool to watch and compile/join multiple coffee-script files. Also adds support for including coffee files.

## Installation

    sudo npm install -g coffee-maker

## Examples

```
coffeemaker --output ./lib ./src
coffeemaker --join --output ./lib/joined.js ./src
coffeemaker --watch --join --output ./lib/joined.js ./src
```

## Includes

a.coffee
```coffee
greeting = 'hello'
```

b.coffee
```coffee
who = 'world'
```

c.coffee
```coffee
#include a.coffee, b.coffee
hello = -> console.log "#{greeting} #{who}"
```

compiled.js
```javascript
var greeting, hello, who;

greeting = 'hello';

who = 'world';

hello = function() {
  return console.log(greeting + " " + who);
};
```

## Docs

```shell
  Usage: coffeemaker [options] <file ...>

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -o, --output [path]  Set the output directory (or file when using --join) for compiled JavaScript.
    -w, --watch          Watch scripts for changes and rerun commands.
    -j, --join           Concatenate the source CoffeeScript before compiling.
    -b, --bare           Compile without a top-level function wrapper.
    -n, --now            Compile sources immediately (when using --join).
```

<a name="license" />
## License

Copyright (c) 2015 Patrik Simek

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
