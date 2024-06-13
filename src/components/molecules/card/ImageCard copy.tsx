import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface ImageCardProps {
  imageUrl: string;
  title?: string;
  description?: string;
}

export const ImageCard: React.FC<ImageCardProps> = (props) => {

  const {imageUrl, title, description} = props

  return (
    <Box sx={{ position: 'relative', width: 300, margin: '0 auto' }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{
          position: 'absolute',
          top: -80, // Ajusta este valor según cuánto quieras que sobresalga la imagen
          left: '50%',
          transform: 'translateX(-50%)',
          width: '15em', // Ajusta el ancho de la imagen según tus necesidades
          height: '15em', // Ajusta la altura de la imagen según tus necesidades
        }}
      />
      <Card sx={{ marginTop: 10, paddingTop: 7, paddingBottom: 2, paddingLeft: 2, paddingRight: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};


