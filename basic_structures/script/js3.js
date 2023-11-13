
let funcionario = [
    {
      nome: 'Euclides',
      idade: 21,
      cargo: 'Analista de sistemas',
      tecnologia: 'Node',
    },
    {
      nome: 'Linton',
      idade: 30,
      cargo: 'Analista de sistemas',
      tecnologia: 'Tudo',
    },
    {
        nome: 'Jeff',
        idade: 20,
        cargo: 'Dev Frontend',
        tecnologia: 'React',
      },
    {
        nome: 'Carol',
        idade: 20,
        cargo: 'Dev Backend',
        tecnologia: 'Node'
    }
  ];

//   funcionario.push({
//     nome: 'Jeff',
//     idade: 20,
//     cargo: 'Desenvolvedor Front-end',
//     tecnologia: 'React',
//   });

//   console.log(funcionario.map( (item) => item.nome === 'Carol'));
//   console.log(funcionario.find( (item) => item.nome === 'Carol'));
//   console.log(funcionario.filter( (item) => item.idade === 20));

//   funcionario.map((resposta) => {
//     if(resposta.nome === 'Jeff'){
//     console.log(resposta);
//   }});

//   for(let i=0; i<funcionario.length; i++){
//     if(funcionario[i].nome === 'Linton'){
//     console.log(funcionario[i]);
//   }}

funcionario.find((resposta) => {
    if(resposta.nome === 'Carol'){
        resposta.tecnologia = ['Node', 'React'];
    }
    console.log(resposta);
});


funcionario.find((resposta)=> {
    if(resposta.nome === 'Jeff'){
        resposta.tecnologia = [];
        resposta.tecnologia.push('Angular');
    }
    console.log(resposta);
})