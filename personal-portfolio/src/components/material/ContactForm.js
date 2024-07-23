"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";

export function ContactForm({ formData, handleChange, onSubmitForm }) {
  return (
    <section id="iletisim" className="lg:px-8 sm:px-4 mt-24">
      <div className="container mx-auto mb-5 md:mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Bana Ulaşın!
        </Typography>
        <Typography variant="lead" className="mx-auto !text-gray-500">
          Özel ders almak için veya herhangi bir konu ile ilgili bana ulaşabilirsiniz.
        </Typography>
      </div>
      <div className="flex container lg:mx-auto sm:mx-0 justify-center">
        <Card shadow={true} className="border border-gray/50 lg:w-3/5 sm:w-full">
          <CardBody className="grid grid-cols-1 md:p-10 lg:grid-cols-1 md:gap-28">
            <div className="w-full mt-8 md:mt-0 md:px-10 h-full p-5">
              <form onSubmit={onSubmitForm}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="İsim"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Örn. Ali"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  {/* @ts-ignore */}
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Soyisim"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Örn. Yılmaz"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="E-Posta"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Örn. aliyilmaz@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                {/* @ts-ignore */}
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Mesajınız"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  containerProps={{
                    className: "!min-w-full mb-10",
                  }}
                />
                <div className="w-full flex justify-center">
                  <Button type="submit" className="w-full md:w-fit" color="gray" size="md">
                    Gönder
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
export default ContactForm;
