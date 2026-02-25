import { AnimateOnScroll } from '../animate-on-scroll';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { personalData, skillCategories, type Skill } from '@/data/content';
import { Badge } from '../ui/badge';

function SkillBadge({ name, level }: Skill) {
  return (
    <div className="group relative">
      <Badge 
        variant="secondary" 
        className="px-3 py-2 text-sm font-medium transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30 cursor-default hover:brightness-110"
      >
        {name}
      </Badge>
      <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
        <div className="bg-popover text-popover-foreground px-3 py-1.5 rounded-md text-xs whitespace-nowrap shadow-xl border border-primary/20">
          {level}% proficiency
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  // Determine if category should be highlighted (AI/ML or Backend)
  const isHighlightCategory = (category: string) => {
    return category.includes("Artificial Intelligence") || category.includes("Backend Development");
  };

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll animationClass="animate-fade-in">
          <div className="space-y-12">
            {/* About Me Section with optimized width */}
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center lg:text-left">
                About Me
              </h2>
              <div className="space-y-5">
                <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                  {personalData.bio}
                </p>
                <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                  {personalData.bioExtended}
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed pt-2 border-t border-border/40 mt-6 pt-6">
                  {personalData.projectsIntro}
                </p>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="space-y-6">
              <h3 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl text-center lg:text-left">
                Technical Skills
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((category, index) => (
                  <Card 
                    key={category.category}
                    className={`transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/50 hover:-translate-y-1.5 ${
                      isHighlightCategory(category.category) 
                        ? 'border-primary/30 bg-card/80 shadow-lg shadow-primary/5' 
                        : 'shadow-md'
                    } ${index < 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className={`font-semibold leading-tight ${
                        isHighlightCategory(category.category) 
                          ? 'text-lg text-primary' 
                          : 'text-base'
                      }`}>
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill) => (
                          <SkillBadge key={skill.name} {...skill} />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
