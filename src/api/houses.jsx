const houses =[
  {
    "city": "uttara",
    "img": "https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg",
    "bedrooms": 3,
    "bathrooms": 2,
    "size": "1200 sqft",
    "available": true,
    "rent": 2000
  },
  {
    "city": "shankar house",
    "img": "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg",
    "bedrooms": 2,
    "bathrooms": 1,
    "size": "800 sqft",
    "available": true,
    "rent": 1500
  },
  {
    "city": "rupnagar",
    "img": "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg",
    "bedrooms": 6,
    "bathrooms": 4,
    "size": "600 sqft",
    "available": false,
    "rent": 1200
  },
  {
    "city": "mirpur-11",
    "img": "https://www.inventiva.co.in/wp-content/uploads/2022/09/luxury-house-demand.jpg",
    "bedrooms": 1,
    "bathrooms": 1,
    "size": "600 sqft",
    "available": false,
    "rent": 1200
  },
  {
    "city": "dhanmondi",
    "img": "https://cdn.realestateview.com.au/images/listing/5-bedroom-house-in-putney-nsw-2112/400-w/14243135-1-CE9F726.jpg",
    "bedrooms": 3,
    "bathrooms": 2,
    "size": "600 sqft",
    "available": false,
    "rent": 1200
  },
  {
    "city": "mirpur-12",
    "img": "https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg",
    "bedrooms": 1,
    "bathrooms": 1,
    "size": "600 sqft",
    "available": false,
    "rent": 1200
  },
  {
    "city": "mirpur-6",
    "img": "https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg",
    "bedrooms": 4,
    "bathrooms": 2,
    "size": "600 sqft",
    "available": false,
    "rent": 1200
  },
  {
    "city": "mirpur-2",
    "img": "https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg",
    "bedrooms": 6,
    "bathrooms": 4,
    "size": "600 sqft",
    "available": false,
    "rent": 1200
  },
  {
    "city": "mirpur-1",
    "img": "https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg",
    "bedrooms": 3,
    "bathrooms": 2,
    "size": "600 sqft",
    "available": false,
    "rent": 1200
  },
  {
    "city": "dhaka",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN1_QpdPgdtsNn0cEuj8XZoWCScwsfBgoCPQO0J_TucJctR1mcDJJDyV0TkU5g06xtB6E&usqp=CAU",
    "bedrooms": 2,
    "bathrooms": 1,
    "size": "600 sqft",
    "available": false,
    "rent": 1200
  }

];

const getHouses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(houses);
    }, 500);
  });
};

const searchHouses = (params) => {
  return new Promise((resolve) => {
    const filteredHouses = houses.filter((house) => {
      if (params.city && house.city.toLowerCase() !== params.city.toLowerCase()) {
        return false;
      }
      if (params.bedrooms && house.bedrooms !== Number(params.bedrooms)) {
        return false;
      }
      if (params.bathrooms && house.bathrooms !== Number(params.bathrooms)) {
        return false;
      }
      return true;
    });
    resolve(filteredHouses);
  });
};

export default {
  getHouses,
  searchHouses,
};
