import { Link, useParams } from "react-router-dom";
import "photoswipe/dist/photoswipe.css";
import { Flex, Box, Text } from "@radix-ui/themes";
import { Gallery, Item } from "react-photoswipe-gallery";
import { IMAGES } from "../constants";

function FilteredGallery() {
  let { id } = useParams();
  const filteredImages = IMAGES.filter((image) => image.service_id === id);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      px={{ initial: "5", sm: "7", md: "9" }}
      py="4"
      mb="9"
      className=""
    >
      <Box className="flex justify-start w-full animate-fadeInLeft">
        <div className=" text-black font-black md:text-[30px] sm:text-[25px] text-[22px] pb-6 md:pb-4 hover:text-slate-600 hover:underline">
          <Link to={`/gallery/${id}`}>View More Images</Link>
        </div>
      </Box>
      <Gallery>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:my-5">
          {filteredImages.slice(0, 4).map((image, index) => (
            <div className="col-span-1  animate-fadeInRight hover:cursor-pointer">
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
                    className="w-96 h-96 rounded-2xl drop-shadow-2xl"
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

export default FilteredGallery;
