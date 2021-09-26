export default (price) => {
    const priceConvert = parseInt(price, 10);
    if (priceConvert % 10000000 === 0) {
        return `${priceConvert/10000000} chục triệu vnđ`;
    }
    else if (priceConvert % 1000000 === 0) {
        return `${priceConvert/1000000} triệu vnđ`;
    }
    else if (priceConvert % 100000 === 0) {
        return `${priceConvert/100000} trăm vnđ`;
    }
    else if (priceConvert % 10000 === 0) {
        return `${priceConvert/10000} chục ngàn vnđ`;
    }
    else if (priceConvert % 1000 === 0) {
        return `${priceConvert/1000} ngàn vnđ`;
    }
}