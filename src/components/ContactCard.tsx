import React from 'react'

interface Props {

}

const ContactCard:React.FC<Props>= () => (
    <li role="option" className='contactCard'>
        <button>
            <div>name</div>
            <div>phoneNumber</div>
        </button>
    </li>
)

export default ContactCard;
