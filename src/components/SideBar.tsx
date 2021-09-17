import { useState } from 'react';

import { Button } from './Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres : GenreResponseProps[],
  selectedGenreId : number,
  eventClickButton: (id: number) => void
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.eventClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
  </nav>
  );
}