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

// Mostrare tutti i post
const index = async (req, res) => {
    let html
    try {
        const where = {};
        const { published } = req.query;
        // False
        if (published == 'false') {
            where.published == 'false'
            const posts = await prisma.post.findMany({ where });

            html = '<h1>Posts</h1>';
            html += '<ul>';
            posts.forEach(post => {
                html += `<li>${post.title}</li>`;
            });
            html += '</ul>';

        } else {
            where.published = true
            const posts = await prisma.post.findMany({ where });

            html = '<h1>Posts</h1>';
            html += '<ul>';
            posts.forEach(post => {
                html += `<li>${post.title}</li>`;
            });
            html += '</ul>';
        }
        res.status(200).send(html);
    }
    catch (err) {
        console.log("Qualcosa è andato storto", err);
        res.status(500).send("<h1>Qualcosa è andato storto</h1>");
    }
}

// Show
const show = async (req, res) => {
    try {
        const { slug } = req.params;
        const post = await prisma.post.findUnique({
            where: { slug } // Utilizza direttamente lo slug come stringa
        });
        if (post) {
            let html = `<h1>${post.title} ha come slug ${post.slug}</h1>`;
            res.status(200).send(html);
        } else {
            let html = "<h1>Post non trovato</h1>";
            res.status(404).send(html);
        }
    } catch (err) {
        console.log("Errore:", err);
        res.status(500).send("<h1>Qualcosa è andato storto</h1>");
    }
}
module.exports = {
    create,
    index,
    show
}
