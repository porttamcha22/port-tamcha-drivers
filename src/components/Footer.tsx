const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground/70 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading font-bold text-lg text-primary-foreground">
          Port <span className="text-primary">Tamcha</span>
        </p>
        <p className="text-sm">
          © 2023 Port Tamcha. All rights reserved.
        </p>
        <p className="text-sm">150 SE 2nd Ave, Miami, FL 33131</p>
      </div>
    </footer>
  );
};

export default Footer;
