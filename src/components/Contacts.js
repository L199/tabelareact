import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

const Contacts = () => {
  
	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})

    //Once components load complete
    useEffect(() => {
        firebaseDb.child('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])
    
    const addOrEdit = (obj) => {
        if (currentId === '') 
            firebaseDb.child('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
            firebaseDb.child(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
    }
 
    const onDelete = id => {
        if (window.confirm('Tem certeza que deseja deletar este registro?')) {
            firebaseDb.child(`contacts/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }
  
  return (
        <React.Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Descrição da Tabela</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm {...({ currentId, contactObjects, addOrEdit })} ></ContactForm>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>Estado Civil</th>
                                <th>CPF</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        <td>{contactObjects[key].nome}</td>
                                        <td>{contactObjects[key].idade}</td>
                                        <td>{contactObjects[key].estadocivil}</td>
                                        <td>{contactObjects[key].cpf}</td>
                                        <td>{contactObjects[key].cidade}</td>
                                        <td>{contactObjects[key].estado}</td>
                                        <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-edit"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contacts;