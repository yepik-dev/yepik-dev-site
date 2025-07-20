import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResponsiveWrapper } from "@/custom_components/ResponsiveWrapper";
import Link from "next/link";

interface contactProps {}

const ContactPage = ({}: contactProps) => {
  return (
    <section className="relative -mt-[60px] z-10 h-full">
      <ResponsiveWrapper className="pt-16 pb-4 sm:pb-8">
        <div className="grid md:grid-cols-2 gap-16 h-full">
          <article>
            <h1 className="md:text-[62px] text-3xl font-accent">
              Looking for a reliable frontend developer? Let`s talk.
            </h1>
            <div className="pt-12 md:pt-24 grid gap-y-6">
              <p className="text-xl">Not into form? Talk to us here instead:</p>
              <ul className="space-y-2 text-base font-ui">
                <li className="flex items-center gap-2">
                  <Link href="tel:123456789" type="tel">
                    123456789
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Link href="mailto:mail@tratata" type="email">
                    mail@tratata
                  </Link>
                </li>
                <li>
                  <ul className="flex gap-4">
                    <li className="flex items-center gap-2">
                      <a
                        href="https:/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <form action="" className="flex flex-col justify-between gap-y-4">
            <div className="grid gap-y-6">
              <div>
                <Label htmlFor="name" className="mb-2 font-ui">
                  NAME
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  //value={name}
                />
              </div>

              <div>
                <Label htmlFor="email" className="mb-2 font-ui">
                  EMAIL
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  //value={email}
                />
              </div>
              <div>
                <Label htmlFor="message" className="mb-2 font-ui">
                  MESSAGE
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  typeof="text"
                  className="resize-none h-40"
                  placeholder="your message ..."
                  //value={message}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 font-ui">
              <Button
                type="reset"
                variant={"outline"}
                className="font-semibold py-6 text-xl border-destructive text-destructive hover:bg-destructive hover:text-primary-foreground"
              >
                Clear form
              </Button>
              <Button type="submit" className="font-semibold py-6 text-xl">
                Send message
              </Button>
            </div>
          </form>
        </div>
      </ResponsiveWrapper>
    </section>
  );
};

export default ContactPage;
