import React from 'react';
import { Grid } from '@mui/material';
import { ImageCard } from '@/components/molecules/card/ImageCard';
import { Title } from '@/components/atoms/text/Title';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

interface CardSectionProps {
  cards: CardProps[];
  sectionTitle: string;
}

export const CardSection: React.FC<CardSectionProps> = (props) => {
  const { cards, sectionTitle } = props;
  return (
    <Grid
      container
      spacing={1}
      rowSpacing={5}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Grid item xs={12}>
        <Title text={sectionTitle} sx={{ marginLeft: '0.4em', marginBottom: '1em' }} />
      </Grid>
      {cards.map((card, idx) => (
        <Grid item key={idx} xs={12} sm={12} md={6} lg={4} xl={3}>
          <ImageCard
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
};