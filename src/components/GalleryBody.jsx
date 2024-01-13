import { Flex } from "@radix-ui/themes";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { IMAGES } from "../constants";

function GalleryBody() {
  // Group images by service_id
  const services = IMAGES.reduce((acc, image) => {
    if (!acc[image.service_id]) {
      acc[image.service_id] = {
        service: image.service,
        images: [],
      };
    }
    acc[image.service_id].images.push(image);
    return acc;
  }, {});

  return (
    <Flex justify="center" align="center" py="4" direction="column">
      {Object.entries(services).map(([serviceId, { service, images }]) => (
        <div key={serviceId}>
          <div className=" text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center px-4 py-6 mt-4 bg-neutral-200 w-full my-8 animate-fadeInRight">
            {service}
          </div>
          <Gallery>
            <div className="grid md:grid-cols-4 gap-2 px-11 mb-5">
              {images.map((image, index) => (
                <div className="col-span-1 animate-fadeInLeft" key={index}>
                  <Item
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
                        className="w-96 h-96 rounded-sm"
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          </Gallery>
        </div>
      ))}
    </Flex>
  );
}

export default GalleryBody;
