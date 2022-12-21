import React from 'react'

const ContactList:React.FC<{children:React.ReactNode}> = ({children})=>(
    <ul className='contactList'>{children}</ul>
)

const ContactCard:React.FC<{children?:React.ReactNode}>= ({children}) => (
    <li className='concatCard'>
        <button>
            <div>name</div>
            <div>phoneNumber</div>
        </button>
    </li>
)

export default ContactList