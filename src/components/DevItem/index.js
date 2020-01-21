import React from 'react';
import './styles.css';
import api from '../../services/api';


// import { Container } from './styles';

export default function DevItem({ dev }) {

    async function delete_dev(nickDev) {

        if (window.confirm(`Do you really want to remove this usergithub:${nickDev}`)) {
            const response = await api.delete('/dev',
                { data: { 'github_username': nickDev } });
            if (response.data.deletedCount === 1) {
                alert(`Usuario: ${nickDev}, removido com sucesso`);
            };
        }
    }



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
                <button className="fa fa-edit btn-form "></button>
                <button className="fa fa-trash btn-form" onClick={() => delete_dev(dev.github_username)}></button>
            </>
        </li>
    );
}
