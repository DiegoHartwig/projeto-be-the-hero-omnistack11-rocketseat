import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import imgLogo from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={imgLogo} alt="Be The Hero" />
                <span>Bem Vindo</span>

                <Link className="button" to="/incidents/new">Cadastrar um novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso de teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição de teste</p>

                    <strong>Valor</strong>
                    <p>R$ 52,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso de teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição de teste</p>

                    <strong>Valor</strong>
                    <p>R$ 52,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso de teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição de teste</p>

                    <strong>Valor</strong>
                    <p>R$ 52,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>

                <li>
                    <strong>Caso:</strong>
                    <p>Caso de teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição de teste</p>

                    <strong>Valor</strong>
                    <p>R$ 52,00</p>

                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>


        </div>
    );
}