"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CircleCheck,
  Quote,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const items = [
    "Efficient Waste Collection",
    "Cost-effective disposal solution",
    "Eco-Friendly Disposal",
    "Commercial Waste Management",
  ];
  const services = [
    {
      id: 1,
      title: "Waste Collection and Disposal",
      description:
        "Proper disposal of general, recyclable, and hazardous waste.",
      image:
        "/assets/The-Benefits-of-Waste-Collection-Services-for-Your-Business-scaled.jpg",
      link: "/waste-diposal",
    },
    {
      id: 2,
      title: "Recycling Solutions",
      description:
        "Sorting and recycling services for paper, plastic, glass, and metals.",
      image:
        "/assets/Municipal_recycling_facilities,_Montgomery_County,_MD._2007,_Credit_USEPA_(14410405277).jpg",
      link: "/recycling-solutions",
    },
    {
      id: 3,
      title: "Hazardous Waste Management",
      description:
        "Safe handling, transportation, and disposal of hazardous materials.",
      image: "/assets/ecologist-standing-field-with-garbage-biohazard-sign.jpg",
      link: "/hazardous-waste-management",
    },
    {
      id: 4,
      title: "Composting and Organic Waste Solutions",
      description: "Converting food and organic waste into compost",
      image: "/assets/whatsapp_image_2021-08-31_at_12.35.29_pm_10_1.jpeg",
      link: "/composting-organic-waste",
    },
  ];

  const reasons = [
    {
      id: 1,
      title: "Unmatched Expertise",
      description:
        "Skilled environmental specialists delivering quality results.",
      image: "/assets/Notes-Settings--Streamline-Ultimate.png",
    },
    {
      id: 2,
      title: "Proven Results",
      description: "Tangible, measurable environmental impact.",
      image:
        "/assets/Presentation-Projector-Screen-Pie-Chart--Streamline-Ultimate.png",
    },
    {
      id: 3,
      title: "Innovative Approach",
      description:
        "Creative, technology-driven solutions to environmental challenges.",
      image: "/assets/Bulb-1--Streamline-Ultimate (1).png",
    },
    {
      id: 4,
      title: "Community-Centric",
      description: " Empowering and uplifting local communities.",
      image: "/assets/Network-Users--Streamline-Ultimate.png",
    },
  ];
  const comments = [
    {
      id: 1,
      comment:
        "QuantumField Distribution has truly transformed our waste management process. Their team is highly professional, ensuring that we adhere to all environmental regulations while efficiently handling all our waste disposal needs.",
      client: {
        name: "Sarah K",
        profile_photo_url: "/assets/african-american-woman-autumn-outdoors.jpg",
        company: " EcoSolutions Inc.",
      },
    },
    {
      id: 2,
      comment:
        "As a company that values sustainability, we needed a reliable waste management partner. QuantumField Distribution exceeded our expectations with their innovative recycling programs and waste reduction strategies",
      client: {
        name: "John M",
        profile_photo_url:
          "/assets/handsome-young-african-american-with-khaki-tshirt.jpg",
        company: "Corporate Solutions Ltd",
      },
    },
    {
      id: 3,
      comment:
        "We've been using QuantumField Distribution for over a year, and their service has been nothing short of excellent. Their punctuality and attention to detail are impressive, and they've helped us create a waste disposal strategy that aligns with our company's environmental goals.",
      client: {
        name: "Alex J",
        profile_photo_url:
          "/assets/young-african-american-man-wearing-denim-shirt.jpg",
        company: "MetroCity Logistics",
      },
    },
    {
      id: 4,
      comment:
        "QuantumField Distribution has been a game-changer for our waste management system. From the timely collection to the effective recycling and disposal processes, we've seen a noticeable reduction in waste costs",
      client: {
        name: "Vanessa W",
        profile_photo_url:
          "/assets/young-beautiful-woman-with-curly-hair-isolated.jpg",
        company: " EcoSolutions Inc.",
      },
    },
  ];
  return (
    <div>
      <div className="h-[800px] w-full relative">
        <Image
          src="/assets/waste-management.jpg"
          alt="Person collecting garbage"
          fill
          className="absolute object-cover"
        />
        <div className="bg-[#0C4E1A]/70 h-full flex items-center w-full z-10 absolute px-4 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div>
            <h1 className="text-6xl font-bold text-white w-8/12 mb-6">
              Innovative Solutions for a Cleaner Planet
            </h1>
            <p className="text-white text-base w-7/12">
              We provide innovative waste management services that reduce
              environmental impact and create a cleaner future.
            </p>
            <div className="flex gap-4 mt-6">
              <Button
                type="button"
                className="bg-white hover:bg-white text-[#0C4E1A]"
              >
                Get Started
              </Button>
              <Button
                type="button"
                className="bg-transparent text-base font-medium text-white hover:bg-white border-2 hover:text-[#0C4E1A]"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* about us  */}
      <div className="flex justify-between items-center gap-6 px-4 pt-20 pb-24 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="flex-1">
          <h1 className="text-sm font-bold text-[#0C4E1A] uppercase">
            About Us
          </h1>
          <h2 className="text-6xl font-bold text-monochrome my-3">
            Advancing Sustainability in Waste Services
          </h2>
          <p className="text-base mb-4">
            We are eco-management company dedicated to environmental
            conservation, sustainable practices, and waste management solutions.
            We are committed to creating innovative and impactful strategies
            that contribute to a healthier planet while empowering businesses,
            communities, and individuals to embrace eco-friendly solutions.
          </p>
          <div className="grid grid-cols-2 ">
            {items.map((item, index) => (
              <div className="flex items-center gap-3" key={index}>
                <CircleCheck className="h-5 w-5 stroke-[#0C4E1A]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[380px] w-[360px] relative flex-1 rounded-sm">
          <Image
            src="/assets/360_F_631323355_OWXprkpNk7TFl9iwsCwLObMCTaI9KyXY.jpg"
            alt="garbarge collection"
            fill
            className="absolute object-cover rounded"
          />
        </div>
      </div>
      {/* {our services}  */}
      <div className="bg-[#f4f4f4] px-4 pt-20 pb-40 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <h1 className="text-sm uppercase text-center font-bold text-[#0C4E1A]">
          Our Services
        </h1>
        <h2 className="text-6xl font-bold text-center text-monochrome mb-10">
          Comprehensive Waste Solutions
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {services.map((service) => (
            <div key={service.id}>
              <div className="relative h-[280px] w-[260px] 4xl:w-[260px] 5xl:w-[280px] rounded-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="absolute object-cover rounded-md"
                />
                <div className="px-4 py-3 bg-white z-10 absolute border-b-4 border-b-[#0C4E1A] hover:shadow-md  -bottom-24 right-2 h-[200px] w-[248px] rounded-tl-md rounded-br-md">
                  <h2 className="text-base font-bold text-monochrome hover:text-[#0C4E1A] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-base mb-2 ">{service.description}</p>
                  <Link
                    href={service.link}
                    className="flex items-center gap-1 text-[#0C4E1A] text-base hover:text-[#0C4E1A]/90"
                  >
                    Read More <ArrowRight className="h-4 w-4 stroke-tundora" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {why choose us}   */}
      <div className="px-4 flex gap-10 py-20 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="w-[490px] h-auto flex-1 relative">
          <Image
            src="/assets/zkATV3F7Snh6pwB2iGJ3tPD9rXGXflm0RdQhIQpa.jpg"
            alt="garbage collection"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-sm uppercase font-bold text-[#0C4E1A]">
            why choose us
          </h1>
          <h2 className="text-6xl font-bold text-monochrome my-2">
            Experience the Difference with Our Services
          </h2>
          <p className="text-base">
            We are committed to delivering solutions that make a real
            difference. By combining expertise, innovation, and a deep
            commitment to sustainability, we empower our clients to achieve
            their environmental goals.
          </p>
          <p className="text-base mt-2">
            From reducing waste to restoring ecosystems, we ensure that every
            project we undertake contributes to a cleaner, greener, and
            healthier future.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-5">
            {reasons.map((reason) => (
              <div key={reason.id} className="flex gap-3">
                <div className="h-[40px] w-[40px] relative shrink-0">
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    fill
                    className="object-cover absolute"
                  />
                </div>
                <div>
                  <h2 className="text-base font-bold">{reason.title}</h2>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* {Metrics } */}
      <div className="px-4 bg-[#0C4E1A] flex items-center justify-evenly gap-10 py-20 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="flex items-center gap-4">
          <BadgeCheck className="stroke-white h-12 w-12" />
          <div>
            <p className="text-white font-bold text-6xl">20+</p>
            <p className="text-white text-base">Years Of Experience</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Users className="stroke-white h-12 w-12" />
          <div>
            <p className="text-white font-bold text-6xl">3000+</p>
            <p className="text-white text-base">Satisfied Clients</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Building2 className="stroke-white h-12 w-12" />
          <div>
            <p className="text-white font-bold text-6xl">10+</p>
            <p className="text-white text-base">Industries Served</p>
          </div>
        </div>
      </div>
      {/* {what clienst are saying}  */}
      <div className="px-4 bg-[#f4f4f4]  gap-10 py-20 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="mb-8">
          <h1 className="text-sm text-[#0C4E1A] text-center font-bold uppercase">
            Testimonials
          </h1>
          <h2 className="text-6xl text-monochrome text-center font-bold">
            Happy Clients Feedback
          </h2>
        </div>
        <div className="flex justify-center items-center w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 5000 }}
            observeParents={true}
            observer={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 80,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 240,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              1300: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              1536: {
                slidesPerView: 2,
                spaceBetween: 100,
              },
            }}
            className="flex justify-center items-center flex-row w-full"
          >
            {comments.map((comment) => (
              <SwiperSlide key={comment.id} className="pb-16 pt-12">
                <div
                  className="flex items-center gap-6 p-6 bg-white border-b-4 h-[320px] border-[#0C4E1A] rounded-sm"
                  key={comment.id}
                >
                  <div className="h-[80px] w-[80px] rounded-full relative shrink-0">
                    <Image
                      src={comment.client.profile_photo_url}
                      alt={comment.client.name}
                      fill
                      className="object-cover rounded-full absolute"
                    />
                  </div>
                  <div>
                    <Quote className="stroke-[#0C4E1A] h-5 w-5 rotate-" />
                    <p className="text-base mt-2">{comment.comment}</p>
                    <p className="mt-2 text-base text-monochrome font-bold">
                      {comment.client.name}
                    </p>
                    <p className="text-[#0C4E1A] font-medium mt-2 text-base">
                      {comment.client.company}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* call to action  */}
      <div className="flex h-full w-full relative justify-center flex-col md:flex-row  md:justify-evenly items-center">
        <Image
          src="/assets/The-Benefits-of-Waste-Collection-Services-for-Your-Business-scaled.jpg"
          fill
          alt=""
          className="absolute object-cover"
        />
        <div className="h-full w-full z-10 flex justify-center items-center flex-col  bg-[#0C4E1A]/80 py-24 px-4 md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <h1 className="text-6xl text-center text-white font-bold mb-10">
            Ready to Optimize Your Waste Management? Contact Us Now!
          </h1>
          <Button className="bg-white text-base  font-medium text-[#0C4E1A] hover:bg-white/80">
            Contact Us Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
