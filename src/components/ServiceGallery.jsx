import { useParams } from "react-router-dom";
import "photoswipe/dist/photoswipe.css";
import { Flex, Avatar, Button } from "@radix-ui/themes";
import { Gallery, Item } from "react-photoswipe-gallery";
import { IMAGES } from "../constants";

function ServiceGallery() {
  let { id } = useParams();
  const filteredImages = IMAGES.filter((image) => image.service_id === id);

  return (
    <Flex justify="center" align="center" px="8" py="4">
      <Gallery>
        <div className="grid md:grid-cols-4 gap-2">
          {filteredImages.map((image, index) => (
            <div className="col-span-1 ">
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
            </div>
          ))}
        </div>
      </Gallery>
    </Flex>
  );
}

export default ServiceGallery;
