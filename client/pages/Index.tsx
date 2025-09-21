import { Section } from "@/components/Section";
import { MovieCard } from "@/components/MovieCard";

export default function Index() {
  const featured = [
    {
      title: "Las guerreras K-pop",
      posterSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3EJHYConW87PwT7JlqEleSTebitJ4O_kYHg&s",
      hoverSrc:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2025/08/guerreras-k-pop-4356277.jpg?tf=3840x",
      rating: "PG",
      duration: "1h 36m",
      year: "2025",
      provider: "Netflix",
    },
    {
      title: "Night City Beats",
      posterSrc:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
      hoverSrc:
        "https://images.unsplash.com/photo-1520975682031-df5a28c7b61a?q=80&w=1600&auto=format&fit=crop",
      rating: "PG-13",
      duration: "2h 01m",
      year: "2024",
      provider: "Prime Video",
    },
    {
      title: "Midnight Neon",
      posterSrc:
        "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200&auto=format&fit=crop",
      hoverSrc:
        "https://images.unsplash.com/photo-1520974735194-9948f0e3b8ce?q=80&w=1600&auto=format&fit=crop",
      rating: "PG",
      duration: "1h 48m",
      year: "2023",
      provider: "HBO Max",
    },
  ];

  const trending = featured.slice(0).reverse();
  const newReleases = featured;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Explora KStream</h1>
          <p className="mt-2 text-muted-foreground">
            Cards con dos estados: normal 154×209px y hover 325×209px, expandiendo solo a la derecha.
          </p>
        </div>

        {/* Destacados en una fila */}
        <Section
          title="Destacados"
          items={featured.map((i) => ({ ...i, collapsedWidth: 154, height: 209, hoverWidth: 325 }))}
        />

        <Section
          title="Tendencias"
          items={trending.map((i) => ({ ...i, collapsedWidth: 154, height: 209, hoverWidth: 325 }))}
        />

        <Section
          title="Novedades"
          items={newReleases.map((i) => ({ ...i, collapsedWidth: 154, height: 209, hoverWidth: 325 }))}
        />

        {/* Ejemplo de uso individual si se necesita */}
        <div className="mt-12 hidden">
          <div className="flex gap-6 overflow-visible">
            {featured.slice(0, 2).map((item) => (
              <MovieCard key={item.title} {...item} width={264} expandedWidth={420} hoverWidth={310} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
