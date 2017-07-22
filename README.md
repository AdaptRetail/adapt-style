# Banner helper
> Micro framework for building banners. 

Banner helper is a micro `sass` framework for helping you out creating web banners.

The micro framework includes
- Smart grid using `flexbox`.

## Good starting point
For a good starting point of creating ads see the [Adapt banner template](https://github.com/AdaptRetail/banner-template).

## Configuration
```scss
$clearfix: false; // If true we include clearfix. (Typically not used in banners.)
```

## Grid

The micro grid is used 

Each column will by default take eaqualy space of the widthj

```html
<div class="grid">
    <div class="column"></div>
</div>
```

Add `.is-vertical` to the grid if you want it to flow downwards.
```html
<div class="grid is-vertical"></div>
```

### Special columns

We have a couble of

#### Is narrow

The `.column.is-narrow` class does not take up any more space that the children needs.

> Warning: Do not use anythings that calculates in `%` of the height directly inside the `.is-narrow`.
> This is because calculating height need to have a set parent height.
> This means that the `.is-narrow` parent and child will be in conflict.
> Ignoring this will cause height flickering in some cases.

#### Is filled

If you use is narrow, and you need to have a child calculate 100% height, you should use `.is-cilled.`
`.column.is-filled` is actually a `css` hack and will set the imidiate child as height 100% of the container.

> If not using this class you will have trouble filling the childrens height of 100%.
