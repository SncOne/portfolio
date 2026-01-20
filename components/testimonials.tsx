import { FadeIn, StaggerContainer, StaggerItem } from '@/components/fade-in'
import { Card, CardContent } from '@/components/ui/card'

export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Chen',
    role: 'Founder',
    company: 'TechStart',
    quote:
      'Türker delivered an exceptional mobile app that exceeded our expectations. His attention to detail and ability to translate our vision into a polished product was remarkable.',
  },
  {
    name: 'Sarah Martinez',
    role: 'Product Lead',
    company: 'InnovateCo',
    quote:
      'Working with Türker was a game-changer for our team. He brought fresh ideas and technical excellence that helped us ship faster without compromising quality.',
  },
  {
    name: 'Michael Park',
    role: 'CTO',
    company: 'ScaleUp Labs',
    quote:
      'The codebase Türker delivered was clean, well-documented, and a joy to maintain. He truly understands what it means to build for the long term.',
  },
]

export function Testimonials() {
  return (
    <section className="space-y-8">
      <FadeIn className="text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Testimonials</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          What people say
        </h2>
      </FadeIn>

      <StaggerContainer staggerDelay={0.1} initialDelay={0.1} className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <Card className="h-full bg-muted/30">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {testimonial.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
