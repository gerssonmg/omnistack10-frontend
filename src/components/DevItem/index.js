import React from 'react';
import './styles.css';


// import { Container } from './styles';

export default function DevItem({ dev }) {

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <>
                <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil Github </a>
                <button className="fa fa-edit btn-form"></button>
                <button className="fa fa-trash btn-form"></button>
            </>
        </li>
    );
}
