import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: 'Wordpress Development',
      description: 'Delivery your business faster with Wordpress',
      image: '/images/custom-software.svg',
    },
    {
      title: 'Web Development',
      description: 'Modern web application with modern technologies ReactJS, NextJS, NodeJS, NestJS',
      image: '/images/digital-transform.svg',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform application',
      image: '/images/cloud-migration.svg',
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to power your digital success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full h-48 mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              <button className="mt-6 text-red-500 font-semibold hover:text-red-600 transition-colors cursor-pointer">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
