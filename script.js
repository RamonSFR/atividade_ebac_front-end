$(document).ready(function () {
    mostraData();
    chamaPopUp();
    validaForm();
    limpaTarefas();
})

function validaForm() {
    $('.form').on('submit', (e) => {
        e.preventDefault();
        validaCheckBox();

        const nomeAtividade = $('#nome-tarefa').val();
        const novaAtividade = $('<li style="display-none"></li>');
        $('<input type="checkbox">').appendTo(novaAtividade);
        novaAtividade.append(`<span>${nomeAtividade}</span>`);
        novaAtividade.appendTo('ul');
        novaAtividade.slideDown(500);

        $('#nome-tarefa').val('');
        fechaPopUp();
        validaCheckBox();
    })
}

function validaCheckBox() {
    $('#lista-tarefas li').on('click', function (event) {
        var checkbox = $(this).find('input[type="checkbox"]');
        var textoTarefa = $(this).find('span');

        if (!$(event.target).is('input[type="checkbox"]')) {
            checkbox.prop('checked', !checkbox.prop('checked'));
        }

        if (checkbox.prop('checked')) {
            textoTarefa.css('text-decoration', 'line-through');
        } else {
            textoTarefa.css('text-decoration', 'none');
        }
    });
}

function chamaPopUp() {
    $('.btn-add').on('click', function () {
        return ativaPopUp();
    })

    $('#fechar').on('click', function () {
        return fechaPopUp();
    })
}

function ativaPopUp() {
    $('.overlay').fadeIn(200);
    $('.popup').fadeIn(200);
}

function fechaPopUp() {
    $('.overlay').fadeOut(200);
    $('.popup').fadeOut(200);
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
    $('.mes').text(meses[mes]);
    $('.ano').text(ano)
    $('.dia-semana').text(diasSemana[diaSemana]);
}

function limpaTarefas() {
    $('#limpar').on('click', () => {
        $('ul').empty();
        fechaPopUp();
    })
}