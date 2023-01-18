import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.REACT_APP_PROJECT_ID, // this is from those question during 'sanity init'
  dataset: process.env.REACT_APP__DATASET || "production", // find this at manage.sanity.io or in your sanity.json
  useCdn: process.env.REACT_APP_NODE_ENV === "production",
});
// export default sanityClient({
//   projectId: "wd3ckn96", // find this at manage.sanity.io or in your sanity.json
//   dataset: "production", // this is from those question during 'sanity init'
//   useCdn: false,
//   apiVersion: "2021-08-31",
// });
