function fn2() {
    setTimeout( () => {
        console.log( 'delay of 1s' )
    }, 1000 );
}

function fn1() {
    setTimeout( () => {
        console.log( 'Executing fn2 with 3s timeout')
    }, 3000);
}

const euclido = 1;

function checkValue(value){
}

checkValue(euclido);