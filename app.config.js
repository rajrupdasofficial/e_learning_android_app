module.exports = {
  expo: {
    scheme: "E_learning_management",
    extra: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
      masterurl: process.env.HYGRAPH_API_URL,
      eas: {
        projectId: process.env.PROJECTID,
      },
    },
    android: {
      package: "com.webstackpros.elearningapp",
    },
  },
};
