import React from 'react';
import { Link } from 'react-router-dom';
export default function Card({ title }) {
  const cardData = [
    {
      title: 'Enjoy on your TV.',
      text: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      thumb: '',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      title: 'Download your shows to watch offline.',
      text: 'Save your favourites easily and always have something to watch.',
      thumb: '',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      title: 'Watch everywhere.',
      text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      thumb: '',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
      title: 'Create profiles for children.',
      text: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
      thumb: '',
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  ];
  const CardItem = ({ item }) => {
    return (
      <div>
        {/* <h1>{item.title}</h1> */}
        {/* <h2>{item.text}</h2> */}
        <Link to="/movie">
          <img src={item.url} width="250" height="250" />
        </Link>
      </div>
    );
  };
  return (
    <div>
      <h3>{title}</h3>
      {cardData.map((item) => (
        <CardItem item={item} />
      ))}
    </div>
  );
}
