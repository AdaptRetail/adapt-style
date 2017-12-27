import test from 'ava';

test( 'it can create a bomb element', t => {

    var sass = global.renderSass( `
        @import 'src/main.scss';
        .test {
            @include bomb;
        }
    ` );

    t.is( sass, '.test{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}.test:before{content:\'\';display:block;padding-bottom:100%}' );

} );

test( 'it can set the height ratio', t => {
    var sass = global.renderSass( `
        @import 'src/main.scss';
        .test {
            @include bomb( 50% );
        }
    ` );

    t.is( sass, '.test{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}.test:before{content:\'\';display:block;padding-bottom:50%}' );
} );
