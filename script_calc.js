let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

var calculated = false;

buttons.map( button => {
    button.addEventListener('click', (e) => {
        if(calculated){
            display.innerText = '';
            calculated = false;
        }

        switch(e.target.innerText){
            case 'AC':
                display.innerText = '';
                break;

            case '=':
                
                try{
                    display.innerText = eval(display.innerText);
                    calculated = true;
                } catch {
                    display.innerText = 'Błąd !';
                }
                break;

            default:
                display.innerText += e.target.innerText;    
        }
    })
})

