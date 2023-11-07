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

let nomes = ['João', 'Maria', 'Carlos', 'Pedro'];

function upperArray( array ) {
    return array.map( ( item ) => {
        console.log(item.toUpperCase());
    } );
}

function groupArray(array){
    str = '';
    for (i=0; i<3; i++){
            str += array[i];
    }
    console.log(str);
}

function reverseArray(array){
    console.log(array.reverse());
}

function pushArray(array, item){
    array.push(item);
    console.log(array);
}

function deleteItem(array, item){
    array.splice(array.indexOf(item), 1);
    console.log(array);
}

function addOrReplaceElement(array, x, z, newWord){
    array.splice(x, z, newWord);
    console.log(array);
}

const Pessoa = {};
Pessoa.nome = 'João';
Pessoa.idade = 20;
Pessoa.email = 'joao@gmail.com'

const Pessoa2 ={
    nome: 'Carol',
    idade: 20,
    email: 'carol@gmail.com',
    endereco: 'rua x e bairro y',
    hobbies: ['treinar', 'comer', 'dormir'],
    animais: [
        {nome: 'Luke',
        especie: 'cachorro'
        },
        {nome: 'Anakin',
        especie: 'peixe'}
    ],
    action: function() {
        console.log('Meu nome é %s, tenho %d anos e meu hobby é %s', this.nome, this.idade, this.hobbies[0])
    }
}

// console.log('Meu %s se chama %s',Pessoa2.animais[0].especie, Pessoa2.animais[0].nome);
// console.log('Meu segundo hobby favorito é',Pessoa2.hobbies[1]);
// console.log(Pessoa2.hobbies.find( (item) => item === 'comer' ));
// Pessoa2.action();

// var tamanho = 0;
// for (let contador = 0; contador<100; contador++){
//     if (contador > 50){
//         console.log('cheguei na metade');
//         break;
//     }
//     console.log(contador);
// }

// while(tamanho < 100){
//     tamanho += 1;
//     console.log(tamanho);
// }

// do{
//     console.log("la la la");
//     tamanho++;
// }while(tamanho<2);

// const numeros = [1,2,3,4,5,6,7,8,9,10];
// console.log(numeros);

// for (let i = 0; i < numeros.length - 1; i++){
//     if(numeros[i] > 2){
//         numeros[i]++;
//     }
//     console.log(numeros[i]);
// }

// let nome = 'João é gente boa';
// console.log(nome.toLowerCase());
// console.log(nome.toUpperCase());
// console.log(nome.substring(0,6));

const date = new Date();
console.log(date.getHours()-3);
console.log(date.getMinutes());
console.log(date.getDate());
console.log(date.getDay()); // 0 = domingo, 1 = segunda, 2 = terça, 3 = quarta, 4 = quinta, 5 = sexta, 6 = sábado

const readline = require('readline');

function getUserInfo() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
        rl.question('What is your name? ', (name) => {
            rl.question('What is your age? ', (age) => {
                rl.question('What is your email? ', (email) => {
                    rl.close();
                    console.log({name, age, email})
                });
            });
        });
}




