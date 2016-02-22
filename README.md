# uzhhorod

Uzhhorod ASCII logo

[![Dependency Status](https://david-dm.org/zkochan/uzhhorod/status.svg?style=flat)](https://david-dm.org/zkochan/uzhhorod)
[![Build Status](https://travis-ci.org/zkochan/uzhhorod.svg?branch=master)](https://travis-ci.org/zkochan/uzhhorod)
[![npm version](https://badge.fury.io/js/uzhhorod.svg)](http://badge.fury.io/js/uzhhorod)


## Installation

```
npm i uzhhorod
```


## Usage

``` js
const uzhhorod = require('uzhhorod')

uzhhorod()
```

Will print this:

```
@~\_/~@
_|uzh|_
\horod/
  \;/
```

Pass some custom text to be inserted into the logo:

```js
uzhhorod({
  times: 4,
  text: 'tutfoso!',
})
```

```
@~\_/~@ @~\_/~@ @~\_/~@ @~\_/~@
_|tut|_ _|tut|_ _|tut|_ _|tut|_
\foso / \foso / \foso / \foso /
  \ /     \ /     \ /     \ /  
```


## License

MIT © [Zoltan Kochan](https://www.kochan.io)
