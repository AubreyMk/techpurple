import Link from "next/link";

export function Footer() {
  const categories = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "/services" },
        { name: "Hosting", href: "/hosting" },
        { name: "Photography", href: "/photography" },
        { name: "Domains", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/about" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/hosting" },
        { name: "Privacy Policy", href: "/about" },
        { name: "Terms", href: "/about" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 space-y-4">
          <Link href="/" className="inline-block">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Tech Purple
            </span>
          </Link>
          <p className="text-sm max-w-xs">
            Building Digital Experiences, Powering Businesses in Malawi and beyond.
            Managed Web Hosting, Development, and Photography.
          </p>
        </div>
        
        {categories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h4 className="text-white font-medium">{category.title}</h4>
            <ul className="space-y-2 text-sm">
              {category.links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Tech Purple. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Facebook</Link>
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
