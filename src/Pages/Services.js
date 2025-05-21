import React from 'react';
import '../Components/CSS/Services.CSS';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaPenFancy, FaPaintBrush, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode size={30} />,
      title: "Web Design",
      description: "We create clean and modern website designs."
    },
    {
      icon: <FaMobileAlt size={30} />,
      title: "App Development",
      description: "Build fast and reliable mobile and web apps."
    },
    {
      icon: <FaSearch size={30} />,
      title: "SEO Services",
      description: "Improve your site ranking on search engines."
    },
    {
      icon: <FaPenFancy size={30} />,
      title: "Content Writing",
      description: "We write clear and engaging content for your brand."
    },
    {
      icon: <FaPaintBrush size={30} />,
      title: "Graphic Design",
      description: "Custom logos, banners, and visual designs."
    },
    {
      icon: <FaTools size={30} />,
      title: "IT Support",
      description: "We solve technical issues and provide advice."
    }
  ];

  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 mb-4"> Services</h1>
          <p className="lead">
            We offer simple and useful digital services for your business.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {services.map((service, index) => (
            <div className="col" key={index}>
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <div className="icon-container mb-3">
                    {service.icon}
                  </div>
                  <h3 className="card-title mb-3">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
