import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {
    const initialFieldValues = {
        nome: '',
        idade: '',
        estadocivil: '',
        cpf: '',
        cidade: '',
        estado: ''
    }

    var [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user-circle"></i>
                    </div>
                </div>
                <input className="form-control" name="nome" placeholder="Qual é o nome"
                    value={values.nome}
                    onChange={handleInputChange}
                    
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-birthday-cake"></i>
                        </div>
                    </div>

                    <input className="form-control" name="idade" placeholder="Digite a sua idade" maxlength="2"
                        value={values.idade}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-user-friends"></i>
                        </div>
                    </div>
                    <input className="form-control" name="estadocivil" placeholder="Estado Civil" maxlength="11"
                        value={values.estadocivil}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-address-card"></i>
                        </div>
                    </div>
                    <input className="form-control" name="cpf" placeholder="CPF" maxlength="11"
                        value={values.cpf}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-city"></i>
                        </div>
                    </div>
                    <input className="form-control" name="cidade" placeholder="Cidade"
                        value={values.cidade}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-map-marked"></i>
                        </div>
                    </div>
                    <input className="form-control" name="estado" placeholder="Estado"
                        value={values.estado}
                        onChange={handleInputChange}
                    />
                </div>
            <div className="form-group">
                <input type="submit" value={props.currentId === "" ? "Salvar" : "Alterar"} className="btn btn-primary btn-block" />
            </div>
        </form>
    );
}

export default ContactForm;