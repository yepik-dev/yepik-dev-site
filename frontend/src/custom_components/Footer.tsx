interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className="h-[430px] bg-primary text-primary-foreground">
      <div className="pt-[100px] px-16">
        <div className="grid grid-cols-2 w-full gap-4 h-[212px] mb-16">
          <div className="border-2 border-white">cta form</div>
          <div className="flex gap-16 justify-end">
            <div>
              <p>Talk to us</p>
              <p>123456789</p>
              <p>mail@tratata</p>
            </div>
            <div>
              <p>Navigation</p>
              <p>Права половина</p>
              <p>Права половина</p>
              <p>Права половина</p>
              <p>Права половина</p>
            </div>
            <div>
              <p>Social</p>
              <p>Права половина</p>
              <p>Права половина</p>
              <p>Права половина</p>
              <p>Права половина</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>©2025 Masx</p>
          <p>Privacy Policy Terms of Service</p>
          <p>BACK TO TOP</p>
        </div>
      </div>
    </footer>
  );
};
