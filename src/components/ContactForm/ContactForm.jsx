import React, { Component } from "react";
import "./ContactForm.css"


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }


  handleChange = ({currentTarget}) => {
    const { name, value } = currentTarget;
        this.setState({
            [name]: value,
        })
  }
  
  
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  }

  reset = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

    render(){
        return (
            <>
        
        <form onSubmit={this.handleSubmit} className="ContactForm">
        <p>Name</p>
        <label htmlFor="">
          <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              onChange={this.handleChange}
              required
          />
          </label>
        
        <p>Number</p>     
        <label htmlFor="">
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              onChange={this.handleChange}
              required
         />
        </label>

          <button type="submit" className="ContactForm__button" >Add contact</button>
        </form>
        </>
        )
    }
}

export default ContactForm;


