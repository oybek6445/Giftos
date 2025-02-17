const renderIndex = (req, res) => {
    res.render("index");
};
const renderContact = (req,res) =>{
    res.render("contact")
}
const renderWhy = (req, res) => {
    res.render("why")
}
const renderShop = (req,res) => {
    res.render("shop")
}
const renderTestimonial = (req,res)=>{
    res.render('testimonial')
}

module.exports = { renderIndex, renderContact, renderShop, renderWhy, renderTestimonial };
