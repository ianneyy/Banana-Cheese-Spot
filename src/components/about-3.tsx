import { Button } from "@/components/ui/button";
import Alden from "@/assets/Alden.jpg";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    location: string;
    contact: string;
    opening: string;
    social: string;
  };
  breakout?: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    src: string;
    alt: string;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
}

// const defaultCompanies = [
//   {
//     src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-1.svg",
//     alt: "Arc",
//   },
//   {
//     src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-2.svg",
//     alt: "Descript",
//   },
//   {
//     src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-3.svg",
//     alt: "Mercury",
//   },
//   {
//     src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-4.svg",
//     alt: "Ramp",
//   },
//   {
//     src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-5.svg",
//     alt: "Retool",
//   },
//   {
//     src: "https://shadcnblocks.com/images/block/logos/company/fictional-company-logo-6.svg",
//     alt: "Watershed",
//   },
// ];

const defaultAchievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

export const About3 = ({
  title = "About Us",
  description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
  mainImage = {
    src: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "placeholder",
  },
  secondaryImage = {
    location: "PASS College & around Alaminos City, Pangasinan",
    contact: "0945 811 0525",
    opening: "Open: 10:00 AM - 5:00 PM",
    social: "Follow us on Facebook: The Banana Cheese Spot",
  },
  breakout = {
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "logo",
    title: "Hundreds of blocks at Shadcnblocks.com",
    description:
      "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
    buttonText: "Discover more",
    buttonUrl: Alden,
  },
  // companiesTitle = "Valued by clients worldwide",
  // companies = defaultCompanies,
  achievementsTitle = "Our Achievements in Numbers",
  achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  return (
    <section className="py-32 px-5 lg:px-20">
      <div className="container mx-auto">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold ">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="grid gap-7 lg:grid-cols-3">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <img
                src={breakout.src}
                alt={breakout.alt}
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-lg font-semibold text-yellow-400">
                  {breakout.title}
                </p>
                <p className="text-muted-foreground">{breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={breakout.buttonUrl} target="_blank">
                  {breakout.buttonText}
                </a>
              </Button>
            </div>
            <div className="h-full flex flex-col justify-between rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <p className="text-muted-foreground">{secondaryImage.location}</p>
              <p className="text-muted-foreground">{secondaryImage.contact}</p>
              <p className="text-muted-foreground">{secondaryImage.opening}</p>
              <p className="text-muted-foreground">{secondaryImage.social}</p>
            </div>
            {/* <img
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            /> */}
          </div>
        </div>
        <div className="py-20">
          {/* <p className="text-center">{companiesTitle} </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-6 w-auto md:h-8"
                />
              </div>
            ))}
          </div> */}
        </div>
        <div className="relative overflow-hidden rounded-xl bg-yellow-400 p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
            <p className="max-w-screen-sm text-gray-600">
              {achievementsDescription}
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>
      </div>
    </section>
  );
};
