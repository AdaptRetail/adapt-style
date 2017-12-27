import test from 'ava';
import sass from 'node-sass';
import path from 'path';

var renderSass = function( content ) {
    var result = sass.renderSync({
        includePaths: [
            // path.resolve( '.' ),
            // path.resolve( '../node_modules' ),
            '.',
            'node_modules',
        ],
        importer: function( url, prev, done ) {

            if ( ! url.match( /^[~]/ )) {
                return;
            }

            url = url.replace( /^[~]/, path.resolve( 'node_modules' ) + '/' );

            return {
                file: url,
            };
        },
        outputStyle: 'compressed',
        data: content,
    });
    return result.css.toString().slice( 0, -1 );
}

test( 'it can generate style to add background image', t => {

    var sass = renderSass( `
        @import 'src/main.scss';
        .test {
            @include background-image;
        }
    ` );

    t.is( sass, '.test{background-size:contain;background-repeat:no-repeat;background-position:center}' );

} );

test( 'it can set a background image', t => {

    var sass = renderSass( `
        @import 'src/main.scss';
        .test {
            @include background-image( 'image.png' );
        }
    ` );

    t.is( sass, '.test{background:"image.png";background-size:contain;background-repeat:no-repeat;background-position:center}' );

} );

test( 'it can change the background size', t => {

    var sass = renderSass( `
        @import 'src/main.scss';
        .test {
            @include background-image( null, cover );
        }
    ` );

    t.is( sass, '.test{background-size:cover;background-repeat:no-repeat;background-position:center}' );

} );

test( 'it change change the position', t => {
    var sass = renderSass( `
        @import 'src/main.scss';
        .test {
            @include background-image( null, contain, left center );
        }
    ` );

    t.is( sass, '.test{background-size:contain;background-repeat:no-repeat;background-position:left center}' );
} );
