module.exports = {
  expo: {
    scheme: "MyApp",
    extra: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
      masterurl: process.env.HYGRAPH_API_URL,
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
      webClientId: process.env.webClientId,
      eas: {
        projectId: "26c2b31a-ac74-454d-9c73-e93be0dbb3cf",
      },
    },
    android: {
      package: "com.webstackpros.elearningapp",
    },
  },
};
