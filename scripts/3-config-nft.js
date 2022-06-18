import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xA3b3a96cC22b48e398163901Be08d46DdfE76597");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Otaku Pass",
        description: "This NFT will give you access to AnimeDAO!",
        image: readFileSync("scripts/assets/otaku.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();