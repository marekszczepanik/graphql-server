const { ApolloServer, gql } = require("apollo-server");
const PORT = process.env.PORT || 4000
const typeDefs = gql`
    type Query {
        pozdrowienie: String,
        interesujaceURL: [String]
    }
`;

const dane = {
    pozdrowienie: "Kurwa to działa!!!",
    interesujaceURL: ["https://onet.pl","https://wp.pl"]
}

const serwerek = new ApolloServer({ typeDefs, rootValue: dane, playground: true, introspection: true });
serwerek.listen({port: PORT}).then((wynik) => console.log(wynik.url));