import PropTypes from 'prop-types';

function Food({name,picture,rating}){
  return (
  <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.newdaily.co.kr%2Fsite%2Fdata%2Fimg%2F2020%2F10%2F13%2F2020101300150_0.jpg&f=1&nofb=1',
    rating: 5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile238.uf.daum.net%2Fimage%2F21581D3F585B5C51288621&f=1&nofb=1',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fncc.phinf.naver.net%2Fncc02%2F2010%2F10%2F1%2F289%2Fimg01.jpg%3Ftype%3Df490_296&f=1&nofb=1',
    rating: 4.4
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.daumcdn.net%2Fthumb%2FR1280x0%2F%3Fscode%3Dmtistory2%26fname%3Dhttps%3A%252F%252Fblog.kakaocdn.net%252Fdn%252FbLw1wt%252FbtqEq87XPgt%252FhEH9H9ZEKtK3aGfoJyaVF1%252Fimg.png&f=1&nofb=1',
    rating: 4.2
  },
  {
    id: 5,
    name:'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkoreanfoodgallery.com%2Fwp-content%2Ffiles_mf%2Fkimchimom_kimbab.jpg&f=1&nofb=1',
    rating: 4.6
  }
];

function App() {
  return (
  <div>
    {foodLike.map(dish=>
    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>)}
  </div>
  );
}

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;