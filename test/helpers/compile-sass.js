const sass = require( 'node-sass' );
const path = require( 'path' );

global.renderSass = function( content ) {
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
