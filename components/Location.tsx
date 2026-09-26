import Image from "next/image";
import { MapPin, Navigation, Phone } from "lucide-react";
import { BUSINESS_INFO, IMAGES } from "@/lib/constants";

/** Store banner: photo background with address and directions. */
export function Location() {
  return (
    <section id="location-section" className="bg-white px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[28px]">
        <Image src={IMAGES.store} alt="" fill sizes="100vw" className="-z-10 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />

        <div className="grid items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-14 lg:py-20">
          <div className="text-white">
            <h2 className="text-4xl font-normal leading-tight sm:text-5xl">
              Visit Our <strong className="font-bold">Store</strong>
              <br />
              in Kasaragod
            </h2>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-white/85">
              Walk in with your phone and get expert advice in person. We&apos;re easy to find at the New Bus Stand
              Building.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Navigation className="h-5 w-5" /> Get Directions
              </a>
              <a href={BUSINESS_INFO.phoneTel} className="btn btn-light">
                <Phone className="h-5 w-5" /> Call Store
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 text-white ring-1 ring-white/20 backdrop-blur-md sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand">
                <MapPin className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-bold">{BUSINESS_INFO.displayName} Kasaragod</h3>
                <p className="mt-2 leading-relaxed text-white/85">{BUSINESS_INFO.address.building}</p>
                <p className="leading-relaxed text-white/85">{BUSINESS_INFO.address.landmark}</p>
                <p className="leading-relaxed text-white/85">
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.pincode}
                </p>
                <a href={BUSINESS_INFO.phoneTel} className="mt-4 inline-block text-lg font-bold text-brand hover:underline">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
