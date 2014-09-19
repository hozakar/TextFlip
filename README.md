TextFlip
========

###Features:
Applies rotation or opacity animations for each character of text. Best headings...

### Usage
First, include necessary files in head.
```html
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="textflip.min.js"></script>
<link href="textflip.css" rel="stylesheet" />
```

Then, textflip can be applied to any container element(s).
```html
<script>
  $('#element').textflip();
  $('.elements').textflip();
</script>
```

### Parameters
* animation: rotateX, rotateY, rotateZ, opacity, random (Default: opacity)
* sequence: random, linear (Default: random)
* interval: Interval in milliseconds. If blank or 0, plugin will automatically apply a suitable interval. (Default: 0)

### Usage Example
```html
<script>
  $('.element').textflip({
    animation: 'rotateZ',
    sequence: 'linear',
    interval: 2000
  });
</script>
```


### Dependencies
* [jQuery](http://jquery.com/)

License
------------
CC0 1.0 Universal Licence

Dependecies have their own licence information. Please view them before use.
