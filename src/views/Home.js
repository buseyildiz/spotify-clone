import Section from 'components/Section'
import React from 'react'

function Home() {

  const items =[
    {
      id:1,
      title:"Intouchables - Soundtracks OST",
      description:"Original Soundtrack",
      image:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71D09Cp-yVL._AC_SL1500_.jpg",
      type:"album"
    },
    {
      id:2,
      title:"Ertelemek",
      description:"Podcast",
      image:"https://img.freepik.com/free-vector/gradient-podcast-cover-template_23-2149449551.jpg?w=2000",
      type:"podcast"
    },
    {
      id:3,
      title:"Sefo",
      description:"Artist",
      image:"https://i.hbrcdn.com/haber/2021/08/19/sefo-kimdir-gercek-adi-ne-rapci-sefo-kac-14341283_4216_amp.jpg",
      type:"artist"
    },
    {
      id:4,
      title:"Murda",
      description:"Senin için favori",
      image:"https://thisis-images.scdn.co/37i9dQZF1DZ06evO1sBW15-default.jpg",
      type:"album"
    },
    {
      id:5,
      title:"Starboy",
      description:"The Weeknd",
      image:"https://productimages.hepsiburada.net/s/6/375/9723685896242.jpg",
      type:"album"
    }
  ]


  return (
    <div className='grid gap-y-8'>
      <Section title="Recently played" more="/blabla" items={items}/>
      <Section title="Shows to try" more="/blabla" items={items}/>
      <Section title="Made for Buse Yıldız" more="/blabla" items={items}/>
    </div>
  )
}

export default Home