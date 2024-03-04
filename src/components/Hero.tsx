import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Item from './Item'; // Make sure Item is refactored to use MUI as well
import { BoxData } from '../interface/boxdata';
import {data} from './Item.data'; // Assuming this is the correct import for your data

const Hero: React.FC = () => {
    return (
        <Container maxWidth="sm" sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            minHeight: '100vh',
            backgroundColor: 'Black'
        }}>
            <Box
                component="img"
                sx={{
                    width: '80%',
                    maxWidth: '300px',
                    marginBottom: '20px'
                }}
                src='../images/Mainlogo.png'
                alt="main logo"
            />
            <Typography variant="body1" color="white" sx={{ textAlign: 'center', marginBottom: '20px' }}>
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
