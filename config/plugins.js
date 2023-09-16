module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
  },
});
module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: "1MZi6Q8BEl8xgvxJXZnU-4lX6bOUEypPAhGwqxMZDD8",
      sites: [
        {
          name: "Site 1",
          id: "21fd1d90-bfa0-4e68-9ad8-74b913474db7",
          buildHook:
            "https://api.netlify.com/build_hooks/6505b091ca32911c2af41f77",
          branch: "main", // optional
        },
      ],
    },
  },
});
