import React from 'react';

const ContactButtons = () => {
  return (
    <div 
      className="contact-buttons" 
      style={{
        position: 'fixed', 
        bottom: '20px', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '0 20px', 
        zIndex: 1000,
        pointerEvents: 'none', 
      }}
    >
      
      <a 
        href="tel:+919359401610" 
        className="call-button" 
        style={{
          backgroundColor: '#F8911B', 
        
          borderRadius: '50%',
          border : '1px solid white',
          padding: '15px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s',
          zIndex: 1001, // Ensure button is above the container
          pointerEvents: 'auto', // Allow clicks on this specific button
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#F8911B')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#F8911B')}
      >
        <img src="./images/call.png" alt="Call" style={{ width: '30px', height: '30px' }} />
      </a>

      <a 
        href="https://wa.me/+919822344091?text=Hello%20Morya%20Cabs%20Team%2C%0A%0AI%20am%20looking%20to%20book%20a%20cab%20or%20taxi%20for%20my%20trip.%20Kindly%20share%20the%20available%20options%20and%20fare%20details.%20Looking%20forward%20to%20your%20response.%20Thank You!"


        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: '#25D366', 
          borderRadius: '50%', 
          padding: '15px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s',
          zIndex: 1001,
          pointerEvents: 'auto', 
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#1DAE3E')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#25D366')}
      >
        <img src="./images/whatsapp.png" alt="WhatsApp" style={{ width: '30px', height: '30px' }} />
      </a>

    </div>
  );
};

export default ContactButtons;

