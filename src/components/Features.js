import React from 'react';
export default function Features({ title, text, url, direction }) {
  const featureData = [
    {
      title: 'Enjoy on your TV.',
      text: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
      url: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
    },
    {
      title: 'Download your shows to watch offline.',
      text: 'Save your favourites easily and always have something to watch.',
      url: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
    },
    {
      title: 'Watch everywhere.',
      text: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      url: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png',
    },
    {
      title: 'Create profiles for children.',
      text: 'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
      url: 'https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf',
    },
  ];
  const FeatureItem = ({ item }) => {
    return (
      <div>
        <h1>{item.title}</h1>
        <h2>{item.text}</h2>
        <img src={item.url} width="300" height="250" direction />
      </div>
    );
  };
  return (
    <div>
      {featureData.map((item) => (
        <FeatureItem item={item} />
      ))}
    </div>
  );
}
