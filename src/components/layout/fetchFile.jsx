import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState({ featured: [], fake: [] });
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const featuredData = [
      {
        id: uuidv4(),
        title: "Leviathan Axe",
        description:
          "Kratos's Frost-Enchanted Axe - symbolizes strength, vengeance, and balance, capable of being thrown and recalled with divine precision.",
        category: "Featured - Weapons",
      },
      {
        id: uuidv4(),
        title: "Mjölnir Hammer",
        description:
          "Thor's legendary hammer, representing protection and might, capable of summoning lightning and returning to its wielder.",
        category: "Featured - Weapons",
      },
      {
        id: uuidv4(),
        title: "Gungnir Spear",
        description:
          "The spear of Odin, crafted by dwarves, never misses its mark and symbolizes authority and divine power.",
        category: "Featured - Weapons",
      },
      {
        id: uuidv4(),
        title: "Tyrfing Sword",
        description:
          "A deadly blade that always strikes true but brings misfortune to its bearer, representing both power and tragedy.",
        category: "Featured - Weapons",
      },
      {
        id: uuidv4(),
        title: "Gram Sword",
        description:
          "Sigurd's sword, used to slay the dragon Fafnir, symbolizing courage, heroism, and triumph over evil.",
        category: "Featured - Weapons",
      },
      {
        id: uuidv4(),
        title: "Gjallarhorn Horn",
        description:
          "The horn of Heimdall, used to announce the beginning of Ragnarök, symbolizing vigilance and divine alertness.",
        category: "Featured - Artifacts",
      },
      {
        id: uuidv4(),
        title: "Brísingamen Necklace",
        description:
          "A dazzling necklace symbolizing love, desire, and fertility, worn by the goddess Freyja.",
        category: "Featured - Artifacts",
      },
    ];

    const fetchfakeProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return await response.json();
    };

    const fetchProductImage = async (object) => {
      const apiKey = "ETMpOTl9ByyjGBjcAbMrWhBzPrMlHKo4";

      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(
          object.title
        )}&limit=2`
      );
      if (response.status >= 400) {
        throw new Error(`GIPHY Server Error fetching image of ${object.title}`);
      }
      const data = await response.json();
      object.src =
        data.data.length > 0 ? data.data[0].images.original.url : "default.jpg";
    };

    const fetchAllProducts = async () => {
      try {
        const [
          /*, ',' was for the first destructured fetch function, but im rate limited so will comment for now"*/ fakeProducts,
        ] = await Promise.all([
          //await Promise.all(featuredData.map(fetchProductImage)),
          fetchfakeProducts(),
        ]);
        console.log(fakeProducts);
        setProducts({ featured: featuredData, fake: fakeProducts });
      } catch (err) {
        setError((prevError) => [...prevError, `${err.message} ${err.stack}`]);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);
  return [products, error, loading];
};
// fetch fake products from a fakestore api

// featured data, not permanent stock, displayed separately
// ideally in a real store, they would be added by an API

export default useFetchProducts;
