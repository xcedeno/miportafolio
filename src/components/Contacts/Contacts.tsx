import React from 'react';
import './Contacts.css';

interface ContactsProps {
className?: string;
}

const Contacts: React.FC<ContactsProps> = ({ className }) => {
return (
<section id="contacts" className={className}>
    <h2>Contacts</h2>
    <p>This is the contact section.</p>
</section>
);
};

export default Contacts;