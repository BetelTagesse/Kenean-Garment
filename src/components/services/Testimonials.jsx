import React from "react";

const Testimonials = ({ quote, name, title }) => {
  const testimonials = [
    {
      quote:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
      name: "Customer Name 1",
      title: "CEO, Company A",
    },
    {
      quote:
        "The service provided was exceptional! The team went above and beyond to meet our needs and delivered outstanding results on time.",
      name: "Customer Name 2",
      title: "Director, Company B",
    },
    {
      quote:
        "Highly recommend their expertise. They transformed our vision into reality with great attention to detail and professionalism.",
      name: "Customer Name 3",
      title: "Founder, Startup C",
    },
    {
      quote:
        "The service provided was exceptional! The team went above and beyond to meet our needs and delivered outstanding results on time.",
      name: "Customer Name 2",
      title: "Director, Company B",
    },
  ];
  const TestimonialCard = ({ quote, name, title }) => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
        <p className="text-gray-700 italic mb-4">"{quote}"</p>
        <p className="font-semibold text-gray-800">- {name}</p>
        <p className="text-gray-500 text-sm">{title}</p>
      </div>
    );
  };

  return (
    <div>
      {" "}
      <div className="bg-gray-50 py-16 px-4 mt-20">
        <div className="container mx-auto text-center">
          <p className="text-green text-sm font-semibold uppercase tracking-wider mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index} // Using index as key since testimonials are static for now
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
