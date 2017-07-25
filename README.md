# Banner helper
> Micro framework for building banners. 

Banner helper is a micro `sass` framework for helping you out creating web banners.

The micro framework includes
- Smart grid using `flexbox`.
- [Bomb logic element](#bomb)

## Quick install

### NPM
```bash
npm install @adapt-retail/banner-style
```

### YARN
```bash
yarn add @adapt-retail/banner-style
```

## Good starting point
For a good starting point of creating ads see the [Adapt banner template](https://github.com/AdaptRetail/banner-template).

## Grid

The micro grid is used 

Each column will by default take eaqualy space of the widthj

```html
<div class="grid">
    <div class="column"></div>
    <div class="column"></div>
</div>
```

Add `.is-vertical` to the grid if you want it to flow downwards.
```html
<div class="grid is-vertical"></div>
```

### `.grid.is-vertical`

Changes the flex direction of the grid to go top to bottom instead of left to right

### `.grid.is-vcentered`

Position children based on center

### `.grid.is-vbottom`

Position children from bottom to top

### Special columns

We have a coule of special classes for columns. This is for helping distribute the objects if you want to only make the elements use the needed spacing, and fill them afterwards.

#### `.column.is-narrow`

The `.column.is-narrow` class does not take up any more space that the children needs.

> Warning: Do not use anythings that calculates in `%` of the height directly inside the `.is-narrow`.
> This is because calculating height need to have a set parent height.
> This means that the `.is-narrow` parent and child will be in conflict.
> Ignoring this will cause height flickering in some cases.

#### `.column.is-filled`

If you use is narrow, and you need to have a child calculate 100% height, you should use `.is-cilled.`
`.column.is-filled` is actually a `css` hack and will set the imidiate child as height 100% of the container.

> If not using this class you will have trouble filling the childrens height of 100%.


## Clearfix

`.clearfix` is another css hack, and helps setting the correct height of elements that uses `float` attibute.

To turn on clearfix just change the css variable
```scss
$clearfix: false; // If true we include clearfix. (Typically not used in banners.)
```

## Mixins

Mixins contains css logics and this framework has som nice helpers for help you write DRY code.

### Background

If you want to use a background image, this mixin is for you.

```scss
.background {

    @include background-image;
    // background-size: contain;
    // background-repeat: no-repeat;
    // background-position: center;

    @include background-image( red, bottom left, cover );
    // background: red;
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: bottom left;

}
```

<a name="bomb"></a>
### Bomb

Bomb mixin helps you create logic for centereing content inside a box.

![Bomb illustration](images/bomb-illustration.png)

```scss
.bomb {
    @include bomb;
    background-color: red;
    border-radius: 50%;
}

// Create oval bomb
.bomb {
    @include bomb( 50% );
    background-color: red;
    border-radius: 50%;
}
```
