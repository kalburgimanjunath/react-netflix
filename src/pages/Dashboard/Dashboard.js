import React from 'react';
import Card from '../Card';
export default function Dashboard({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <Card title="Top Pics of ----" />
      <Card title="Trending Now" />
      <Card title="You Watched recently" />
      <Card title="New Releases" />
      <Card title="Genres" />
    </>
  );
}
