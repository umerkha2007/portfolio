import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Offers() {
  const offers = [
    {
      title: "Offer 1",
      description: "Get 25% off on your first development project with time-bound expertise",
    },
    {
      title: "Offer 2",
      description: "Enjoy a 15% discount on every 2 comprehensive coding bootcamps",
    },
    {
      title: "Offer 3",
      description: "Sign up for 1-on-1 mentorship program and receive a 25% discount on your first session",
    },
  ]

  return (
    <section className="px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Unlock Special Discounts</h2>
        <p className="text-muted-foreground mb-12 text-center">
          Take advantage of our limited-time offers and special discounts.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{offer.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

