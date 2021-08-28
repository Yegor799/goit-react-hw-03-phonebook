import React, { Component } from 'react';
import "./App.css"
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import shortid from 'shortid';


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

    componentDidMount(){
      const contacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contacts);

      if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
      }
    }
  
    componentDidUpdate(prevProps, prevState){
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

      if (nextContacts !== prevContacts){
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }  
  

  formSubmitHandler = data => {
    const { name, number } = data;

    const duplicateName = this.state.contacts.find(contact => contact.name === name);

    duplicateName ? alert(`${name} is already in contacts`) : this.addName(name, number);

  }

  addName = (text, number) => {

    const name = {
      id: shortid.generate(),
      name: text,
      number: number,
    }

    this.setState(prevState => ({
      contacts: [name, ...prevState.contacts],
    }));
  }


  getfilteredNames = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  handleFilterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }



  render() {

    const filteredNames = this.getfilteredNames();

    return (

      <div className="Container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.handleFilterChange} />

        <ContactList names={filteredNames} onDeleteContact={this.deleteContact} />

      </div>
    )
  }
}

export default App;
