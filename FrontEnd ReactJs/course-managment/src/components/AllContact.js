import React, { useState, useEffect } from "react";
import Contact from "./Contact";

const AllContact = () => {
    const [contacts, setContacts] = useState([
        { id: 1, name: "Kalpesh", number: "1234567890" },
        { id: 2, name: "Aditya", number: "9874563217" },
        { id: 3, name: "Durvesh", number: "9647893212 " },
        { id: 4, name: "Dinesh", number: "8529637415 " },
        { id: 5, name: "Girish", number: "9638521472 " },
    ]);

    useEffect(() => {
        document.title = "Contacts";
    }, []);

    return (
        <div>
            <h1>All contacts</h1>
            <p>List of contacts are as follows</p>
            {
                contacts.length > 0 ?
                    contacts.map((contact) => <Contact key={contact.id} contact={contact} />)
                    : <p>No contacts available</p>
            }
        </div>
    );
};

export default AllContact;
