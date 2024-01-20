const fs = require('fs')

fs.readFile("data1.json", (error, data) => {
    if (error) {
        console.error(error);
        throw err;
    }

    const datas = JSON.parse(data).results;
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
    const json = JSON.stringify(modifiedDatas);

    fs.appendFile("data.json", json, (error) => {
        if (error) {
            console.log(error);
            throw error;
        }
    });
})
