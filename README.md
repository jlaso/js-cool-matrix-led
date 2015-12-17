# js-cool-matrix-led
A cool led matrix with javascript and CSS (jquery needed)

This is based on the work of http://codepen.io/motorlatitude/pen/fmzkd

##Installation

Copy the files cool-led-matrix.css and cool-led-matrix.js to your project, to the folder you want.

invoke it in your html file like this:

```
    <script src="cool-led-matrix.js"></script>
    <link href='cool-led-matrix.css' rel='stylesheet' type='text/css'>
```

Create a container with enough room to the matrix:

```
    <div id="led-container"></div>
```

Apply to this container the styles you want, but you have to have position: absolute; yes or yes.

```
    #led-container {
        position: absolute;
    }
```


And, on your code create as many led-matrix blocks as you need:

```
    $(document).ready(function () {
        var led0 = new CoolLedMatrix("#led-container", 0, symbols.cross),
            led1 = new CoolLedMatrix("#led-container", 1, symbols.warning),
            led2 = new CoolLedMatrix("#led-container", 2, symbols.ok),
            led3 = new CoolLedMatrix("#led-container", 3, symbols.alert);
    });
```


If you need more symbols is pretty easy to create new ones. 

```
var symbols = {
    ...
    otherSymbol: {
        colorClass: "myNewColor",
        data: [
            0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0,
            0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
            0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
            1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1,
            1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1,
            1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1,
            1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1,
            1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1,
            0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0,
            0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
            0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0
        ]
    },
    ...
```

Remember that for the colorClass you need to create also the correspondent class:

```
    .led ul li.myNewColor {
        background: #FF1234;
        box-shadow: 0 0 16px #FF1234;
    }
```

