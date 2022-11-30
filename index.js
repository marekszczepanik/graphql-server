const { ApolloServer } = require("apollo-server");
const typeDefs = `
    type Query {
        pozdrowienie: String
    }
`;
const serwerek = new ApolloServer({ typeDefs });
serwerek.listen({port:4005}).then((wynik) => console.log(wynik.url));