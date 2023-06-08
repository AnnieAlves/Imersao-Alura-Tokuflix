import React from 'react';
import Logo from '../../assets/images/LogoTokuflixCri.png'
import SearchIcon from '../../assets/images/lupa.svg'
import LoginIcon from '../../assets/images/iconmonstr-user-19.svg'
import './Menu.css'


function Menu() {
    return (
        <nav className='Menu'>
            <a href="/">
                <img className="logo" src={Logo} alt="Logo da Tokuflix" />
            </a>

            <ul className='navMenu'>
                <li id='series' className='navLi'>
                    <a href='#'>Séries</a>

                    <ul className='sub-menu'>
                        <li>Kamen Rider</li>
                        <li>Super Sentai</li>
                        <li>Metal Hero</li>
                        <li>Kyodai Hero</li>
                        <li>Garo</li>
                        <li>Outros</li>
                    </ul>

                </li>

                <li id='filmes' className='navLi'>
                    <a href='#'>Filmes</a>

                    <ul className='sub-menu'>
                        <li>Kamen Rider</li>
                        <li>Super Sentai</li>
                        <li>Metal Hero</li>                        
                        <li>Outros</li>
                    </ul>

                </li>
                <li id='sobre' className='navLi'><a href='#'>Animações</a></li>
                <li id='sobre' className='navLi'><a href='#'>Sobre</a></li>
            </ul>

            <div className='searchBox'>
                <input type="text" class="search-bar" placeholder='Pesquisar...'></input>
                <img className='search-btn' src={SearchIcon}></img>
            </div>


            <div className='loginContainer'>
                <img className='loginIcon' src={LoginIcon}></img>
            </div>




        </nav>

    );
}

export default Menu;