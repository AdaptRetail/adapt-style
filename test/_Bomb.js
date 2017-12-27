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

test( 'it can create a bomb element', t => {

    var sass = renderSass( `
        @import 'src/main.scss';
        .test {
            @include bomb;
        }
    ` );

    t.is( sass, '.test{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}.test:before{content:\'\';display:block;padding-bottom:100%}' );

} );

test( 'it can set the height ratio', t => {
    var sass = renderSass( `
        @import 'src/main.scss';
        .test {
            @include bomb( 50% );
        }
    ` );

    t.is( sass, '.test{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}.test:before{content:\'\';display:block;padding-bottom:50%}' );
} );
