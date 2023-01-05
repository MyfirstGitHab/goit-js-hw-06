const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const GALLERY =document.querySelector(".gallery");
// console.log(GALLERY);
// const list=images.map(({url,alt})=>{
//   const liElement=document.createElement('li');
//   const AElement=document.createElement('a');
//   const imageElement=document.createElement('img');
//   liElement.classList.add("gallery-item")
//   imageElement.src=url;
//   imageElement.alt=alt;
//   AElement.href='#';
//   AElement.append(imageElement);
//   liElement.append(AElement);
//   console.log(liElement);
//   return liElement;
// });
// GALLERY.append(...list);



const gallery =document.querySelector(".gallery");
const list=images.map(({url,alt})=>{
  return `<li class="gallery-item"><a href="#"><img src="${url}" alt="${alt}" </img></a></li>`;
});
const listItem = list.join('');
gallery.innerHTML=list;