const houses = [
  { id: 1, city: 'New York',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 3, bathrooms: 2, size: '1200 sqft', available: true, rent: 2000 },
  { id: 2, city: 'Los Angeles',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 2, bathrooms: 1, size: '800 sqft', available: true, rent: 1500 },
  { id: 3, city: 'San Francisco',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 1, bathrooms: 1, size: '600 sqft', available: false, rent: 1200 },
  { id: 3, city: 'San Francisco',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 1, bathrooms: 1, size: '600 sqft', available: false, rent: 1200 },
  { id: 3, city: 'San Francisco',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 1, bathrooms: 1, size: '600 sqft', available: false, rent: 1200 },
  { id: 3, city: 'San Francisco',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 1, bathrooms: 1, size: '600 sqft', available: false, rent: 1200 },
  { id: 3, city: 'San Francisco',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 1, bathrooms: 1, size: '600 sqft', available: false, rent: 1200 },
  { id: 3, city: 'San Francisco',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 1, bathrooms: 1, size: '600 sqft', available: false, rent: 1200 },
  { id: 3, city: 'San Francisco',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 1, bathrooms: 1, size: '600 sqft', available: false, rent: 1200 },
  { id: 3, city: 'San Francisco',img:'https://res.akamaized.net/domain/image/upload/t_web/v1629867843/65A_Champion_St_Brighton_VIC_1_bunjuj.jpg', bedrooms: 1, bathrooms: 1, size: '600 sqft', available: false, rent: 1200 },
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
