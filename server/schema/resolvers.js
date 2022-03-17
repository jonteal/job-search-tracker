const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { Error } = require("mongoose");
// const { models } = require('../models');
const Auth = require('../utils/auth');
const dateCheck = new Date().toISOString().toString("T")[0];
const Mongoose = require("mongoose");

const resolvers = {

    Query: {
        getMe: async (parent, args, context) => {
            if (context.user) {
                try {
                    const userData = await User.findOne({ _id: context.user._id }).select(
                        "-__v -password"
                    ).populate("followers").populate("following");
                    return userData;
                } catch (err) {
                    console.log(err);
                }
            }
            throw new AuthenticationError("You need to be logged in!");
        }
    },

    Mutation: {

        // Create a User Account
        createUser: async (parent, { email, password }) => {
            const user = await User.create({ email, password });
            const token = signToken(user);
            return { token, user };
        },

        // Login to your User Account
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
    
            if (!user) {
                throw new AuthenticationError("Incorrect credentials");
            }
    
            const correctPw = await user.isCorrectPassword(password);
    
            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }
    
            const token = signToken(user);
    
            return { token, user };
        },

        // Create an App
        // createApp: 
    }
}

module.exports = resolvers;