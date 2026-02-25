import { AnimateOnScroll } from '../animate-on-scroll';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { certifications, type Certification } from '@/data/content';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

function CertificationCard({ title, issuer, category, image, certificateLink }: Certification) {
  const getCategoryColor = (cat: string) => {
    if (cat.includes('Artificial Intelligence')) return 'bg-primary/10 text-primary border-primary/20';
    if (cat.includes('Backend')) return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    if (cat.includes('Data')) return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    return 'bg-secondary text-secondary-foreground';
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/50 hover:-translate-y-1.5 group border-primary/20 shadow-md">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={image}
          alt={`${title} certificate`}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-3">
        <div className="space-y-2">
          <Badge 
            variant="outline" 
            className={`text-xs font-medium w-fit transition-all duration-200 ${getCategoryColor(category)}`}
          >
            {category}
          </Badge>
          <h3 className="text-base font-semibold leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-medium">
            {issuer}
          </p>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <Button 
          asChild
          variant="default"
          size="sm"
          className="w-full group/btn transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:brightness-110"
        >
          <a 
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            View Certificate
            <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function CertificationsSection() {
  return (
    <section id="certifications" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animationClass="animate-fade-in">
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Certifications
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Professional certifications and credentials demonstrating expertise in AI, backend development, and software engineering.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <CertificationCard key={`${cert.title}-${index}`} {...cert} />
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
