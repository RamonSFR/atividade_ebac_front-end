$(document).ready(function () {
    mostraData();
    txtAtivaCheckbox();
    popUp()

    $('#form').on('submit', (e) => {
        e.preventDefault();

        const nomeAtividade = $('nome-atividade').val();

    })
})

function txtAtivaCheckbox() {
    $('#lista-tarefas li').on('click', function () {
        if (!$(event.target).is('input[type="checkbox"]')) {
            var checkbox = $(this).find('input[type="checkbox"]');
            checkbox.prop('checked', !checkbox.prop('checked'));
        }
    })
}

function popUp() {
    $('.btn-add').on('click', () => {
        $('.overlay').fadeIn(200);
        $('.popup').fadeIn(200);
    })

    $('#fechar').on('click', () => {
        $('.overlay').fadeOut(200);
        $('.popup').fadeOut(200);
    })
}

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