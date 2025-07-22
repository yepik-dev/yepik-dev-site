import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ResponsiveWrapper } from "./ResponsiveWrapper";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="h-full bg-primary text-primary-foreground">
      <ResponsiveWrapper className="pt-4 sm:pt-10 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center w-full lg:gap-4 h-full">
          <form action="" className="sm:w-4/5 w-full">
            <Label
              htmlFor="email"
              className="block mb-2 text-lg font-accent font-medium"
            >
              Subscribe to newsletter
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full text-lg py-6 bg-primary-foreground text-primary rounded"
            />
            <Button
              type="submit"
              variant="outline"
              className="mt-2 cursor-pointer bg-primary-foreground text-lg w-full text-primary px-4 py-6 rounded"
            >
              Subscribe
            </Button>
          </form>
          <Accordion
            type="single"
            collapsible
            className="sm:w-4/5 w-full mt-4 lg:hidden"
            //defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-lg">Talk to us</h2>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <nav aria-label="Footer contact information">
                  <ul className="font-ui text-lg">
                    <li>
                      <Link href="tel:+123456789" type="tel">
                        +123 456 789
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="mailto:mail@tratata"
                        type="email"
                        className="break-words max-w-full block"
                      >
                        123123123mail@tratata
                      </Link>
                    </li>
                  </ul>
                </nav>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h2 className="text-lg">Navigation</h2>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <nav aria-label="Footer navigation">
                  <ul className="font-ui text-lg">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h2 className="text-lg">Social</h2>
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <nav aria-label="Footer social links ">
                  <ul className="font-ui text-lg">
                    <li>
                      <Link href="/">Linkedin</Link>
                    </li>
                    <li>
                      <Link href="/">Github</Link>
                    </li>
                  </ul>
                </nav>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="hidden lg:flex items-start justify-between w-full text-xl my-4 pr-8 xl:pr-16">
            <nav aria-label="Footer contact information">
              <h2 className="text-lg">Talk to us</h2>
              <ul className="font-ui">
                <li>
                  <Link href="tel:+123456789" type="tel">
                    +123 456 789
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:mail@tratata"
                    type="email"
                    className="break-words max-w-full block"
                  >
                    123123123mail@tratata
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Footer navigation">
              <h2 className="text-lg">Navigation</h2>
              <ul className="font-ui">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Footer social links ">
              <h2 className="text-lg">Social</h2>
              <ul className="font-ui">
                <li>
                  <Link href="/">Linkedin</Link>
                </li>
                <li>
                  <Link href="/">Github</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-between font-normal gap-4 mt-4 md:mt-16 lg:pt-32">
          <p>
            ©{" "}
            {2025 === new Date().getFullYear()
              ? 2025
              : `2025–${new Date().getFullYear()}`}{" "}
            Andy Yepik
          </p>
          <p>Privacy Policy Terms of Service</p>
          <Link href="#top">BACK TO TOP</Link>
        </div>
      </ResponsiveWrapper>
    </footer>
  );
};
