module.exports = {
  expo: {
    scheme: "myapp",
    extra: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
      masterurl: process.env.HYGRAPH_API_URL,
    },
  },
};
