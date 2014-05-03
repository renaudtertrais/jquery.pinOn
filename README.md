# jQuery pinOn()
Position a child relative to its parent. Could be very useful for **tooltips** for example.

## Demo

You can try the plugin on the [demo page](http://).


## Usage

```
$("#child").pinOn( parent [, position] [, align] );
```

### @param `parent`
> It's the parent relative to wich the `#child` will be positionned.

**Type** :  `STRING`or `jQuery Object`. 


### @param `position`
> The **position** describe where the child must be positionned relatively to its **parent**.

**Type** : `STRING`

You can use words `top`,`bottom`,`left` **AND** `right` with an optionnal signed shift value (i.e. `top-25 right+45`).  The **position** must be indicate with **one** or **two** words : **one horizontal AND / OR one vertical**. The order of words doesn't matter.

```
+-------------+----------+--------------+
|   top left  |    top   |  top right   |
+-------------+----------+--------------+
|    left     |  PARENT  |    right     |
+-------------+----------+--------------+
| bottom left |  bottom  | bottom right |
+-------------+----------+--------------+
```

You can try the [demo](http://).

### @param `align` 
> The **align** define how the child must be align relatively to its **parent** if you sepcified only one dimmension in **position**.

**Type** : `STRING`   
**Optionnal** :  default value = `center`;

You can use an alignement among : `center`, `top`,`bottom`,`left` **OR** `right` with an optionnal signed shift value (i.e. `right-25`).

By default, if you specified only **one position**, the **child** will be centered in the other dimmention. But you can specify the alignement that you want.

#### No align
** JS **
```
$("#child").pinOn( "#parent" , "top+20" );
```

**Result**

```
           +-----------+
           |   #child  |
           +-----------+

+---------------------------------+
|             #parent             |
+---------------------------------+
```

#### with align
** JS **
```
$("#child").pinOn( "#parent" , "top+20" , "right" );
```

**Result**

```
                      +-----------+
                      |   #child  |
                      +-----------+

+---------------------------------+
|             #parent             |
+---------------------------------+
```

You can try the [demo](http://).