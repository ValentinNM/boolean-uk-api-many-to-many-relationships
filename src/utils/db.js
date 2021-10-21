const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient({
    log : [{
        emit: 'event',
        level: 'query',
    }]
})

prisma.$on("query", async (e) => {
    console.log(e);
});

module.exports = prisma;   // export the whole obj

// module.exports = {   
//     prisma : prisma    // exports prisma in the key's value
// };                      // when imported will have to be destructured