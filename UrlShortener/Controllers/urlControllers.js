const urlModel = require('../models/urlModel');
const { nanoid } = require('nanoid');

async function generateUrl(req, res) {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({ message: "URL is mandatory" });
        }

        const shortUrl = nanoid(8);

        await urlModel.create({
            shorturl: shortUrl,
            actualurl: url
        });

        return res.status(201).json({
            message: "Short URL generated successfully",
            shortUrl
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
}

module.exports = { generateUrl };