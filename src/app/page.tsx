"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Image as HeroImage,
} from "@heroui/react";
import {gadgets} from "@/data/gadget";
import Image from "next/image";
import Container from "@/components/container";
import BlurFade from "@/components/blur-fade";
import {PageTransition} from "@/components/page-transition";
import {useRef} from "react";

export default function Home() {
  const categoryRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);

  const categories = [
    {name: "Smartphone", image: "/assets/smartphone.png", stock: 11},
    {name: "Wearable", image: "/assets/smartwatch.png", stock: 18},
    {name: "Laptop", image: "/assets/laptop.png", stock: 8},
    {name: "Accessories", image: "/assets/headphone.png", stock: 20},
  ];

  const scrollToCategory = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollIntoView({behavior: "smooth"});
    }
  };

  const scrollToProduct = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <PageTransition>
      <section className="pt-52">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-4xl">
              Selamat datang di Gadget Gallery
            </h1>
            <p className="text-foreground/80 text-lg mt-5">
              Jelajahi koleksi gadget terbaru dari berbagai brand ternama. Lihat
              spesifikasi, bandingkan fitur, dan temukan perangkat yang paling
              cocok untuk kebutuhanmu — mulai dari smartphone, laptop, hingga
              aksesoris pintar.
            </p>
            <Button
              variant="shadow"
              color="primary"
              className="mt-8"
              onPress={scrollToCategory}>
              Lihat Semua
            </Button>
          </div>
        </Container>
      </section>

      <section ref={categoryRef} className="pt-32">
        <Container>
          <div>
            <h1 className="font-semibold text-xl max-w-sm text-center mx-auto">
              Temukan perangkat yang sesuai kebutuhanmu di sini.
            </h1>
          </div>
          <BlurFade className="pt-8 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Card key={category.name} isPressable onPress={scrollToProduct}>
                <HeroImage
                  alt={category.name}
                  as={Image}
                  src={category.image}
                  width={200}
                  height={200}
                  className="object-cover"
                />
                <CardFooter>
                  <h1 className="text-center mx-auto">
                    {category.name} ({category.stock})
                  </h1>
                </CardFooter>
              </Card>
            ))}
          </BlurFade>
        </Container>
      </section>

      <section ref={productRef} className="pt-32">
        <Container>
          <div className="flex justify-between items-center">
            <h1 className="text-xl max-w-sm">
              Temukan perangkat yang sesuai kebutuhanmu di sini.
            </h1>
            <Button color="primary">Lihat Semua</Button>
          </div>
          <BlurFade className="pt-8 flex flex-wrap justify-center gap-3">
            {gadgets.slice(0, 4).map((gadget) => (
              <Card key={gadget.id}>
                <HeroImage
                  alt={gadget.name}
                  as={Image}
                  src={gadget.image}
                  width={300}
                  height={300}
                  className="object-cover"
                />
                <CardHeader>
                  <Chip variant="flat" color="primary">
                    {gadget.category.toUpperCase()}
                  </Chip>
                </CardHeader>
                <CardBody>
                  <h1 className="font-semibold text-md">{gadget.name}</h1>
                  <p className="font-semibold text-primary-500">
                    {gadget.price.toLocaleString()}
                  </p>
                </CardBody>
              </Card>
            ))}
          </BlurFade>
        </Container>
      </section>
    </PageTransition>
  );
}
