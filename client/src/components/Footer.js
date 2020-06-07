import React from 'react';

export default function Footer() {
  var today = new Date();
  var year = today.getFullYear();
  return (
    <div className='bg-light'>
      <footer className='container'>
        <p className='text-muted pt-3'>
          App based on a{' '}
          <a href='https://www.youtube.com/watch?v=ed8SzALpx1Q'>
            Graphql tutorial
          </a>{' '}
          from freecodecamp.org
        </p>
        <p className='text-muted pt-3'>
          <small>Alberto Marin {year}</small>
        </p>
      </footer>
    </div>
  );
}
