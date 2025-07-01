"use client";

import Link from "next/link";
import Container from "./container";
import {Button, Card, CardBody, Divider, Form, Input} from "@heroui/react";

export default function Footer() {
  const links = [
    {name: "Beranda", href: "/"},
    {name: "Tentang", href: "/tentang"},
    {name: "Produk", href: "/produk"},
  ];

  return (
    <footer className="mt-32">
      <div className="bg-primary dark:bg-content1 py-8">
        <Container>
          <div className="flex justify-between items-start gap-8 flex-wrap">
            <div className="lg:col-span-2">
              <h1 className="font-bold text-2xl text-white mb-2">
                Gadget Gallery
              </h1>
              <p className="text-white/80 text-sm">
                Jelajahi koleksi gadget terbaru dari berbagai brand ternama.
              </p>
            </div>

            <div>
              <h1 className="font-saemibold text-lg text-white mb-2">
                Tautan Cepat
              </h1>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm mb-1 block">
                  {link.name}
                </Link>
              ))}
            </div>
            <div>
              <h1 className="font-semibold text-lg text-white mb-2">
                Hubungi Kami
              </h1>
              <Card className="w-[300px] dark:bg-content2">
                <CardBody>
                  <Form
                    className="flex flex-col gap-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // const data = Object.fromEntries(
                      //   new FormData(e.currentTarget)
                      // );

                      // setAction(`submit ${JSON.stringify(data)}`);
                    }}>
                    <Input
                      isRequired
                      errorMessage="Please enter a valid username"
                      label="Username"
                      labelPlacement="outside"
                      name="username"
                      placeholder="Enter your username"
                      type="text"
                    />

                    <Input
                      isRequired
                      errorMessage="Please enter a valid email"
                      label="Email"
                      labelPlacement="outside"
                      name="email"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <div className="flex gap-2">
                      <Button color="primary" type="submit">
                        Submit
                      </Button>
                      <Button type="reset" variant="flat">
                        Reset
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="py-8">
            <Divider />
          </div>

          <div className="text-center text-sm text-white/80">
            © Gallery Code {new Date().getFullYear()}. All rights reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
}
