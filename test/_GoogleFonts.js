import test from 'ava';
import sass from 'node-sass';
import path from 'path';

var renderSass = function( content ) {
    var result = sass.renderSync({
        includePaths: [
            path.resolve( '.' ),
        ],
        outputStyle: 'compressed',
        data: content,
    });
    return result.css.toString().slice( 0, -1 );
}

test( 'it loads google font library', t => {


    var sass = renderSass( `
        @import 'src/main.scss';
        @include google-font( 'Lobster' );
    ` );

    t.is( sass, '@import url("https://fonts.googleapis.com/css?family=Lobster")' );

} );
