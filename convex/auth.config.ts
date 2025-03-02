if(!process.env.CLERK_ISSUE_URL) {
    throw new Error("Missing CLERK_ISSUE_URL");
    }


const auth_config= {
    providers: [
      {
        domain: process.env.CLERK_ISSUE_URL,
        applicationID: "convex",
      },
    ]
  };

export default auth_config;  