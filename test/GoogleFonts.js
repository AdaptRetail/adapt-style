import test from 'ava';

test( 'it loads google font library', t => {


    var sass = global.renderSass( `
        @import 'src/main.scss';
        @include google-font( 'Lobster' );
    ` );

    t.is( sass, '@import url("https://fonts.googleapis.com/css?family=Lobster")' );

} );
