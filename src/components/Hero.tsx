'use client'
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Item from './Item'; 
import { BoxData } from '../interface/boxdata';
import {data} from './Item.data'; 
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    // Initial check
    setIsDarkMode(matchMedia.matches);

    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, []);

  return isDarkMode;
};
const Hero: React.FC = () => {
   const isDarkMode = useDarkMode();
  const imageSrc = isDarkMode ? '../imagesdark/Mainlogo.png' : '../images/logo.png';
    return (
        <Container maxWidth="sm" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            minHeight: '100vh',
            backgroundColor: isDarkMode ? 'black' : 'white',
        }}>
            <Box
                component="img"
                sx={{
                    width: '80%',
                    maxWidth: '300px',
                    marginBottom: '20px',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                        '0%': {
                            transform: 'scale(1)',
                        },
                        '50%': {
                            transform: 'scale(1.1)',
                        },
                        '100%': {
                            transform: 'scale(1)',
                        },
                    },
                }}
                src={imageSrc}
                alt="main logo"
            />
            <Typography variant="h5" color={isDarkMode? "white":'black'} sx={{ textAlign: 'center', marginBottom: '20px' }}>
                {`Visit us on social media`}
            </Typography>
            
            {data.map((item: BoxData) => (
                <Item
                  key={item.id}
                  data={item} 
                />
            ))}
            
        </Container>
    );
}

export default Hero;
