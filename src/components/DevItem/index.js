import React, { useState } from 'react';
import './styles.css';
import api from '../../services/api';
import AlertDialog from '../AlertDialog/index';

// import { Container } from './styles';

export default function DevItem({ dev, setDevs, devs, ...props }) {

    const [divAlert, setDivAlert] = useState(null);

    async function delete_dev(nickDev) {
        const response = await api.delete('/dev',
            { data: { 'github_username': nickDev } });
        if (response.data.deletedCount === 1) {
            alert(`Usuario: ${nickDev}, removido com sucesso`);
            props.onClick();
        };

    }

    function renderAlertDialog(nickDev) {
        setDivAlert(<AlertDialog
            name={nickDev}
            onClickYes={() => alertDialogYes()}
            onClickNo={() => alertDialogNo()}
        />);
    }

    function alertDialogNo() {
        setDivAlert(null);
    }
    function alertDialogYes() {
        delete_dev(dev.github_username);
        setDivAlert(null);
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
                <button className="fa fa-trash btn-form" onClick={() => renderAlertDialog(dev.github_username)}></button>
                {divAlert}
            </>
        </li>
    );
}
