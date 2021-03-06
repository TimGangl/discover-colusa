import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import '../Press/Press.css';
import photo from '../../images/press.jpg';


function Press() {
  return (
    <>
      <div>
        <img className="img-fluid" src={photo} alt="pile of newspaper press letters"></img>
      </div>
      <Navigation />
      
        <h1 className="press-header text-center m-3 mt-5">Press Releases</h1>

        <h4 className="m-5 press-info text-center"><a className="press-info text-center" href="https://williamspioneer.com/2021/news/103951/" target="blank" rel="noreferrer"><strong>Williams Pioneer Review - April 1, 2021 -</strong> Colusa Hosts March of the Minis event on Sacramento River</a></h4>

        <h4 className="m-5 press-info text-center"><a className="press-info text-center" href="https://williamspioneer.com/2021/news/103829/" target="blank" rel="noreferrer"><strong>Williams Pioneer Review - March 25, 2021 -</strong> Colusa Airport Lands Annual Spring Fly-In</a></h4>
        <h4 className="m-5 press-info text-center"><a className="press-info text-center" href="https://www.appeal-democrat.com/colusa_sun_herald/colusa-to-host-march-of-the-minis-event/article_19f959c0-8c22-11eb-9ab7-4b0da28e9e28.html" target="_blank" rel="noreferrer"><strong>Colusa Sun Herald - March 24, 2021 -</strong> Colusa to host 'March of the Minis' event</a></h4>

        <h4 className="m-5 press-info text-center"><a className="press-info text-center" href="https://www.appeal-democrat.com/colusa_sun_herald/community-quilt-tour-planned-in-colusa/article_0eb24ba4-8677-11eb-a2b2-2bae78222897.html" target="_blank" rel="noreferrer"><strong>Colusa Sun Herald - March 17, 2021 -</strong>Community quilt tour planned in Colusa</a></h4>

        <h4 className="m-5 press-info text-center"><a className="press-info text-center" href="https://www.appeal-democrat.com/colusa_sun_herald/colusa-restaurants-mark-the-end-of-duck-season-with-special-menu-items/article_12eb648e-5f59-11eb-b68b-abe792fbc85d.html" target="_blank" rel="noreferrer"><strong>Colusa Sun Herald - Jan 27, 2021 -</strong> Colusa restaurants mark the end of duck season with special menu items</a></h4>

      

      <Footer />

    </>
  )
}

export default Press;