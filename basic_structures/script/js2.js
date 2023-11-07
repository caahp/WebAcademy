let array = [
    {
      id: 1,
      name: 'John',
      age: 23,
      sex: 'M'
    },
    {
      id: 2,
      name: 'Samuel',
      age: 21,
    },
    {
      id: 3,
      name: 'marvin',
      age: 26,
    },
    {
      id: 4,
      name: 'james',
      age: 28,
      sex: 'M'
    },
  ];


const resultado = array.find( (item) => item.id === 2 );
// console.log(resultado);

const allArray = array.map( (allItems) => {
    return allItems;
});
// console.log(allArray);

// const results = array.map( (resposta) => {
//     if (resposta.age == 28){
//         return resposta.age +10;
//     }
//     console.log(resposta);
//     return '';
// })
// console.log(results);

const filtro = array.filter( (item) => item.age > 25 );
// console.log(filtro);

const someFunction = array.some((resposta) => {
    return resposta.id === 4;
});
console.log(someFunction);

const result = array.map( (item) => item.name );
// console.log(result);

function handleArray(array) {
    console.log('This is the list of names in array:')
    for (i = 0; i < array.length; i++) {
        console.log(array[i].name);
        if (!array[i].sex) {
            console.log('Sex not informed');
        }
        else{
            console.log(array[i].sex);
        }
    }

}

const funcao = (a,b) => ({
    a: a,
    b: b,
});

const funcao3 = (a,b) => {
    map = {
        a: a,
        b: b,
    }
    console.log(map);
};

// console.log(funcao('a', 'vs'));
// funcao3('a', 'vs');

const teste = (a) => a + 10;
// console.log(teste(10));

const dateOfBirth = (year) => {
    const date = new Date();
    console.log(date.getFullYear() - year);
}

const dateOfBirthEasy = (year) => {
    console.log(2023 - year);
}
// dateOfBirth(1997);
// dateOfBirthEasy(2003);

// const idade = (ano) => 2023 - ano;
// console.log(idade(1997));

const getAge = (year, name) => { 
    const idade = 2023 - year;
    const nome = name;
    return {
        idade, 
        nome
    };
}

// console.log(getAge(1997, 'João'));

//função  anônima
const funcao1 = function (value){ 
    console.log(value);
}

function funcao2() {
    console.log('Bye, callback Function')
}

//função callback
function callbackFunction(funcao){
    console.log('Hello, callback Function')
    funcao();
}
