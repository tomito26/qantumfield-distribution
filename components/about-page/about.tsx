"use client";
import { items } from "@/lib/constants";
import {
  BadgeCheck,
  Building2,
  ChevronRight,
  CircleCheck,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { ContactUsForm } from "../forms/contact-us-form";

const About = () => {
  return (
    <div>
      <div className="h-[450px] w-full relative">
        <Image
          src="/assets/The-Benefits-of-Waste-Collection-Services-for-Your-Business-scaled.jpg"
          alt="Person collecting garbage"
          fill
          className="absolute object-cover"
        />
        <div className="bg-[#0C4E1A]/70 h-full flex items-center w-full z-10 absolute px-4 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div>
            <h1 className="md:text-6xl text-3xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-white flex text-base md:w-7/12">
              <Link
                href="/"
                className="text-white hover:text-green-950 text-base"
              >
                Home
              </Link>{" "}
              <ChevronRight className="h-6 w-6 stroke-white" /> About
            </p>
          </div>
        </div>
      </div>
      {/* about us  */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 px-4 pt-20 pb-24 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="flex-1">
          <h1 className="md:text-sm text-xs font-bold text-[#0C4E1A] uppercase">
            Who We are
          </h1>
          <h2 className="md:text-6xl text-3xl font-bold text-monochrome my-3">
            Advancing Sustainability in Waste Services
          </h2>
          <p className="text-base mb-4">
            We are eco-management company dedicated to environmental
            conservation, sustainable practices, and waste management solutions.
            We are committed to creating innovative and impactful strategies
            that contribute to a healthier planet while empowering businesses,
            communities, and individuals to embrace eco-friendly solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {items.map((item, index) => (
              <div className="flex items-center gap-3" key={index}>
                <CircleCheck className="h-5 w-5 stroke-[#0C4E1A]" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[380px] md:w-[360px] w-full relative md:flex-1 rounded-sm">
          <Image
            src="/assets/istockphoto-1410016214-612x612.jpg"
            alt="garbarge collection"
            fill
            className="absolute object-cover rounded"
          />
        </div>
      </div>
      <div className="px-4 bg-[#0C4E1A] grid grid-cols-1 md:grid-cols-4 gap-10 py-20 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <div className="md:col-span-2">
          <h1 className="text-white text-xs text-center md:text-left md:text-sm uppercase font-bold mb-3">
            Our Commitment to Quality Services
          </h1>
          <h2 className="md:text-6xl text-3xl text-center md:text-left font-bold text-white">
            World-Class Recycling & Waste Management
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className=" bg-white  h-[260px] w-full px-4 py-5 rounded-md">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                id="Target--Streamline-Flex"
                height={48}
                width={48}
              >
                <desc>
                  {"Target Streamline Icon: https://streamlinehq.com"}
                </desc>
                <g id="target--shop-bullseye-arrow-target">
                  <path
                    id="Vector"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M44.534057142857144 24.018102857142857c0 13.153782857142858 -7.3992 20.552639999999997 -20.552777142857142 20.552639999999997C10.827531428571428 44.570742857142854 3.4285714285714284 37.17188571428571 3.4285714285714284 24.018102857142857c0 -13.153714285714285 7.39896 -20.55270857142857 20.55270857142857 -20.55270857142857"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector_2"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.693074285714285 13.672422857142855c-4.771851428571429 1.082982857142857 -7.398994285714286 4.691725714285714 -7.398994285714286 10.34376 0 6.839931428571428 3.847474285714285 10.687474285714284 10.687405714285715 10.687474285714284 5.929542857142857 0 9.610182857142858 -2.8914857142857144 10.484914285714286 -8.117314285714285"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector 271"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m23.98158857142857 24.016217142857144 7.122822857142857 -7.122788571428571"
                    strokeWidth={1}
                  />
                  <path
                    id="Vector 274"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m31.10112 16.899805714285712 -0.4266857142857143 -1.3836342857142856c-0.7489714285714285 -2.4285942857142855 -0.09325714285714284 -5.0722628571428565 1.7037942857142856 -6.8694171428571424l5.217085714285714 -5.21736 1.644342857142857 5.331634285714286 5.331428571428571 1.644205714285714 -5.216914285714286 5.217257142857143c-1.7972571428571427 1.7971885714285714 -4.44102857142857 2.4529371428571425 -6.8695885714285705 1.703965714285714l-1.383462857142857 -0.4266514285714285Z"
                    strokeWidth={1}
                  />
                </g>
              </svg>
            </div>
            <div>
              <h2 className="text-[#0C4E1A] text-center font-bold text-xl my-3">
                Our Mission
              </h2>
              <p className="text-base">
                Delivering sustainable solutions to reduce waste, protect the
                environment, and inspire eco-friendly practices.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-white  h-[260px] w-full px-4 py-5 rounded-md">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              id="Visible--Streamline-Sharp"
              height="32"
              width="32"
            >
              <desc>Visible Streamline Icon: https://streamlinehq.com</desc>
              <g id="visible--eye-eyeball-open-view">
                <path
                  id="Intersect"
                  stroke="#000000"
                  d="M12.081 4c-4.664 0 -7 4 -10.5 8 3.5 4 5.836 8 10.5 8s7 -4 10.5 -8c-3.5 -4 -5.836 -8 -10.5 -8Z"
                  strokeWidth="1.5"
                ></path>
                <path
                  id="Ellipse 20"
                  stroke="#000000"
                  d="M9.081 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0"
                  strokeWidth="1.5"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <h2 className="text-[#0C4E1A] text-center font-bold text-xl my-3">
              Our Vision
            </h2>
            <p className="text-base">
              To be a global leader in environmental conservation and waste
              management, fostering a sustainable future for generations to
              come.
            </p>
          </div>
        </div>
      </div>
      {/* {process}  */}
      <div className="py-20 px-5 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <h1 className="text-[#0C4E1A] text-center text-xs md:text-sm uppercase font-bold mb-2">
          Our Process
        </h1>
        <h2 className="md:text-6xl text-3xl font-bold text-monochrome text-center mb-16">
          Here&apos;s how to get our services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex justify-center flex-col items-center">
            <div className="h-10 w-10 bg-[#0C4E1A]/90 rounded-lg flex justify-center items-center font-bold mb-8 text-white">
              01
            </div>
            <div className="md:w-[320px] w-full h-[320px] border border-b-[#0C4E1A]/70 border-b-4  px-4 py-4 shadow-lg rounded-md hover:-translate-y-3 transition ">
              <div className="flex justify-center my-4">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/assets/Calendar-Edit-1--Streamline-Ultimate.png"
                    alt="calendar"
                    fill
                    className="absolute object-cover"
                  />
                </div>
              </div>
              <h2 className="text-[#0C4E1A] text-center font-bold text-xl mb-3">
                Schedule a Pickup
              </h2>
              <p className="text-base text-center">
                Get in touch with us to schedule a pickup day
                that works for you. We&apos;ll discuss your waste management
                needs and recommend a solution that&apos;s tailored to your
                specific requirements.
              </p>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center">
            <div className="h-10 w-10 bg-[#0C4E1A]/90 rounded-lg flex justify-center items-center font-bold mb-8 text-white">
              02
            </div>
            <div className="md:w-[320px] w-full h-[320px] border border-b-[#0C4E1A]/70 border-b-4 px-4 py-4 shadow-lg rounded-md hover:-translate-y-3 transition ">
              <div className="flex justify-center my-4">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/assets/Delivery-Truck-2--Streamline-Ultimate.png"
                    alt="calendar"
                    fill
                    className="absolute object-cover"
                  />
                </div>
              </div>
              <h2 className="text-[#0C4E1A] text-center font-bold text-xl mb-3">
                Pickup and Transport
              </h2>
              <p className="text-base text-center">
                On the scheduled date, our team will arrive at your premises to
                collect your waste. We&apos;ll sort and separate the recyclable
                materials from the non-recyclable ones.
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center">
            <div className="h-10 w-10 bg-[#0C4E1A]/90 rounded-lg flex justify-center items-center font-bold mb-8 text-white">
              03
            </div>
            <div className="md:w-[320px] w-full h-[320px] border border-b-[#0C4E1A]/70 border-b-4 px-4 py-4 hover:shadow-xl hover:-translate-y-3 transition shadow-lg rounded-md">
              <div className="flex justify-center my-4">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/assets/Recycling-Sign--Streamline-Ultimate.png"
                    alt="calendar"
                    fill
                    className="absolute object-cover"
                  />
                </div>
              </div>
              <h2 className="text-[#0C4E1A] text-center font-bold text-xl mb-3">
                Waste Recycling
              </h2>
              <p className="text-base text-center">
                We take recycling seriously. The materials we collect are
                transported to our recycling facility, where they are sorted,
                processed, and repurposed into new products.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* {core metrics} */}
      <div className="flex h-full w-full relative justify-center flex-col md:flex-row  md:justify-evenly items-center">
        <Image
          src="/assets/man-throwing-plastic-bottle-recycle-trash-can.jpg"
          fill
          alt=""
          className="absolute object-cover"
        />
        <div className="h-full w-full z-10 flex justify-center md:justify-evenly items-center flex-col gap-12 md:flex-row bg-[#0C4E1A]/85 py-24 px-4 md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
          <div className="flex items-center  gap-2">
            <BadgeCheck className="stroke-white h-10 w-10" />
            <div className="flex flex-col">
              <p className="font-bold text-6xl text-white">20</p>
              <p className="text-lg font-medium text-white">Years Experience</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Users className="stroke-white h-12 w-12" />
            <div>
              <p className="text-white font-bold text-6xl">3000+</p>
              <p className="text-white font-medium text-base">
                Satisfied Clients
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Building2 className="stroke-white h-12 w-12" />
            <div>
              <p className="text-white font-bold text-6xl">10+</p>
              <p className="text-white font-medium text-base">
                Industries Served
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* our clients  */}

      {/* { contact us } */}
      <div className="px-4 md:px-[40px] lg:px-[80px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] w-full  pb-32 flex  gap-12 md:gap-20 md:flex-row flex-col">
        <div className="w-full flex-1">
          <ContactUsForm />
        </div>
        <div className="flex-1">
          <h2 className="text-xs md:text-sm uppercase  font-bold text-[#0C4E1A] mb-2">
            Need any help?
          </h2>
          <h3 className="text-monochrome text-2xl md:text-5xl font-bold mb-3">
            Get in touch with us
          </h3>
          <p>
            Got questions, ideas, or feedback? Let&apos;s connect! Whether
            you&apos;re curious about our services, have a project in mind, or
            just want to say hello, we&apos;re here for you. Reach out through
            our contact info or drop us a message, our team is ready to assist
            and explore how we can work together.
          </p>
          <div>
            <div className="mt-6 flex items-center gap-6">
              <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-16 w-16">
                <Phone className="h-8 w-8 stroke-white" />
              </div>
              <div>
                <p className="text-sm md:text-base font-bold mb-4">
                  Have any question?
                </p>
                <p className="text-sm md:text-base font-normal">
                  +254 700524588
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-6">
              <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-16 w-16">
                <Mail className="h-8 w-8 stroke-white" />
              </div>
              <div>
                <p className="text-sm md:text-base font-bold mb-4">
                  Write email
                </p>
                <p className="text-sm md:text-base font-normal">
                  quantumfielddistribution@gmail.com
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-6">
              <div className="bg-[#0C4E1A] rounded-sm flex justify-center items-center flex-col h-16 w-16">
                <MapPin className="h-8 w-8 stroke-white" />
              </div>
              <div>
                <p className="text-sm md:text-base font-bold mb-4">
                  Visit anytime
                </p>
                <p className="text-sm md:text-base font-normal">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
