import { MovieCard, MovieCardProps } from "@/components/MovieCard";

export type SectionProps = {
  title: string;
  items: MovieCardProps[];
};

export function Section({ title, items }: SectionProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">{title}</h2>
      <div className="flex gap-6 overflow-x-auto overflow-y-visible pb-2">
        {items.map((item) => (
          <MovieCard key={item.title + item.posterSrc} {...item} />
        ))}
      </div>
    </section>
  );
}
