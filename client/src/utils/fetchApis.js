export const graphqlRequest = async (query) => {
  return fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  }).then((res) => {
    return res.json();
  });
};
