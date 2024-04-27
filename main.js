const notas = [
    {
        nome: 'João',
        nota: 7
    },
    {
        nome: 'Alan Wake',
        nota: 4.6
    },
    {
        nome: 'Leon S. Kennedy',
        nota: 10
    },
    {
        nome: 'James Sunderland',
        nota: 2.5
    },
    {
        nome: 'Jill Valentine',
        nota: 9.2
    },
    {
        nome: 'Header Mason',
        nota: 5.4
    },
];

const aprovados = notas.filter((item) => item.nota >= 6);
console.log(aprovados);