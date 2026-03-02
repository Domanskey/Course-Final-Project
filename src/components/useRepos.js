import { useState, useEffect } from "react";

export function useRepos(username) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        // console.log(data);
      });
  }, [username]);

  return { repos };
}
