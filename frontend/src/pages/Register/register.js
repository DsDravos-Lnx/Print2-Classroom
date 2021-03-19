import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import './register.css'
import api from '../../services/api'

export default function Register(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handlerRegister(e){
        e.preventDefault()

        const data = {
            name,
            email,
            password
        }

        console.log(data)
        try {
            const response = await api.post('users', data)
            alert(`Seu cadastro foi realizado com sucesso`)

            history.push('/')
        } catch (err){
            alert('Erro no cadastro, tente novamente')
        }
    }

return (
    <div id="body-register">
        <h1 className="title"> GOOGLE SALA DE AULA</h1>

        <div className="register">
            <div className="content-wra">
                <h1>Crie sua conta</h1>
                <h3>Faça seu cadastro para entrar na plataforma</h3>

                <form onSubmit={handlerRegister}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nome Completo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="email" 
                            name="name" 
                            placeholder="E-mail" 
                            value={email}    
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group-password">
                        <input 
                            type="password" 
                            name="name" 
                            placeholder="Senha" 
                            value={password}    
                            onChange={e => setPassword(e.target.value)}
                        />
                        
                    </div>

                    <div className="viewpass">
                        <label> <input type="checkbox" name="checkbox" value="value"/> Mostrar senha</label>
                    </div>

                    <div className="create-cont"> 
                        <Link to="/">Faça login em vez disso</Link>
                    </div>

                    <button className="buttom" type="submit">Entrar</button>
                    
                </form>
            </div>
        </div>
    </div>
)}
