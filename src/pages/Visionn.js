import React, { useState, useEffect } from 'react';

const Visionn = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sectionStyle = {
        padding: isMobile ? '0px' : '40px',
        backgroundColor: '#f8f9fa',
        margin: '0 auto', // Ensure the section is centered
    };

    const containerStyle = {
        maxWidth: isMobile ? '100%' : '1200px',
        margin: '0 auto',
        padding: '0 15px',
    };

    const rowStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        gap: '20px',
    };

    const colStyle = {
        flex: '1',
        minWidth: isMobile ? '100%' : '300px',
        // padding: '15px',
        boxSizing: 'border-box',
        marginBottom: isMobile ? '20px' : '0', // Add margin bottom for mobile layout
    };

    const headingStyle = {
        textAlign: 'center',
        paddingBottom: '20px',
        fontSize: isMobile ? '24px' : '32px',
        color: '#343a40',
    };

    const visionContentStyle = {
        backgroundColor: '#08B5A8',  // Light yellow background
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        color: 'white',  // Dark text for contrast
    };

    const sectionTitleStyle = {
        color: '#F8911B',  // Yellow color for titles
    };
    const sectionTitleStylee ={
        color :'white'
    }

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <h3 style={{ ...headingStyle, ...sectionTitleStyle }}>About Our Vision & Mission</h3>
                <div style={rowStyle}>
                    <div style={colStyle}>
                        <div style={visionContentStyle}>
                            <h4 style={sectionTitleStylee}>Vision</h4>
                            <p className='text-white'>
                            At Morya Cab, our vision is to be the most trusted and preferred cab service, dedicated to providing seamless, comfortable, and reliable travel experiences. We strive to redefine road travel by ensuring punctuality, safety, and customer satisfaction at every step of the journey. With a focus on innovation and excellence, we aim to make every ride with us more than just transportation—it’s about creating memorable journeys that connect people to their destinations with ease and comfort. 🚖✨
                            </p>
                        </div>
                    </div>
                    <div style={colStyle}>
                        <div style={visionContentStyle}>
                            <h4 style={sectionTitleStylee}>Mission</h4>
                            <p className='text-white'>
                            At Morya Cab, our mission is to provide safe, reliable, and hassle-free travel solutions tailored to the needs of our customers. We are committed to offering well-maintained vehicles, professional drivers, and seamless booking experiences to ensure every journey is smooth and enjoyable. By prioritizing punctuality, customer satisfaction, and affordability, we aim to make travel stress-free and accessible. Whether it’s a city ride or a journey, Morya Cab is dedicated to delivering excellence on every trip. 🚖
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visionn;
