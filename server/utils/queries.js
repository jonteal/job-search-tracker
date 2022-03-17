import { gql } from '@apollo/client';

export const GET_ME = gql`
query getMe ($id: ID!) {
    getMe (_id: $id) {
        _id
        email
        firstName
        lastName
        applicationCount
        wishlist
        pending
        denials
        offers
    }
}
`