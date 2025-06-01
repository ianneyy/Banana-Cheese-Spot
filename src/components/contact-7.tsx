import { Mail, MapPin, Phone } from "lucide-react";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
}

export const Contact7 = ({
  title = "Contact Us",
  description = "Have a question, craving, or banana-cheese emergency? Reach out to The Banana Cheese Spot and we’ll get back to you faster than you can say 'snack time!'",
  emailLabel = "Email",
  emailDescription = "We reply within the day—unless we're busy making more rolls!",
  email = "hello@bananacheesespot.com",
  officeLabel = "Visit Our Stall",
  officeDescription = "We’re serving hot banana cheese rolls daily at our local pop-up.",
  officeAddress = "PASS College & around Alaminos City, Pangasinan",
  phoneLabel = "Give Us a Call",
  phoneDescription = "We’re on the line Mon-Sat, 10am–6pm. Call us for bulk orders or collabs!",
  phone = "+63 945 811 0525",
}: Contact7Props) => {
  return (
    <section className="bg-background py-32 px-20">
      <div className="container">
        <div className="mb-14">
          <h1 className="mt-2 mb-3 text-3xl font-semibold text-balance md:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3 text-muted-foreground">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold hover:underline"
            >
              {email}
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="mb-3 text-muted-foreground">{officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {officeAddress}
            </a>
          </div>
          <div>
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="mb-3 text-muted-foreground">{phoneDescription}</p>
            <a href={`tel:${phone}`} className="font-semibold hover:underline">
              {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};