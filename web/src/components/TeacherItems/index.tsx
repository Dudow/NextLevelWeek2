import React from 'react'

import whatsapp from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://s4.anilist.co/file/anilistcdn/user/avatar/large/b147988-gWUxGf6r3qXR.png" alt="Perfil imagem" />
                <div>
                    <strong>Nome</strong>
                    <span>Matéria</span>
                </div>
            </header>
            <p>
                Texto
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>
                        R$20,00
                            </strong>
                </p>
                <button type="button">
                    <img src={whatsapp} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem

