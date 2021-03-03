'use strict';

/**** Array of Image Objects *****/
const imgFlower = [
  {
    id: 1,
    title: 'Cherry Blossoms',
    description: 'A branch filled with pink cherry blossoms in full bloom, in full sunlight.',
    width: 500,
    height: 500,
    pathURL:'assets/images/cherry.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Keytion',
    creditLink: '<a href="https://unsplash.com/photos/t3U04Y5HWAo',
    alt: 'cherry blossom'
  },
  {
    id: 2,
    title: 'Dahlias',
    description: 'Fully bloomed bright red dahlias with yellow detailing and green lush leaves.',
    width: 500,
    height: 500,
    pathURL:'assets/images/dahlia.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Rebeil Vincent',
    creditLink: '<a href="https://unsplash.com/photos/CTvtrspsPQs',
    alt: 'dahlia'
  },
  {
    id: 3,
    title: 'Daisies',
    description: 'A single white daisy with a bright yellow center and a lush green stem.',
    width: 500,
    height: 500,
    pathURL:'assets/images/daisy.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Larry Clarkin',
    creditLink: '<a href="https://unsplash.com/photos/YesI44-QPAQ',
    alt: 'daisy'
  },
  {
    id: 4,
    title: 'Hydrangeas',
    description: 'A full spread of fully bloomed light pink and light blue hydrangeas with a light sprinkle of dew drops.',
    width: 500,
    height: 500,
    pathURL:'assets/images/hydrangea.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower',
    credit: 'Irina Iriser',
    creditLink: '<a href="https://unsplash.com/photos/YNMoV6YHXFY',
    alt: 'hydrangea'
  },
  {
    id: 5,
    title: 'Lilacs',
    description: 'A bundle of vibrant purple lilacs with hotpink centers and stems with a lush green background.',
    width: 500,
    height: 500,
    pathURL:'assets/images/lilac.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Achim Ruhnau',
    creditLink: '<a href="https://unsplash.com/photos/xzQPpD6_OQc ',
    alt:'lilac'
  },
  {
    id: 6,
    title: 'Lillies',
    description: 'A close up of a light purple lilly in full bloom with the evening sun shining on it lightly.',
    width: 500,
    height: 500,
    pathURL:'assets/images/lily.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Dominik Scythe',
    creditLink: '<a href="https://unsplash.com/photos/gRlqFXGClQ4',
    alt:'lilly'
  },
  {
    id: 7,
    title: 'Lotus Flowers',
    description: 'A single baby pink lotus flower growing atop a lily pad on a pond.',
    width: 500,
    height: 500,
    pathURL:'assets/images/lotus.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Arron Choi',
    creditLink: '<a href="https://unsplash.com/photos/wfJxgrM1AuA',
    alt:'lotus'
  },
  {
    id: 8,
    title: 'Peonies',
    description: 'A spectacular large baby ink peony in fully bloom contrasting perfectly to a dark green background of leaves.',
    width: 500,
    height: 500,
    pathURL:'assets/images/peony.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Yin Wong',
    creditLink: '<a href="https://unsplash.com/photos/SMFLG46c5S4',
    alt:'peony'
  },
  {
    id: 9,
    title: 'Poppies',
    description: 'A couple of bright red poppies standing in a full green field full of red little blooms all over.',
    width: 500,
    height: 500,
    pathURL:'assets/images/poppy.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Ian Taylor',
    creditLink: '<a href="https://unsplash.com/photos/sHix7cx-EsE',
    alt:'poppy'
  },
  {
    id: 10,
    title: 'Roses',
    description: 'A dozen classic red roses sitting perfecty in a metal vase basking in the sunlight.',
    width: 500,
    height: 500,
    pathURL:'assets/images/rose.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Garreth Paul',
    creditLink: '<a href="https://unsplash.com/photos/Aksx_ZoBWIs',
    alt:'rose'
  },
  {
    id: 11,
    title: 'Sunflowers',
    description: 'A single large yellow sunflower fully bloomed with a big bumble bee roaming around the core.',
    width: 500,
    height: 500,
    pathURL:'assets/images/sunflower.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Rosie Kerr',
    creditLink: '<a href="https://unsplash.com/photos/ZgM7nVYJ9GA',
    alt:'sunflower'
  },
  {
    id: 12,
    title: 'Tulips',
    description: 'Bright pink tulips almost ready to bloom with plump green leaves and stems.',
    width: 500,
    height: 500,
    pathURL:'assets/images/tulip.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Flower', 
    credit: 'Alana Harris',
    creditLink: '<a href="hhttps://unsplash.com/photos/4IfHWBdMJRc',
    alt:'tulip'
  }
];

/***** Loop that displays the gallery *****/

const object = document.querySelector('.object');

for (let i = 0; i < imgFlower.length; i++) {

/***** Figure that holds all of the object content *****/

  const figure = document.createElement('figure');  
  figure.style.maxWidth = `${imgFlower[i].width}px`;
  object.appendChild(figure);  

/***** Image Title *****/

  const title = document.createElement('h2');
  title.innerText = `${imgFlower[i].title}`;
  figure.appendChild(title);

/*****  Wikipdia link *****/
  
  const wikiLink = document.createElement('a');
  wikiLink.href = `${imgFlower[i].linkURL}`;
  wikiLink.target = '_blank';
  figure.appendChild(wikiLink);

/***** Image linked and accessibiility added *****/

  const figLinkImg = document.createElement('img');
  figLinkImg.src = `${imgFlower[i].pathURL}`;
  figLinkImg.alt = `${imgFlower[i].description}`;
  wikiLink.appendChild(figLinkImg);

/***** Image credit added *****/

  const figCap = document.createElement('figcaption');
  figure.appendChild(figCap);
  const figCapLink = document.createElement('a');
  figCapLink.innerText = `Image belongs to ${imgFlower[i].credit}`;
  figCap.appendChild(figCapLink);  
}