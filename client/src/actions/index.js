import { GET_ARTICLE } from "./types";

// Set logged in user
export const getArticle = () => {
  const action = {
    type: GET_ARTICLE,
  };
  return action;
};
