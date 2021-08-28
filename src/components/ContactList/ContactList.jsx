import "./ContactList.css";

const ContactList = ({ names, onDeleteContact }) => {
    return (
        <ul className="ContactList">
          {names.map(({ id, name, number }) => (
            <li key={id} className="ContactList__item">
              <p>{name}: {number}</p>
              <button onClick={() => onDeleteContact(id)} className="ContactList__button">Delete</button>
            </li>
            
          ))}
        </ul>
    )
}

export default ContactList;