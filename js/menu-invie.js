const $body = document.body
// console.log($body);
const $buttonBurguer = document.getElementById('buttonBurger');
// console.log($buttonBurguer);
const $menuBurger = document.querySelector('.menu');
// console.log($menuBurger);


let movile = window.matchMedia(`screen and (max-width: 480px)`);
validate(movile);
movile.addListener(validate);


function hiddenMenu()
{
    $menuBurger.classList.remove('is-active');
}
function showMenu()
{
    $menuBurger.classList.add('is-active');
}
function menuInterection()
{
    if ($menuBurger.classList.contains('is-active'))
    {
        console.log('hidden');
        hiddenMenu();
    }
    else
    {
        console.log('show');
        showMenu();
    }
}
function validate(event)
{
    if(event.matches)
    {
        console.log(movile.matches);
        $buttonBurguer.addEventListener('click', menuInterection);
    }
    else
    {
        console.log(movile.matches);
        $buttonBurguer.removeEventListener('click', menuInterection);
    }
}

var hammertime = new Hammer($body);

hammertime.on('swiperight', showMenu);
hammertime.on('swipeleft', hiddenMenu);