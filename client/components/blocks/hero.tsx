import React from "react";

import { Button } from "@/components/ui/button";

interface HeroProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
}

const Hero = ({
  heading = "Vote securely and transparently",
  description = "Run elections in your organisation and let members vote using various voting systems. Always free and open-source.",
  button = {
    text: "Create your election",
    url: "#",
  },
}: HeroProps) => {
  return (
    <section className="py-32 flex justify-center">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">{heading}</h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
        <Button asChild size="lg" className="mt-10">
          <a href={button.url}>{button.text}</a>
        </Button>
      </div>
    </section>
  );
};

export { Hero };
