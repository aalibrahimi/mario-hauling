import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

// mock data
// In a real application, this would fetch data from a database or API obv
function getServiceData(slug: string) {
  const services = {
    // so  these string names is what you will be using to route them back to the page.tsx in local. 
    "appliance-removal": {
      name: "Appliance Removal",
      description: "Professional removal of refrigerators, washers, dryers, and other household appliances.",
      longDescription:
        "Our appliance removal service handles all types and sizes of household appliances. We safely disconnect, remove, and transport your old appliances for proper disposal or recycling. From refrigerators and freezers to washers, dryers, dishwashers, and stoves - we handle it all with care and efficiency.",
      image: "/placeholder.svg?height=600&width=800",
      projects: [
        {
          title: "Apartment Complex Appliance Upgrade",
          description: "Removed 24 old refrigerators and stoves from an apartment complex during renovation.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Home Kitchen Remodel",
          description: "Removed and disposed of refrigerator, dishwasher, and stove for a complete kitchen renovation.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Restaurant Equipment Removal",
          description: "Cleared out old commercial kitchen equipment for a restaurant upgrade.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    "furniture-hauling": {
      name: "Furniture Hauling",
      description: "Fast and careful removal of sofas, tables, beds, and all types of furniture.",
      longDescription:
        "Our furniture hauling service provides professional removal of all types of furniture items. Whether you're moving, redecorating, or disposing of old furniture, our team handles everything from sofas and recliners to beds, tables, dressers, and more. We take special care to protect your property during removal.",
      image: "/placeholder.svg?height=600&width=800",
      projects: [
        {
          title: "Office Furniture Removal",
          description: "Cleared out an entire office of desks, chairs, and filing cabinets during relocation.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Estate Cleanout",
          description: "Removed all furniture from a 4-bedroom house for an estate sale.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Living Room Upgrade",
          description: "Hauled away old sectional sofa, coffee tables, and entertainment center for a home renovation.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    // Default case for any other slug
    default: {
      name: "Hauling Service",
      description: "Professional hauling and junk removal services.",
      longDescription:
        "Mario's Hauling provides fast, reliable, and affordable hauling services for all your needs. Available 24/7, we handle everything from small residential jobs to large commercial projects.",
      image: "/placeholder.svg?height=600&width=800",
      projects: [
        {
          title: "Recent Project",
          description: "Professional hauling services completed with care and efficiency.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Customer Project",
          description: "Helping customers clear space and remove unwanted items.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          title: "Hauling Work",
          description: "Quality hauling services that our customers love.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
  }

  // Return the service data if it exists, otherwise return the default
  return services[slug as keyof typeof services] || services.default
}

export default function ServicePortfolio({ params }: { params: { slug: string } }) {
  const service = getServiceData(params.slug)

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.name}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="container relative z-10 px-4 md:px-6">
          <Link href="/" className="inline-flex items-center text-green-200 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{service.name}</h1>
          <p className="text-xl text-green-100 max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4 text-green-800">About Our {service.name} Service</h2>
              <p className="text-slate-600 mb-6">{service.longDescription}</p>
              <h3 className="text-xl font-bold mb-3 text-green-800">Why Choose Mario's Hauling:</h3>
              <ul className="space-y-2 mb-6">
                {[
                  "Available 24/7 for emergency service",
                  "Fast response and same-day service when possible",
                  "Affordable rates with no hidden fees",
                  "Eco-friendly disposal practices",
                  "Fully licensed and insured for your protection",
                  "Professional, courteous service every time",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-800">Ready to get started?</h3>
              <p className="text-slate-600 mb-6">
                Call us now for a free quote or to schedule your {service.name.toLowerCase()} service.
              </p>
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white mb-4">
                <Phone className="mr-2 h-4 w-4" /> Call (408) 449-2317
              </Button>
              <p className="text-sm text-slate-500 text-center">Available 24/7 for your convenience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-12 bg-green-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6 text-green-800">Recent {service.name} Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-green-800">{project.title}</h3>
                  <p className="text-slate-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 bg-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Need {service.name.toLowerCase()} today?</h3>
              <p className="text-green-100">Mario is ready to help 24/7!</p>
            </div>
            <Button size="lg" className="bg-white hover:bg-green-50 text-green-800">
              <Phone className="mr-2 h-4 w-4" /> Call (408) 449-2317
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6">
        <div className="container px-4 md:px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Mario's Hauling. All rights reserved.</p>
          <p className="text-green-200 text-sm mt-2">Serving the Greater San Jose Area</p>
        </div>
      </footer>
    </main>
  )
}
