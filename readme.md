# jQuery Assert [![Build Status](https://api.travis-ci.org/elmccd/jquery-assert.svg?branch=master)](https://travis-ci.com/elmccd/jquery-assert) [![codecov](https://codecov.io/gh/elmccd/jquery-assert/branch/master/graph/badge.svg)](https://codecov.io/gh/elmccd/jquery-assert)

> Assert number of elements returned by jQuery selector and throw an exception if it's different than expected.
>
>With this library you can have safer selectors as the library will guarantee that they are what you expect.


## Install

```
$ npm install jquery-assert --save
```

## Usage

### Modern

```js
import $ from 'jquery';
import jqueryAssert from 'jquery-assert';

$.fn.extend(jqueryAssert);

$('body').assertOne().doSomething();
```

### UMD build
```html
<script src="//code.jquery.com/jquery.min.js" />
<script src="/dist/jquery-assert.umd.min.js" />
<script>
  $('body').assertOne().doSomething();
</script>
	
```


## Why Fail Fast

> Essentially, fail fast (a.k.a. fail early) is to code your software such that, when there is a problem, the software fails as soon as and as visibly as possible, rather than trying to proceed in a possibly unstable state.

## Error tracking

With this approach, as well as any other you might really want to track
your front-end application errors, including the one thrown by this library.

If you are not tracking your errors yet have a look at some services like: 
sentry.io, trackjs.com, rollbar.com or others.

## API

### $.fn.assert(input)

#### input

Type: `number|function`

Assert exact number of elements:

Providing number:
```js
$('.two-of-us').assert(2);
```

Providing condition function which argument is the number of elements:
```js
$('.two-of-us').assert(n => n === 2 || n === 0);
```

### $.fn.assertOne()

Equivalent to:
```js
$('#unique').assert(1);
```

### $.fn.assertAtLeast(number)

Assert minimum number of elements.

### $.fn.assertMany()

Assert minimum one element.

Equivalent to:

```js
$('#unique').assertAtLeast(1);
```

## Support

Should work with any jQuery version. 

Babel compiled for IE8+.
