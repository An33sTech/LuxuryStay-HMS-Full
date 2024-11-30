import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <div id="contact" className="md:mx-20 mx-10 min-h-screen">
        <div className=' mt-24 relative'>
          <div className='w-full h-[700px] overflow-hidden border border-cyan-500 rounded-lg'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.4258780412324!2d77.04270237615933!3d28.43657569295108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18faed819aeb%3A0xa777fdae845132a6!2sHotel%20Luxury%20Stay!5e0!3m2!1sen!2s!4v1732873960485!5m2!1sen!2s"
             width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </div>
          <div className="bg-[#121313] md:absolute bottom-4 right-20 flex flex-wrap py-6 rounded-md shadow-md md:border-none border border-cyan-500 md:mt-0 mt-10">
            <div className="lg:w-1/2 px-6">
              <h2 className="font-bold text-gray-dark border-b border-cyan-500">ADDRESS</h2>
              <p className="mt-1">Barcelona, London, United States of America</p>
              <h2 className="font-bold text-gray-dark border-b border-cyan-500">Landmark</h2>
              <p className="mt-1">Expresso Hot & Grill</p>
            </div>
            <div className="lg:w-1/2 px-6">
              <h2 className="font-bold text-gray-dark border-b border-cyan-500">EMAIL</h2>
              <a href="mailto:your@email.com" className="text-[#CDB9FF] leading-relaxed mt-1">luxurystay@gmail.com</a>
              <h2 className="font-bold text-gray-dark border-b border-cyan-500 mt-8">PHONE</h2>
              <a href="tel:123-456-7890" className="leading-relaxed mt-1">123-456-7890</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;