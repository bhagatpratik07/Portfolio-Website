import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "fgonx8ddl4mw",
    accessToken: "eBZHDtWu3p4fkpWWU9HL6CFgm_NoBL1irxIg69IITrQ",
    host: "cdn.contentful.com",
  });

  const getProjects = async () => {
    try {
      const entries = client.getEntries({
        content_type: "portfolioProjects",
        // select: "fields",
      });
      return entries;
    } catch (error) {
      console.log(error);
    }
  };
  return { getProjects };
};

export default useContentful;
