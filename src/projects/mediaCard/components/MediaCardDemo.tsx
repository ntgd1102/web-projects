import React from 'react';

import MediaCard from './MediaCard';

export const MediaCardDemo: React.FC = () => {
  const article =
    'Rhenium lies two places below manganese in group 7 of the ' +
    'periodic table and its existence was predicted by Mendeleev ' +
    'in 1869. In fact, when his periodic system was first published, ' +
    'group 7 was rather unique because it contained only one element known ' +
    'at the time — manganese — and had at least two gaps below it. ' +
    'The first gap was eventually filled by element 43, technetium1, ' +
    'with the second gap being filled by element 75, rhenium.';
  return (
    <MediaCard
      author={'Author 1989'}
      title="Article Title"
      article={article}
      imageURL={'https://picsum.photos/320/240?random=3'}
    />
  );
};
