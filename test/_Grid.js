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

test( 'it can generate grid', t => {

    var sass = renderSass( `
        @import 'src/main.scss';
        @include banner-grid;
    ` );

    t.is( sass, '.grid{display:flex}.grid.is-vertical{flex-direction:column;height:100%}.grid.is-vcentered{align-items:center}.grid.is-vbottom{align-items:flex-end}.grid .column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1}.grid .column.is-narrow{flex:none}.grid .column.is-filled{position:relative}.grid .column.is-filled>*{position:absolute;width:100%;height:100%}' );

} );
