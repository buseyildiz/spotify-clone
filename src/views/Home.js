import Section from 'components/Section'
import React from 'react'
import songs from 'data/songs'

function Home() {



  return (
    <div className='grid gap-y-8'>
      <Section title="Recently played" more="/blabla" items={songs}/>
      <Section title="Shows to try" more="/blabla" items={songs}/>
      <Section title="Made for Buse Yıldız" more="/blabla" items={songs}/>
    </div>
  )
}

export default Home