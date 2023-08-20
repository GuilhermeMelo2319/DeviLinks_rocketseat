function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector('#profile img');
    if(html.classList.contains('light')){
        img.setAttribute('src', './Assets/avatar-light.png');
        img.setAttribute('alt', 'foto de perfil do usuário com óculos de sol');
    }else{
        img.setAttribute('src', './Assets/avatar.png');
        img.setAttribute('alt', 'foto de perfil do usuário');
    }
}