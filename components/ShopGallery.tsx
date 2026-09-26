import Image from "next/image";
import { BUSINESS_INFO, SHOP_GALLERY } from "@/lib/constants";
import { InstagramIcon } from "@/components/Icons";

/** Bento grid of real shop photos: one tall feature photo plus four smaller ones. */
export function ShopGallery() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Inside Fixerland</span>
            <h2 className="section-title mt-3">
              Take a look at <strong>our store</strong>
            </h2>
            <p className="mt-3 max-w-xl text-[17px] text-muted">
              Our Kasaragod store and repair workbench, where every phone is checked, fixed and tested.
            </p>
          </div>
          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <InstagramIcon className="h-5 w-5" /> More on Instagram
          </a>
        </div>

        <ul className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[280px] md:gap-5">
          {SHOP_GALLERY.map((photo, i) => (
            <li
              key={photo.src}
              className={`group relative overflow-hidden rounded-3xl bg-mist ${
                i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={i === 0 ? "(min-width: 768px) 33vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 right-4 text-base font-bold text-white sm:text-lg">
                {photo.caption}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
