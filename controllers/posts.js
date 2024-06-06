const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Creare un nuovo post
const create = async (req, res) => {
    const { title, slug, image, content, published, category, tags } = req.body;

    const data = {
        title,
        slug,
        image,
        content,
        published: published ? true : false,
        category,
        tags
    };

    try {
        const post = await prisma.post.create({ data });
        res.status(200).send('Tutto ok');
    } catch (err) {
        console.log("Qualcosa è andato storto", err);
        res.status(500).send("<h1>Qualcosa è andato storto</h1>");
    }
}

module.exports = {
    create
}
