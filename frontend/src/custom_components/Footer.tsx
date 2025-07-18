import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="h-[430px] bg-primary text-primary-foreground">
      <div className="pt-[100px] px-16">
        <div className="grid grid-cols-2 w-full gap-4 h-[212px] mb-16">
          <form action="" className="w-4/5">
            <Label
              htmlFor="email"
              className="block mb-2 text-lg text-primary-foreground"
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
              className="mt-2 cursor-pointer bg-primary-foreground text-lg  w-full text-primary px-4 py-6 rounded"
            >
              Subscribe
            </Button>
          </form>

          <div className="flex gap-16 justify-end">
            <nav aria-label="Footer contact information">
              <h2>Talk to us</h2>
              <ul>
                <li>
                  <Link href="tel:+123456789" type="tel">
                    +123 456 789
                  </Link>
                </li>
                <li>
                  <Link href="mailto:mail@tratata" type="email">
                    mail@tratata
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Footer navigation">
              <h2>Navigation</h2>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/skills">Skills</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Footer social links">
              <h2>Social</h2>
              <ul>
                <li>
                  <Link href="https://www.linkedin.com/in/andy-yepik-891876292/">
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/yepik-dev">Github</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
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
      </div>
    </footer>
  );
};
