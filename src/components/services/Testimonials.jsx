const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "The fabric quality and turnaround time were excellent. Very dependable service.",
      name: "Sarah Mebratu",
      title: "Procurement Manager, FabricCo",
    },
    {
      quote:
        "We’ve seen consistent results and high-quality textiles for our fashion line.",
      name: "Abdul Rahman",
      title: "Creative Lead, UrbanStitch",
    },
    {
      quote:
        "Excellent customer support and delivery on time. Will continue working with them.",
      name: "Lily Asfaw",
      title: "Sourcing Agent, Threads & Co",
    },
    {
      quote: "Their attention to detail and professionalism really stood out.",
      name: "Daniel Worku",
      title: "Production Head, CottonWorks",
    },
  ];

  const TestimonialCard = ({ quote, name, title }) => (
    <div className="bg-white p-8 pt-16 rounded-lg shadow-lg max-w-md w-full h-full flex flex-col items-center text-center">
      <p className="text-gray-700 italic mb-4">"{quote}"</p>
      <p className="font-semibold text-gray-800">{name}</p>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );

  return (
    <div className="bg-gray-50 py-16 px-4 mt-20">
      <div className="container mx-auto text-center ">
        <p className="text-green text-sm font-semibold uppercase tracking-wider ">
          TESTIMONIALS
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mb-16">
          What Our Customers Say
        </h2>
        <div className="h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-7 items-center justify-items-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
