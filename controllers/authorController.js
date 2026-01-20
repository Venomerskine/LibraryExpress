const CustomNotFoundError = require("../errors/CustomNotFoundError")

const db = require("../db");


const getAuthorById = async (requestAnimationFrame, res) => {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId))

    if (!author) {
        throw new CustomNotFoundError("Author not Found")
    }

    res.send(`Author Name: ${author.name}`)
}

module.exports = { getAuthorById };
 