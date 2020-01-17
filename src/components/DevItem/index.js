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
                <button className="user-edit btn-form">Edit</button>
                <button className="user-remove btn-form">Remove</button>
            </>
        </li>
    );
}
