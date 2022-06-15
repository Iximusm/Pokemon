let text = document.querySelector('input[type=text]')
let btn = document.querySelector('input[type=button]')
let form = document.querySelector('form')

btn.addEventListener('click', getMusic)

function getMusic() {
    let Music = form.querySelector('input[type=text]').value.toLowerCase()
    let common = document.createElement('form')
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    
    common.innerHTML = form.innerHTML

function formsMusic(Music, src){
        form.innerHTML = ''
        p.innerHTML = Music.charAt(0).toUpperCase() + Music.slice(1);
        img.src = src
        form.appendChild(div)
        div.appendChild(p)
        div.appendChild(img)
        form.appendChild(input)
    }

    if(Music == 'pikachu'){
        let src = './images/Пикачу.jpg'
        formsMusic(Music, src)
    }
    else if(Music == 'pichu'){
        let src = './images/Pichu.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'eevee'){
        let src = './images/Eevee.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'psyduck'){
        let src = './images/Psyduck.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'leafeon'){
        let src = './images/Leafeon.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'mewtwo'){
        let src = './images/Mewtwo.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'charmander'){
        let src = './images/Charmander.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'zygarde'){
        let src = './images/zygarde.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'greninja'){
        let src = './images/Greninja.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'charizard'){
        let src = './images/Charizard.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'flareon'){
        let src = './images/Flareon.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'raichu'){
        let src = './images/Raichu.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'squirtle'){
        let src = './images/Squirtle.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'wurmple'){
        let src = './images/Wurmple.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'shaymin'){
        let src = './images/Shaymin.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'sylveon'){
        let src = './images/Sylveon.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'umbreon'){
        let src = './images/Umbreon.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'vaporeon'){
        let src = './images/Vaporeon.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'venusaur'){
        let src = './images/Venusaur.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'xerneas'){
        let src = './images/Xerneas.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'yveltal'){
        let src = './images/Yveltal.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'dedenne'){
        let src = './images/Dedenne.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'espeon'){
        let src = './images/Espeon.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'glaceon'){
        let src = './images/Glaceon.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'hoopa'){
        let src = './images/Hoopa.jpg'
        formsMusic(Music, src)
    }
    if(Music == 'jolteon'){
        let src = './images/Jolteon.jpg'
        formsMusic(Music, src)
    }
}