import { useParams } from "react-router-dom";
import "photoswipe/dist/photoswipe.css";
import { Flex, Avatar, Button } from "@radix-ui/themes";
import { Gallery, Item } from "react-photoswipe-gallery";
import { IMAGES } from "../constants";
import { services } from "../constants";

function ServiceGallery() {
  let { id } = useParams();
  const filteredImages = IMAGES.filter((image) => image.service_id === id);
  const filteredService = services.find((service) => service.service_id === id);

  return (
    <Flex justify="center" align="center" py="4" direction="column">
      <div className=" text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center px-4 py-6 mt-4 bg-neutral-200 w-full my-8 animate-fadeInRight">
        {filteredService.title}
      </div>
      <Gallery>
        <div className="grid md:grid-cols-4 gap-2 px-11 mb-5">
          {filteredImages.map((image, index) => (
            <div className="col-span-1 ">
              <Item
                key={index}
                original={image.url}
                thumbnail={image.url}
                width="624"
                height="780"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={image.url}
                    alt=""
                    className="w-96 h-96 shadow-xl "
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
