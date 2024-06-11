import {ApolloCache, ApolloClient,InMemoryCache,createHttpLink} from "@apollo/client";

// no subscription required for develop process

const httpLink = createHttpLink({
    uri: "http://localhost:3007/graphql"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default client;