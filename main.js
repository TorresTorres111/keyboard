
// obtener elementos
const key = document.querySelectorAll( '.key' );
// const lClick = document.querySelector( '.l-click' );
// const rClick = document.querySelector( '.r-click' );


const teclaPresionada = ( e ) => {
    console.log( e.keyCode )
    for (let i = 0; i < key.length; i++) {
        if ( e.keyCode == key[ i ].dataset.keyCode ) {
            key[ i ].style.background = 'red';
        };
    };
};


const teclaAlzada = () => {
    for (let i = 0; i < key.length; i++) {
        key[ i ].style.background = 'transparent';
        console.log( 'Se iso correctamente' );
    };
};


const mousePresionado = ( e ) => {
    e = e || window.event;
    console.log( e.which )
    switch ( e.which ) {
        case 1: lClick.style.background = 'rgba(225, 225, 225, 0.2)';
        break;
        case 3: rClick.style.background = 'rgba(225, 225, 225, 0.2)';
        break;
    };
};


const mouseAlzado = ( ) => {
    rClick.style.background = 'transparent';
    lClick.style.background = 'transparent';
};


const disableMenu = ( e ) => {
    e.preventDefault();
    return false;
}



// añadir eventos
document.addEventListener( 'keydown', ( e ) => {
    teclaPresionada( e )
});
document.addEventListener( 'keyup', ( ) => {
    teclaAlzada( );
});
// document.addEventListener( 'mousedown', ( e ) => {
//     mousePresionado( e );
// });
// document.addEventListener( 'mouseup', ( ) => {
//     mouseAlzado( );
// });
// document.addEventListener( 'contextmenu', ( e ) => {
//     disableMenu( e )
// });

