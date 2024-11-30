import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEnvelope, faInbox, faMailForward, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const contactus = [
  {
    icon: faComment,
    title: "Chat to support",
    desc: "we're here to help",
    href: "https://wa.me/1234567890",
    link: "Chat with us",
  },
  {
    icon: faMap,
    title: "Visit us",
    desc: "Visit our hotel",
    href: "https://facebook.com/luxurystay",
    link: "ViewonGoogleMap",
  },
  {
    icon: faEnvelope,
    title: "Email Us",
    desc: "Email us for any query",
    href: "mailto:luxurystay@gmail.com", 
    link: "luxurystay@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Us",
    desc: "Need help? Call our support team",
    href: "tel:+1234567890",
    link: "+123 456 7890",
  },
];

const ContactUs = () => {
  return (
    <div className="md:pt-40 pt-10 mx-10">
      <div className='h-1 w-20 bg-cyan-400 rounded-xl mx-auto my-5'></div>
      <h1 className="text-5xl font-bold text-white font-[Unbounded] text-center">
        Contact Our Friendly Team
      </h1>
      <p className="text-center py-2 text-lg font-extralight">Let us know how we can help</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 text-black">
        {contactus.map((contact, index) => (
         
            <div className="bg-transparent border shadow-2xl text-white p-6 rounded-lg text-left hover:scale-105 transition duration-300" key={index} >
              <FontAwesomeIcon
                icon={contact.icon}
                className="text-4xl mb-4 rounded-xl border-2 p-2 border-cyan-500"
              />
              <h3 className="text-lg font-bold pt-10">
                {contact.title}
              </h3>
              <p className="text-base font-medium title-font mb-4">
                {contact.desc}
              </p>
              <a
                className=" font-bold text-base underline text-[#CDB9FF]"
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.link}
              </a>
            </div>
         
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
