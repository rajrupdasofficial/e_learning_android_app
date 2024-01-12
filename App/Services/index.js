import { request, gql } from "graphql-request";

import Constants from "expo-constants";
const MASTER_URL = Constants.expoConfig.extra.masterurl;

export const getCourseList = async (level) => {
  const query =
    gql`
    query CourseList {
      courses(where:{ level:` +
    level +
    `}) {
        id
        name
        price
        level
        tags
        time
        author
        description {
          html
          markdown
          raw
          text
        }
        banner {
          url
        }
        chapters {
          id
          title
          content {
            id
            title
            content{
              markdown
            }
            output{
              markdown
            }
          }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
