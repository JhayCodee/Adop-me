import { useState, useEffect } from "react";

// This is a custom hook that will be used in the SearchParams component
// It will fetch the list of breeds for the selected animal

// This is a cache to store the breeds for each animal
const localCache = {};

// This is the custom hook
export default function useBreedList(animal) {
  // This is the state that will hold the list of breeds
  const [breedList, setBreedList] = useState([]);

  // This is the state that will hold the status of the fetch
  const [status, setStatus] = useState("unloaded");

  // This is the effect that will fetch the list of breeds
  useEffect(() => {
    // If there is no animal selected, then set the breedList to an empty array
    // If the animal is already in the cache, then set the breedList to the cached value
    // Otherwise, fetch the list of breeds for the selected animal

    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    // This is the async function that will fetch the list of breeds
    async function requestBreedList() {
      // Set the status to loading
      // Set the breedList to an empty array
      setBreedList([]);
      setStatus("loading");

      // Fetch the list of breeds for the selected animal
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();

      // Set the status to loaded
      // Set the breedList to the list of breeds for the selected animal
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
    // This is the dependency array for the effect
  }, [animal]);

  // Return the breedList and the status
  return [breedList, status];
}
