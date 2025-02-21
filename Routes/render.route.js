const express = require('express');
const renderRouter = express.Router();

const renderController = require("../controller/render.controller.js");

renderRouter.get("/", renderController.renderIndex);
renderRouter.get('/index', renderController.renderIndex)
renderRouter.get('/shop', renderController.renderShop)
renderRouter.get('/why', renderController.renderWhy)
renderRouter.get("/contact", renderController.renderContact)
renderRouter.get("/testimonial", renderController.renderTestimonial)


module.exports = renderRouter;
