import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    React.createElement(Typography, { variant: "body2", color: "text.secondary" },
      'Copyright © ',
      React.createElement(Link, { color: "inherit", href: "https://mui.com/" }, 'Your Website'),
      ' ',
      new Date().getFullYear(),
      '.'
    )
  );
}

export default function Footer() {
  return (
    React.createElement(Box, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }
    },
    React.createElement(CssBaseline, null),
    React.createElement(Container, {
        component: "main",
        sx: { mt: 8, mb: 2 },
        maxWidth: "sm"
    },
    React.createElement(Typography, { variant: "h2", component: "h1", gutterBottom: true },
        'Sticky footer'
    ),
    React.createElement(Typography, { variant: "h5", component: "h2", gutterBottom: true },
        'Pin a footer to the bottom of the viewport.',
        'The footer will move as the main element of the page grows.'
    ),
    React.createElement(Typography, { variant: "body1" },
        'Sticky footer placeholder.'
    )
    ),
    React.createElement(Box, {
        component: "footer",
        sx: {
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
        }
    },
    React.createElement(Container, { maxWidth: "sm" },
        React.createElement(Typography, { variant: "body1" },
            'My sticky footer can be found here.'
        ),
        React.createElement(Copyright, null)
    )
    )
    )
  );
}
