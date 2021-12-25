import Image from "next/image";
import Center from "@components/center";

interface IProps {
  src: string;
  alt: string;
}

const Img: React.FC<IProps> = ({ src, alt }) => {
  return (
    <Center tail="relative h-64 sm:h-80 md:h-96">
      <Image src={src} alt={alt} layout="fill" objectFit="contain" />
    </Center>
  );
};

export default Img;
