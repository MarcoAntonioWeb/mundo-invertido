
import { subscribeToHellfireClub } from './firebase/hellfire-clube.js'

// Todos od dados do formulario
const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');
const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        Character: txtCharacter.value 
    }
        //Salvar no banco de dados! 
        subscribeToHellfireClub(subscription)

        txtName.value = ""
        txtEmail.value = ""
        txtLevel.value = ""
        txtCharacter.value = ""

})