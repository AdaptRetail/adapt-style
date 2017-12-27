import test from 'ava';

test( 'it can generate clearfix', t => {

    var sass = global.renderSass( `
        @import 'src/main.scss';
        @include clearfix;
    ` );

    t.is( sass, '.clearfix:before,.clearfix:after{content:" ";display:table}.clearfix:after{clear:both}.clearfix{*zoom:1}' );

} );
