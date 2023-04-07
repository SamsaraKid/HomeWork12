let start_number = 1
let end_number = 15
let attempts_number = 3
let attempts = 0
let ansver = Math.floor(Math.random() * (Math.abs(start_number - end_number) + 1)) + Math.min(start_number,end_number)
console.log(ansver)



function guess(){
    let variable = Number($('#input_field').val())
    if (attempts < 2) {
        if (variable < ansver){
            $('#result').text('Ваше число меньше ответа')
            attempts+=1
        }   else if (variable > ansver){
                $('#result').text('Ваше число больше ответа')
                attempts+=1
        }   else {
                $('#result').text('Вы угадали!')
        }
    }    else {
            $('#result').text('Попытки исчерпаны :(')
            alert('Вы проиграли. Для возобновления игры обновите страницу')
    }
    $('#input_field').val('')
}


$('#guess_button').click(guess)