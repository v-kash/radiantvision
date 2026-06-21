"use client";

import { services } from "./data";
import ServiceCard from "./ServiceCard";
import CenterCircle from "./CenterCircle";
import ConnectorLines from "./ConnectorLines";

export default function MEPFPSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F3EC] px-6">
      {/* <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Integrated Engineering Services
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 sm:text-4xl">
          MEPFP &amp; Fire Protection Engineering
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Four disciplines, one coordinated delivery — mechanical, electrical, plumbing and
          fire protection systems engineered together from concept to commissioning.
        </p>
      </div> */}

      {/* Desktop / large-screen diagram — absolutely positioned on a fixed-ratio canvas */}
      <div className="relative mx-auto  hidden aspect-[1536/1026] w-full max-w-[1400px] lg:block">
        <ConnectorLines />
        {services.map((service, i) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={i}
            variant="canvas"
          />
        ))}
        <CenterCircle />
      </div>

      {/* Mobile / tablet fallback — simple stacked layout, no curved connectors */}
      <div className="mx-auto  flex max-w-xl flex-col items-center gap-10 lg:hidden">
        <div className="relative h-60 w-60">
          <CenterCircle variant="standalone" />
        </div>
        <div className="grid w-full gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              variant="stack"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
