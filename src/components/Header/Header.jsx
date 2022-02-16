import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png" alt="logo"/>
        </header>
    )
}

export default Header
