// AllContact.js
import React from "react";
import Contact from "./Contact";

const AllContact = () => {
    const contacts = [
        { id: 1, name: "Kalpesh", number: "1234567890" },
        { id: 2, name: "Aditya", number: "9874563217" },
        { id: 3, name: "Durvesh", number: "9647893212 " },
        { id: 4, name: "Dinesh", number: "8529637415 " },
        { id: 5, name: "Girish", number: "9638521472 " },
    ];

    return (
        <div>
            <h1>All contacts</h1>
            <p>List of contacts are as follows</p>
            {
                contacts.length > 0 ?
                    contacts.map((contact) => <Contact key={contact.id} contact={contact} />)
                    : "No contacts available"
            }
        </div>
    );
};

export default AllContact;

