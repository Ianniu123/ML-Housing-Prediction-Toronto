const axios = require('axios');
const fs = require('fs')

const options = {
  method: 'GET',
  url: 'https://zillow56.p.rapidapi.com/search',
  params: {
    location: 'toronto, on'
  },
  headers: {
    'X-RapidAPI-Key': '99b0909d72mshbd9ab77a45a3866p11e957jsn1a39b88f6308',
    'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
  }
};

const modifiedDatas = [];

try {
    for (let i = 0; i < 20; i++) {
        axios.request(options).then(response => {
            const datas = JSON.parse(response.data).results;
            const modifiedDatas = [];
            for (let i = 0; i < datas.length; i++) {
                const curObject = datas[i];
                const bathrooms = curObject.bathrooms;
                const bedrooms = curObject.bedrooms;
                const hometype = curObject.homeType;
                const latitude = curObject.latitude;
                const longitude = curObject.longitude;
                const price = curObject.price;
                const lotAreaValue = curObject.lotAreaValue;
            
                const newHouse = {
                    bathrooms: bathrooms,
                    bedrooms: bedrooms,
                    hometype: hometype,
                    latitude: latitude,
                    longitude: longitude,
                    price: price,
                    lotAreaValue: lotAreaValue,
                };
            
                    modifiedDatas.push(newHouse);
            }
        });
    }
    const datas = JSON.parse(response.data.results)
    

    const json = JSON.stringify(modifiedDatas);

    fs.appendFile("data.json", json, (error) => {
        if (error) {
            console.log(error);
            throw error;
        }
    });
} catch (error) {
	console.error(error);
}