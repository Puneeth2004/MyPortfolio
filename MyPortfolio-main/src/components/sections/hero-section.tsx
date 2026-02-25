import Image from 'next/image';
import { Button } from '../ui/button';
import { personalData } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from '../animate-on-scroll';
import { TypingText } from '../typing-text';

const PROFILE_PICTURE_PATH = `/assets/puneeth.jpeg?v=1`;

export function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 -left-1/2 -top-1/2 h-[200%] w-[200%] -rotate-[25deg] bg-gradient-to-tr from-muted/50 via-background to-muted/50" />
      </div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <AnimateOnScroll
            animationClass="animate-fade-in-left"
            className="flex flex-col justify-center space-y-7 text-center lg:text-left"
          >
            {/* Name with typing animation and enhanced styling */}
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] min-h-[1.15em]">
              <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
                <TypingText text={personalData.name} speed={120} />
              </span>
            </h1>
            
            {/* Tagline with improved spacing and line-height */}
            <p className="text-2xl font-semibold md:text-3xl lg:text-4xl leading-[1.3]">
              {personalData.tagline}
            </p>
            
            {/* Description with enhanced contrast and readability */}
            <p className="max-w-[600px] text-foreground/95 md:text-xl lg:text-xl leading-relaxed lg:mx-0">
              I design and develop{' '}
              <span className="font-semibold text-primary relative inline-block">
                AI-driven
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></span>
              </span>{' '}
              applications and{' '}
              <span className="font-semibold text-primary relative inline-block">
                backend systems
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></span>
              </span>{' '}
              that bridge intelligent models with real-world solutions.
            </p>
            
            {/* Refined CTA Button with subtle animations */}
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-start justify-center pt-3">
              <Button 
                size="lg" 
                asChild
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <a href="#projects" className="relative z-10">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </AnimateOnScroll>
          
          {/* Refined Profile Image with enhanced shadow */}
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Subtle glow effect behind image - reduced intensity */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/15 via-primary/10 to-transparent blur-xl scale-105"></div>
              
              {/* Profile Image with refined border and enhanced shadow */}
              <div className="relative">
                <Image
                  src={PROFILE_PICTURE_PATH}
                  data-ai-hint="profile picture"
                  alt="Puneeth's Profile Picture"
                  width={400}
                  height={400}
                  className="relative h-64 w-64 rounded-full object-cover lg:h-96 lg:w-96 ring-[5px] ring-primary/25 hover:ring-primary/40 transition-all duration-500 animate-fade-in"
                  priority
                  style={{
                    boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.5), 0 0 30px rgba(var(--primary), 0.2)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
