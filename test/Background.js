import test from 'ava';

test( 'it can generate style to add background image', t => {

    var sass = global.renderSass( `
        @import 'src/main.scss';
        .test {
            @include background-image;
        }
    ` );

    t.is( sass, '.test{background-size:contain;background-repeat:no-repeat;background-position:center}' );

} );

test( 'it can set a background image', t => {

    var sass = global.renderSass( `
        @import 'src/main.scss';
        .test {
            @include background-image( 'image.png' );
        }
    ` );

    t.is( sass, '.test{background:"image.png";background-size:contain;background-repeat:no-repeat;background-position:center}' );

} );

test( 'it can change the background size', t => {

    var sass = global.renderSass( `
        @import 'src/main.scss';
        .test {
            @include background-image( null, cover );
        }
    ` );

    t.is( sass, '.test{background-size:cover;background-repeat:no-repeat;background-position:center}' );

} );

test( 'it change change the position', t => {
    var sass = global.renderSass( `
        @import 'src/main.scss';
        .test {
            @include background-image( null, contain, left center );
        }
    ` );

    t.is( sass, '.test{background-size:contain;background-repeat:no-repeat;background-position:left center}' );
} );
