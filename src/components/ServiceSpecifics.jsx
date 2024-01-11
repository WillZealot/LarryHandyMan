import { useParams } from "react-router-dom";
import "photoswipe/dist/photoswipe.css";
import { Flex, Button, Box } from "@radix-ui/themes";
import { services } from "../constants";
import { Link } from "react-router-dom";

function ServiceSpecifics() {
  let { id } = useParams();
  const filteredServices = services.filter(
    (service) => service.service_id === id
  );
  return (
    <Flex justify="center" align="center" py="6" height="100%">
      {filteredServices.map((service, index) => (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 2xl:gap-6">
          <div className="col-span-1 md:col-span-2 px-8 2xl:py-11">
            <img
              src={service.image}
              alt={service.title}
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 450,
                backgroundColor: "var(--gray-5)",
                borderRadius: "50px",
              }}
            />
          </div>
          <div className="col-span-2 flex-col p-9 align-middle text-center h-full px-8 2xl:py-24">
            <div className=" text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[35px] pt-2">
              {service.header}
            </div>
            <div className="sm:text-[18px] text-[22px] text-secondary font-medium md:font-normal uppercase tracking-wider mb-5">
              {service.body}
            </div>
            <Link to={`/contact`}>
              <Button color="crimson" size="4" radius="full" mt="5">
                GET IN TOUCH
              </Button>
            </Link>
          </div>
          <div className="col-span-4 text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center px-4 py-6 mt-4 bg-neutral-200 w-full md:my-6 2xl:my-8">
            {service.slogan}
          </div>
        </div>
      ))}
    </Flex>
  );
}

export default ServiceSpecifics;
