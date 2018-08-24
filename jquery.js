

$(document).ready(function(){

    // import myexport from './main';

    // console.log(myexport);

    var produto = $('.produto');

    produto.mouseover(function(){
        $(this).css({
            "background-color": "black",
            "color": "white",
            "transition": "0.5s",
            "transform": "scale(1.2)"
        });
    });

    produto.mouseout(function(){
        $(this).css({
            "background-color": "white",
            "color": "black",
            "transition": "0.5s",
            "transform": "scale(1)"
        });
    });

    produto.click(function(){
        $(this).remove();
    })
    

    // $('div').css('background-color', 'red');
    // var li = $('li.item');
    // alert(li);
    // $('.test', '.test-2').html("Texto inserido");
    // var input = $("input[type='text']");
    // var inputs = $(':input'); // pega todos os inputs (select, radio, textarea)
    
    // alert( inputs[1].val() ); // não funciona
    // alert( $(inputs[1]).val() ); //funciona 
    // $(':input').each(function(){
    //     var elem = $(this);
    //     alert(elem.val()); //funciona
    // })

    // $('div:contains("olar")').css("font-size", "24px");
    // $('tr:odd').css('background-color', 'blue');
    // $('tr:even').css('background-color', 'lightblue');
    // $('span:first-child').css('opacity', '0.5');

    // $('input[value^="Events"]').addClass('shine'); // seleciona input cujo valor começa com "Events" > "Events menu"
    // $('input[value$="Events"]').addClass('shine'); // seleciona input cujo valor termina com "Events" > "List of Events"
    // $('input[value*="Events"]').addClass('shine'); // seleciona input cujo valor tem "Events" > "All the Events in 2018"

    // var val = $('img').attr('title');
    // $('img').attr('title', 'heading image');
    // $('img').attr({
    //     title: "heading image",
    //     style: "background-color:red;font-size:16px"
    // });

    // $('#gallery').css({
    //     'background-color': 'red',
    //     'font-size': '18px',
    //     'border': '1px solid black'
    // }).attr({
    //     'title': 'My Gallery',
    //     'class': 'options'
    // }).text('Nothing changed so far');

    // $('<div>Hey</div>').appendTo('.list');
    // $('.list').append('<div>Hey</div>');

    // $('<div>Hey</div>').prependTo('.list');
    // $('.list').prepend('<div>Hey</div>');

    // $('.list').wrap('<div id="shopping" />') // vai inserir o conteúdo de 'list' dentro de 'shopping'

    // $('.list, .phone').remove();

    // var gallery = $('#gallery');
    // gallery.addClass('carroussel break');
    // if(gallery.hasClass('break')){
    //     // do something
    // }
    // gallery.removeClass('carroussel break');
    // gallery.removeClass(); // remove todas as classes

    // gallery.click(function(){
    //     $(this).toggleClass('highlight');
    //     $('.list').text('Changing here...');
    // })

    // $('input').change(function(){
    //     alert( $(this).val() );
    // })

    // gallery.mouseenter(function(){
    //     Toggle(this);
    //     $(this).css('cursor', 'pointer');
    // }).mouseleave(function(){
    //     Toggle(this);
    // }).mouseup(function(e){
    //     alert( $(e.target).attr('id') ); // vai pegar o elemento que sofreu a ação (e) e dar o alert da id desse elemento
    //     $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY) //
    // })

    // gallery.on('mouseenter mouseleave mouseup', function(){
    //     $(this).toggleClass('highlight');
    //     $(this).css('cursor', 'pointer');
    //     if(e.type == 'mouseup'){
    //         $(this).text('X: ' + e.pageX + ' Y: ' + e.pageY);
    //     }
    // })

    // function Toggle(div) {
    //     $(div).toggleClass('highlight');
    // }

    // var tbody = $('#table tbody');
    // $('#addRow').on('click', function(){
    //     tbody.append('<tr><td>' + input.val() + '</td></tr>')
    // })
    // tbody.on('click', 'td', function(){
    //     alert( $(this).text() );
    // })

    // gallery.hover(function(){
    //     $(this).toggleClass('highlight');
    // })

    // gallery.toggle(function(){
    //     $(this).css('background-color', 'yellow');
    // }, function(){
    //     $(this).css('background-color', 'red');
    // }, function(){
    //     $(this).css('background-color', 'blue');
    // }) // a cada clique, executa uma função

});