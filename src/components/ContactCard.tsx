import React from 'react'

const ContactCard:React.FC<{children?:React.ReactNode}>= ({children}) => (
    <li className='contactCard' aria-selected='true' >
        <button aria-selected="true">
            <div>name</div>
            <div>phoneNumber</div>
        </button>
    </li>
)

export default ContactCard;
