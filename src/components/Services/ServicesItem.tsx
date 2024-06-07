import { Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ebGaramond } from "@/lib/fonts";

type ServiceItemProps = {
  imageSrc: string;
  title: string;
  description: string;
};

const ServiceItem: FC<ServiceItemProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <Flex
      flexDir="column"
      textAlign="center"
      alignItems="center"
      p={8}
      bgColor="#FBFBFB"
      w={{ base: "full", md: 420 }}
      gap={4}
      letterSpacing={1.44}
    >
      <Image
        src={imageSrc}
        w="177px"
        h="177px"
        borderRadius="full"
        alt={title}
        mb={8}
      />
      <Text fontFamily={ebGaramond.className} fontSize={22}>
        {title}
      </Text>
      <Text
        fontSize={16}
        px={16}
        fontFamily="BrandonGrot"
        fontWeight={300}
        mb={8}
      >
        {description}
      </Text>
    </Flex>
  );
};

export default ServiceItem;
