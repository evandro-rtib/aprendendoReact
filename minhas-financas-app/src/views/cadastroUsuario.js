import React from 'react';

import Card from '../components/card';
import FormGroup from '../components/form-group';

class CadastroUsuario extends React.Component{
    state ={
        nome: null,
        email: null,
        senha: null,
        confirmarSenha: null

    }
    cadastrar = () => {
        console.log("Nome: ", this.state.nome);
        console.log("email: ", this.state.email);
        console.log("Senha: ", this.state.senha);
        console.log("cSenha: ", this.state.confirmarSenha);

    }

    render(){
        return (
            <div>
                <div className='container'>
                    <Card title="Cadastro de Usuário">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-component">
                                    <fieldset>
                                        <FormGroup label="Nome: *" htmlFor="inputNome" >
                                            <input  type="text"
                                                    className='form-control'
                                                    id="inputNome"
                                                    name="nome"
                                                    onChange={(e) => this.setState({nome: e.target.value})}
                                            />
                                        </FormGroup>
                                        <FormGroup label="Email: *" htmlFor="inputEmail" >
                                            <input  type="text"
                                                    className='form-control'
                                                    id="inputEmail"
                                                    name="email"
                                                    onChange={(e) => this.setState({email: e.target.value})}
                                            />
                                        </FormGroup>
                                        <FormGroup label="Senha: *" htmlFor="inputSenha" >
                                            <input  type="password"
                                                    className='form-control'
                                                    id="inputSenha"
                                                    name="senha"
                                                    onChange={(e) => this.setState({senha: e.target.value})}
                                            />
                                        </FormGroup>
                                        <FormGroup label="Confirmar Senha: *" htmlFor="inputConfirmarSenha" >
                                            <input  type="password"
                                                    className='form-control'
                                                    id="inputConfirmarSenha"
                                                    name="confirmarSenha"
                                                    onChange={(e) => this.setState({confirmarSenha: e.target.value})}
                                            />
                                        </FormGroup>
                                        <button type="button"
                                                className="btn btn-success"
                                                onClick={this.cadastrar}
                                        >Salvar</button>
                                        <button type="button" className="btn btn-danger">Cancelar</button>
                                    </fieldset>
                                </div>
                            </div>
                        </div>    
                    </Card>
                </div>
            </div>
        )
    }
}
export default CadastroUsuario;