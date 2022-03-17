const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
        firstName: String!
        lastName: String!
        applications: [App]
    }

    type App {
        _id: ID!
        company: String!
        position: String!
        dateApplied: String!
        type: String!
        city: String!
        state: String!
        payRange: Float
        followUpDate: String
        userInterest: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        
    }
`