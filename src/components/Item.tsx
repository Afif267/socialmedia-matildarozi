/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import { Box, Button, Link, Stack, Tooltip } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useEffect, useState } from 'react';
import { BoxData } from '@/interface/boxdata';

interface ItemProps {
  data: BoxData;
}
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

const Item: React.FC<ItemProps> = ({ data }) => {
  const isDarkMode = useDarkMode();
  const logoSrc = isDarkMode ? data.logoDark : data.logo;
  const boxShadowColor = isDarkMode ? 'white' : 'black';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(45deg, #0FA0E6)', 
        borderRadius: '15px',
        width: '100%',
        height: '80px',
        maxWidth: '300px',
        marginBottom: '15px',
        padding: '15px',
        boxShadow: '8px 8px 16px rgba(0,0,0,0.2)',
        transition: 'all 0.5s ease-in-out',
        animation: 'Pulse 4s infinite',
        '@keyframes Pulse': {
          '0%, 100%': {
            boxShadow: `0px 8px 8px ${boxShadowColor}`,
          },
          '50%': {
            boxShadow: `0px 0px 8px ${boxShadowColor}`,
          },
        },
        '&:hover': {
          boxShadow: '0 12px 24px rgba(0,0,0,0.5)',
          transform: 'scale(1.1)',
          transition: 'transform 0.2s ease-in-out',
        },
        '@media (min-width: 600px)': {
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          padding: '10px',
        },
        
      }}
    >
      <img src={logoSrc} alt="Logo" style={{ height: 'auto', maxHeight: '50px', marginBottom: '2px', width: '130px' }} />
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
              <InstagramIcon sx={{ color: 'white',borderRadius:'20%',  background: 'linear-gradient(39deg, rgba(255,188,65,1) 0%, rgba(193,41,166,1) 18%, rgba(221,40,125,1) 63%, rgba(147,28,156,1) 89%, rgba(155,26,183,1) 100%)', transform: 'scale(1.15)' }} />
            </Button>
          </Link>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Item;
