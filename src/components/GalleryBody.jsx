import { Flex } from "@radix-ui/themes";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { IMAGES } from "../constants";

function GalleryBody() {
  // Now you can use the id to render different images based on the id
  // Fetch your image based on the id and render it

  return (
    <Flex justify="center" align="center" px="8">
      <Gallery>
        {IMAGES.map((image, index) => (
          <Item
            key={index}
            original={image.url}
            thumbnail={image.url}
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img
                ref={ref}
                onClick={open}
                src={image.url}
                alt=""
                className="w-96 h-96"
              />
            )}
          </Item>
        ))}
      </Gallery>
    </Flex>
  );
}

export default GalleryBody;
