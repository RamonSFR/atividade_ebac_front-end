$(document).ready(function () {
    mostraData();
})

function mostraData() {
    const meses = ['Jan', 'Fev', 'Mar', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Des'];
    const diasSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado'];
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth());
    const ano = data.getFullYear();
    const diaSemana = data.getDay();

    $('.dia').text(dia);
    $('.mes').text(meses[mes - 1]);
    $('.ano').text(ano)
    $('.dia-semana').text(diasSemana[diaSemana]);
}