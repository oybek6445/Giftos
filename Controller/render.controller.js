const data = require('../service/data.service.js');

const renderIndex = (req, res) => {
    res.render("index", data.indexData);
};
const renderContact = (req, res) => {
    res.render("contact", data.conData);
};
 
const renderWhy = (req, res) => {
    res.render("why", data.whyData)
}
const renderShop = (req,res) => {
    res.render("shop", data.shopData)
}
const renderTestimonial = (req,res)=>{
    res.render('testimonial', data.testimonialData)
}

module.exports = { renderIndex, renderContact, renderShop, renderWhy, renderTestimonial };
