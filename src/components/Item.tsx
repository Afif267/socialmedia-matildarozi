import React from 'react';
import { Box, Button, Link, Stack, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

interface BoxData {
  logo: string;
  facebook: string;
  instagram: string;
}

interface ItemProps {
  data: BoxData;
}

const Item: React.FC<ItemProps> = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(45deg, #0FA0E6, #FF8E53)', // Gradient background
        borderRadius: '15px',
        width: '100%',
        height: '80px',
        maxWidth: '300px',
        marginBottom: '15px',
        padding: '15px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        transition: 'all 0.5s ease-in-out',
        animation: 'glowPulse 2s infinite',
        '@keyframes glowPulse': {
          '0%, 100%': {
            boxShadow: '0 0 8px rgba(0,0,0,0.2), 0 0 10px rgba(255, 168, 76, 0.6)',
          },
          '50%': {
            boxShadow: '0 0 8px rgba(0,0,0,0.2), 0 0 15px rgba(255, 168, 76, 0.9)',
          },
        },
        '&:hover': {
          boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
          transform: 'scale(1.4)',
          transition: 'transform 0.2s ease-in-out',
        },
        '@media (min-width: 600px)': {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: '10px',
        },
        
      }}
    >
      <img src={data.logo} alt="Logo" style={{ height: 'auto', maxHeight: '50px', marginBottom: '2px', width: '110px' }} />
      <Stack direction="row" gap={4}>
        <Tooltip title="Visit our Facebook page" arrow>
          <Link href={data.facebook} underline="none">
            <Button
              sx={{
                minWidth: '0px',
                padding: '0px',
                '&:hover': {
                  transform: 'rotate(360deg)',
                  transition: 'transform 0.5s ease-in-out',
                },
              }}
            >
              <FacebookIcon sx={{ color: 'blue', background: 'transparent', transform: 'scale(1.5)' }} />
            </Button>
          </Link>
        </Tooltip>
        <Tooltip title="Visit our Instagram page" arrow>
          <Link href={data.instagram} underline="none">
            <Button
              sx={{
                minWidth: '0px',
                padding: '0px',
                '&:hover': {
                  transform: 'rotate(360deg)',
                  transition: 'transform 0.5s ease-in-out',
                },
              }}
            >
              <InstagramIcon sx={{ color: 'red', background: 'transparent', transform: 'scale(1.5)' }} />
            </Button>
          </Link>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Item;
