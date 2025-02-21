const fs = require('fs')
const path = require('path')
const conData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../config/contact.json'), 'utf8')
);
const indexData = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/index.json'), "utf8"))
const shopData = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/shop.json'), "utf8"))
const whyData = JSON.parse(fs.readFileSync(path.join(__dirname, "../config/why.json"), 'utf8'))
const testimonialData = JSON.parse(fs.readFileSync(path.join(__dirname, "../config/testimonial.json"), "utf8"))
module.exports = {conData, indexData, shopData, whyData, testimonialData}

