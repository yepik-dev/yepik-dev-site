import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const ContactForm = () => {
  return (
    <form action="" className="flex flex-col justify-between gap-y-4">
      <div className="grid gap-y-6">
        <div>
          <Label htmlFor="name" className="mb-2 font-ui">
            NAME
          </Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
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
            autoComplete="email"
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
            placeholder="your message ..."
            className="resize-none h-40"
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
  );
};
