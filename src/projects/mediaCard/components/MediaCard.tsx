import React from 'react';
import './MediaCard.css';

export interface MediaCardProps {
  author: string;

  article: string;

  imageURL: string;
  title: string;
  /**
   * Class name for tab content
   */
  className?: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  author,
  article,
  title,
  imageURL,
}) => {
  return (
    <div className="media-card">
      <img className="media-card__image" src={imageURL} />
      <div className="media-card__author">{author}</div>
      <article className="media-card__article">
        <h3 className="media-card__title">{title}</h3>
        <div>{article}</div>
      </article>
    </div>
  );
};

export default MediaCard;
