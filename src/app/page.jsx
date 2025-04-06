"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import HeroCarousel from "@/components/ui/HeroCarousel";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

export default function Component() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(true);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(true);
  const [date, setDate] = useState(new Date());

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleNoticeModal = () => {
    setIsNoticeModalOpen((prev) => {
      console.log(
        "Toggling notice modal, previous state:",
        prev,
        "new state:",
        !prev
      );
      return !prev;
    });
  };
  const toggleRegistrationModal = () => {
    setIsRegistrationModalOpen(!isRegistrationModalOpen);
  };
  const toggleCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <div className="bg-red-800 text-white text-sm py-1 px-4 flex flex-col sm:flex-row items-center justify-between font-medium">
        <div className="flex items-center space-x-2">
          <span className="hidden sm:inline-block">
            📢 Public self-Disclosure as Required vide ugc letter no F.14-4/2023
            cppl
          </span>
          <a
            href="#"
            className="underline font-semibold hover:text-yellow-300 transition"
          ></a>
        </div>
        <div className="flex items-center space-x-2 mt-1 sm:mt-0">
          <span>
            College Code: <span className="font-bold">1131</span>
          </span>
          <span className="text-green-400 font-bold">📞 7985252219 </span>
        </div>
      </div>
      <header className="relative">
        {/* Top Header with Logo and Institution Name */}
        <div className="bg-gradient-to-b from-sky-200 to-sky-100 py-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="KKMVNS College Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="text-black text-center sm:text-left">
              <h1 className="text-xl font-bold tracking-tight">
                किशोरी कमलेश महाविद्यालय
              </h1>
              <p className="text-sm">
                KKMVNS College, Gaur Mirzamurad, Varanasi, Uttar Pradesh
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-700 flex-wrap justify-center">
            <span>📞 7985252219 | 9956761690</span>
            <span>
              🌐{" "}
              <Link href="https://kkmvns.in" className="underline">
                kkmvns.in
              </Link>
            </span>
            <Link
              href="https://www.facebook.com/share/1Z4XkqSQQu/"
              className="text-blue-600"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.691v-3.621h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.311h3.587l-.467 3.621h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-blue-800 text-white py-2 px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <button className="block md:hidden text-white" onClick={toggleNav}>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <div className="hidden md:flex items-center space-x-6">
              {[
                "Home",
                "About Us",
                "Admission",
                "Facilities",
                "Staff",
                "News",
                "Downloads",
                "Gallery",
                "Contact Us",
                "Events",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white hover:text-yellow-300 font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {isNavOpen && (
            <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-blue-800">
              {[
                "Home",
                "About Us",
                "Admission",
                "Facilities",
                "Staff",
                "News",
                "Downloads",
                "Gallery",
                "Contact Us",
                "Events",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white hover:text-yellow-300 font-medium"
                  onClick={toggleNav}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* Yellow Underline */}
        <div className="h-1 bg-yellow-400"></div>
      </header>

      <main className="flex-1 overflow-y-auto bg-white relative">
        {/* Sticky Notice Modal */}
        {/* <div
          className={`fixed top-20 left-4 z-50 bg-gray-700 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-lg shadow-lg transition-all duration-300 ${
            isNoticeModalOpen ? "block" : "hidden"
          }`}
          style={{ width: "300px" }}
        >
          <h3 className="text-lg font-bold mb-2">NOTICE BOARD</h3>
          <p className="text-sm">
            KKMVNS College launches their anti-ragging declaration.
          </p>
          <div className="mt-4 flex flex-col space-y-2">
            <Link
              href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:5d33dc21-2d91-4779-8b28-6810dd975eb9"
              className="text-blue-300 hover:underline"
            >
              Anti Ragging Declaration
            </Link>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleNoticeModal();
              console.log(
                "Close button clicked, new state should be:",
                !isNoticeModalOpen
              );
            }}
            className="absolute top-2 right-2 text-white hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div> */}

        {/* Sticky Registration Modal */}
        {/* <div
          className={`fixed top-20 right-4 z-50 bg-blue-600 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-lg shadow-lg transition-all duration-300 ${
            isRegistrationModalOpen ? "block" : "hidden"
          }`}
          style={{ width: "300px" }}
        >
          <h3 className="text-lg font-bold mb-2">STAFF DECLARATION</h3>
          <div className="mt-4">
            <Link
              href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:6ccc13b7-8f1c-49e3-972f-f1836cb76da3"
              className="text-red-300 hover:underline block mb-2"
            >
              LINK
            </Link>
          </div>
          <button
            onClick={toggleRegistrationModal}
            className="absolute top-2 right-2 text-white hover:text-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div> */}

        {/* Hero Section with Officials on the Right */}
        <section className="relative w-full min-h-[70vh] flex flex-col md:flex-row">
          {/* Hero Image */}
          <div className="relative w-full md:w-2/3 h-[70vh]">
            <Image
              src="/hero1.png"
              alt="Campus Image"
              layout="fill"
              objectFit="cover"
              className="object-center"
              priority={true}
            />
            <div className="absolute bottom-0 w-full bg-[#98002e] h-8 flex items-center overflow-hidden">
              <div className="whitespace-nowrap animate-marquee text-white text-sm font-medium px-4">
                Admission Open For Session 2025
              </div>
            </div>
          </div>

          {/* Officials Section */}
          <div className="w-full md:w-1/3 bg-white p-6 flex flex-col space-y-6">
            {/* Card Component */}
            {[
              {
                title: "Vice-Chancellor ",
                name: "Prof. Anand Kumar Tyagi",
                role: "Vice-Chancellor",
                org: "Mahatma Gandhi Kashi Vidyapith University,Varanasi,Uttar Pradesh",
                img: "/vc.png", // Replace with actual path
              },
              {
                title: "District Magistrate (Mau)",
                name: "Shri S Rajalingam, IAS",
                role: "District Magistrate",
                org: "Varanasi District",
                img: "/dm.png", // Replace with actual path
              },
              {
                title: "Manager",
                name: "Mr. Sanjay Singh",
                role: "Manager",
                org: "KKMVNS College, Gaur Mirzamurad, Varanasi, Uttar Pradesh",
                img: "/manager.png", // Replace with actual path
              },
            ].map((person) => (
              <div
                key={person.name}
                className="border border-gray-200 shadow-sm rounded-md overflow-hidden"
              >
                <div className="bg-gray-100 px-4 py-2 border-l-4 border-[#d63384]">
                  <h2 className="text-md font-semibold text-[#d63384]">
                    {person.title}
                  </h2>
                </div>
                <div className="flex items-center p-4 space-x-4">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                  />
                  <div>
                    <p className="font-bold text-gray-800">{person.name}</p>
                    <p className="text-gray-700">{person.role}</p>
                    <p className="text-gray-700">{person.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div id="thought-of-the-day" className="container space-y-12 mx-auto">
            <section className="py-8 bg-blue-800 text-white">
              <div className="container mx-auto px-4 max-w-5xl text-center">
                <h2 className="text-3xl font-bold tracking-tight uppercase mb-4">
                  Thought of the Day
                </h2>
                <p className="text-sm italic mb-2">Today's Quote</p>
                <p className="text-lg font-medium">
                  "The true art of memory is the art of attention."
                </p>
                <p className="text-sm mt-2">— Samuel Johnson</p>
              </div>
            </section>
          </div>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* What's New Column */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold text-blue-800 mb-4 uppercase border-b-2 border-yellow-400 pb-2">
                    What's New
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-700">
                        <span className="text-blue-600 font-medium"></span>{" "}
                        Admission Open for Session 2025-26
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-700">
                        <span className="text-blue-600 font-medium"></span>{" "}
                      </p>
                    </div>
                    <div></div>
                  </div>
                </div>

                {/* Student Zone Column */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold text-blue-800 mb-4 uppercase border-b-2 border-yellow-400 pb-2">
                    Student Zone
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="/anti.png"
                        alt="Anti Ragging"
                        className="w-10 h-10 rounded-full"
                      />
                      <a
                        href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:02849c01-c44c-4a73-863e-0d4188edaa7b" // Replace with your actual file path
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded transition"
                      >
                        <p className="text-gray-700">Anti Ragging Committee</p>
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/sexual.png"
                        alt="Sexual Harassment"
                        className="w-10 h-10 rounded-full"
                      />

                      <a
                        href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:02849c01-c44c-4a73-863e-0d4188edaa7b" // Replace with your actual file path
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded transition"
                      >
                        <p className="text-gray-700">
                          Sexual Harassment Committee
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Others Column */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold text-blue-800 mb-4 uppercase border-b-2 border-yellow-400 pb-2">
                    Others
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="/rti.png"
                        alt="RTI"
                        className="w-10 h-10 rounded-full"
                      />
                      <a
                        href="https://eastern-thistle-375.notion.site/Right-to-Information-RTI-1cdbc2b60f3e801b836eda00f0a266b9" // Replace with your actual file path
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded transition"
                      >
                        <p className="text-gray-700">Right to Information</p>
                      </a>
                    </div>

                    <div className="flex items-center space-x-2">
                      <img
                        src="/staff.png"
                        alt="RTI"
                        className="w-10 h-10 rounded-full"
                      />
                      <a
                        href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:6ccc13b7-8f1c-49e3-972f-f1836cb76da3" // Replace with your actual file path
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded transition"
                      >
                        <p className="text-gray-700">STAFF DECLARATION</p>
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/aim.png"
                        alt="RTI"
                        className="w-10 h-10 rounded-full"
                      />
                      <a
                        href="https://eastern-thistle-375.notion.site/Aims-Objectives-1cdbc2b60f3e80e7b75cc57f2cc9e2e6" // Replace with your actual file path
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded transition"
                      >
                        <p className="text-gray-700">AIMS AND OBJECTIVES</p>
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <img
                        src="/ALU.png"
                        alt="RTI"
                        className="w-10 h-10 rounded-full"
                      />
                      <a
                        href="https://eastern-thistle-375.notion.site/ALUMNI-1cdbc2b60f3e80f4b7ccc385b695656f?pvs=74" // Replace with your actual file path
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:bg-gray-200 p-2 rounded transition"
                      >
                        <p className="text-gray-700">ALUMNI</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div id="about-us" className="container space-y-12 mx-auto">
            <section id="about-us" className="py-16 bg-white">
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-blue-800 tracking-tight text-center uppercase">
                    About Us
                  </h2>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 text-left text-gray-700 leading-relaxed">
                      <p>
                        Welcome to KKMVNS College, an esteemed institution
                        offering a comprehensive Bachelor of Arts (B.A.) program
                        approved by Mahatma Gandhi Kashi Vidyapeeth, Varanasi,
                        Uttar Pradesh. Located in the heart of Gaur Mirzamurad,
                        Varanasi, our campus thrives with rich cultural heritage
                        and academic excellence. We pride ourselves on providing
                        a well-rounded education with a dynamic curriculum,
                        including subjects like Hindi, English, Education,
                        Sanskrit, Home Science, History, and Sociology. Our
                        experienced faculty fosters a stimulating environment,
                        encouraging critical thinking and holistic development
                        through innovative teaching, projects, and
                        extracurricular activities. Join our vibrant community
                        to shape your future and make a meaningful impact.
                      </p>
                    </div>
                    <div className="md:w-1/2">
                      <img
                        src="/hero1.png"
                        alt="KKMVNS College Campus"
                        className="w-full rounded-lg shadow-md"
                      />
                      <div className="flex justify-center mt-4">
                        <svg
                          className="h-6 w-6 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <a href="https://g.co/kgs/Mp71XAf" target="_blank">
                          <span className="ml-2 text-gray-500 text-sm">
                            GPS Map Camera
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="facilities" className="py-16 bg-white">
              <div className="container mx-auto px-4 max-w-5xl">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-blue-800 tracking-tight text-center uppercase">
                    Our Hands on Laboratories
                  </h2>
                  <p className="text-gray-700 text-left max-w-3xl mx-auto leading-relaxed">
                    At KKMVNS College, we provide exceptional facilities to
                    enhance the learning experience. Our well-equipped
                    infrastructure is designed to support both academic and
                    extracurricular activities.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: "Home Science Lab ", src: "/home.png" },
                      { name: "Education Lab", src: "/home2.png" },
                      { name: "Home Science Lab ", src: "/home3.png" },
                      { name: "Home Science Lab ", src: "/home4.png" },
                      { name: "Computer Lab", src: "/lab.png" },
                      { name: "Library", src: "/lib.png" },
                      { name: "Games & Sport", src: "/sports.png" },
                    ].map((facility) => (
                      <div key={facility.name} className="text-center">
                        <img
                          src={facility.src}
                          alt={facility.name}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                        <p className="mt-2 text-gray-700 font-medium">
                          {facility.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="container mx-auto px-4 max-w-5xl">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-blue-800 tracking-tight text-center uppercase">
                    Our Facilities
                  </h2>
                  <p className="text-gray-700 text-left max-w-3xl mx-auto leading-relaxed">
                    At KKMVNS College, we provide exceptional facilities to
                    enhance the learning experience. Our well-equipped
                    infrastructure is designed to support both academic and
                    extracurricular activities.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: "CCTV Survellience", src: "/cctv.png" },
                      { name: "Cafeteria", src: "/cafe.png" },
                      { name: "Purified Drinking Water", src: "/water.png" },
                     
                    ].map((facility) => (
                      <div key={facility.name} className="text-center">
                        <img
                          src={facility.src}
                          alt={facility.name}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                        <p className="mt-2 text-gray-700 font-medium">
                          {facility.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
            </section>
            <section id="courses" className="py-16 bg-[#14487A]">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Side: Courses Offered */}
                  <div>
                    <h2 className="text-white text-2xl font-semibold border-b border-[#B5D044] pb-2 mb-6">
                      COURSES OFFERED
                    </h2>
                    <div className="grid grid-cols-2 gap-6">
                      {/* B.A. Card */}
                      <div className="relative bg-[#4CA7B3] h-40 flex items-center justify-center">
                       
                        <span className="text-white text-2xl font-bold z-10">
                          B.A.
                        </span>
                      </div>

                      {/* B.Sc. Card */}
                      {/* <div className="relative bg-[#4CA7B3] h-40 flex items-center justify-center">
                        <img
                          src="/bsc.jpg" // Use the correct image path
                          alt="B.Sc."
                          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                        />
                        <span className="text-white text-2xl font-bold z-10">
                          B.SC.
                        </span>
                      </div> */}
                    </div>
                  </div>

                  {/* Right Side: Approval Letters */}
                  <div>
                    <h2 className="text-white text-2xl font-semibold border-b border-[#B5D044] pb-2 mb-6">
                      APPROVAL LETTERS
                    </h2>
                    <div className="flex flex-col gap-4">
                      {[
                        {
                          name: "B.A. AFFILIATION",
                          file: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:500f5e52-abdf-46f6-82b6-d00df826faaf",
                        },
                        {
                          name: "PRINCIPAL ANUMODAN LETTER",
                          file: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:e4acc1ad-50d3-4417-9189-1831765782a2",
                        },
                        {
                          name: "TEACHER ANUMODAN",
                          file: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:e4acc1ad-50d3-4417-9189-1831765782a2",
                        },
                      ].map((doc) => (
                        <a
                          key={doc.name}
                          href={doc.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#96C121] text-white px-6 py-3 font-medium text-sm flex items-center gap-2 hover:opacity-90 transition rounded-sm w-fit"
                          download
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
                            />
                          </svg>
                          {doc.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-800 tracking-tight text-center uppercase">
              Our Facilities
            </h2>
            <p className="text-gray-700 text-left max-w-3xl mx-auto leading-relaxed">
              At KKMVNS College, we provide exceptional facilities to enhance
              the learning experience. Our well-equipped infrastructure is
              designed to support both academic and extracurricular activities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "CCTV Survellience", src: "/cctv.png" },
                { name: "Cafeteria", src: "/cafe.png" },
                { name: "Purified Drinking Water", src: "/water.png" },
              ].map((facility) => (
                <div key={facility.name} className="text-center">
                  <img
                    src={facility.src}
                    alt={facility.name}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <p className="mt-2 text-gray-700 font-medium">
                    {facility.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">
            Events
          </h2>
          <div id="events" className="container space-y-12 mx-auto">
            <div className="grid max-w-3xl gap-4 mx-auto lg:grid-cols-2 xl:gap-8">
              <Card>
                <img
                  alt="Events"
                  className="w-full h-auto rounded-t-xl object-cover"
                  height={250}
                  src="/WhatsApp Image 2024-03-14 at 21.35.50.jpeg"
                  width={400}
                />
              </Card>
              <Card>
                <img
                  alt="Events"
                  className="w-full h-auto rounded-t-xl object-cover"
                  height={250}
                  src="/WhatsApp Image 2024-03-14 at 21.35.08 (1).jpeg"
                  width={400}
                />
              </Card>
              <Card>
                <img
                  alt="Events"
                  className="w-full h-auto rounded-t-xl object-cover"
                  height={250}
                  src="/WhatsApp Image 2024-03-14 at 21.35.09 (1).jpeg"
                  width={400}
                />
              </Card>
              <Card>
                <img
                  alt="Events"
                  className="w-full h-auto rounded-t-xl object-cover"
                  height={250}
                  src="/WhatsApp Image 2024-03-14 at 21.35.09.jpeg"
                  width={400}
                />
              </Card>
              <Card>
                <img
                  alt="Events"
                  className="w-full h-auto rounded-t-xl object-cover"
                  height={250}
                  src="/WhatsApp Image 2024-03-14 at 21.36.31.jpeg"
                  width={400}
                />
              </Card>
            </div>
          </div>
        </section> */}
        <section id="trustees" className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-blue-800 tracking-tight text-center mb-8">
              Boards of Trustees
            </h2>
            <div className="grid max-w-3xl gap-6 mx-auto lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
              {[
                { role: "President", name: "Saksham Singh" },
                { role: "Treasurer Manager", name: "Shivanee Singh" },
                { role: "Vice President", name: "Anuradha Singh" },
              ].map((trustee, index) => (
                <Card
                  key={index}
                  className="md:h-40 lg:col-span-1 xl:col-span-1 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_5px_rgba(0,112,255,0.5)] rounded-lg border border-gray-300"
                >
                  <CardHeader className="text-center py-4">
                    <CardTitle className="text-lg md:text-xl text-black">
                      {trustee.role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center h-20">
                    <p className="text-black text-center font-bold text-lg mt-4">
                      {trustee.name}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center"></CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {[
                { name: "Facilities", icon: "microscope", link: "#facilities" },
                {
                  name: "Virtual Tour",
                  icon: "360",
                  link: "https://g.co/kgs/Mp71XAf",
                },
                { name: "News & Notices", icon: "news", link: "#news" },
                { name: "Event Calendar", icon: "calendar", link: "#events" },
                // { name: "Downloads", icon: "download", link: "/down.pdf" },
              ].map((item) => (
                <div
                  key={item.name}
                  onClick={
                    item.name === "Event Calendar" ? toggleCalendar : undefined
                  }
                  className="relative w-24 h-24 bg-blue-800 text-white flex flex-col items-center justify-center rounded-lg transition-all duration-300 ease-in-out hover:rounded-full hover:bg-red-500 hover:w-24 hover:h-24 cursor-pointer"
                >
                  {item.icon === "microscope" && (
                    <svg
                      className="w-8 h-8 mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                    </svg>
                  )}
                  {item.icon === "360" && (
                    <svg
                      className="w-8 h-8 mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                    </svg>
                  )}
                  {item.icon === "news" && (
                    <svg
                      className="w-8 h-8 mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 5h14v2H5zM5 11h14v2H5zM5 17h14v2H5z" />
                    </svg>
                  )}
                  {item.icon === "calendar" && (
                    <svg
                      className="w-8 h-8 mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
                    </svg>
                  )}
                  {item.icon === "download" && (
                    <svg
                      className="w-8 h-8 mb-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
                    </svg>
                  )}
                  <span className="text-sm font-medium text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {isCalendarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <style jsx>{`
                  .react-calendar__month-view__weekdays__weekday {
                    color: black !important;
                    font-weight: bold;
                  }
                  .react-calendar__tile {
                    color: black;
                  }
                  .react-calendar__tile--now {
                    background: #e0f7fa !important;
                    color: black !important;
                  }
                  .react-calendar__tile--active {
                    background: #0070f3 !important;
                    color: white !important;
                  }
                `}</style>
                <Calendar onChange={setDate} value={date} />
                <Button
                  onClick={toggleCalendar}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-start mb-4 md:mb-0">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="KKMVNS College Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="text-white">
                <h3 className="text-lg font-bold">किशोरी कमलेश महाविद्यालय</h3>
                <p className="text-sm">
                  KKMVNS College, Varanasi, Uttar Pradesh
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm">
              <p>📍 Gaur Mirzamurad Varanasi, Uttar Pradesh</p>
              <p>📞 7985252219 | 9956761690</p>
              <p>✉️ kkmvns4@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 text-sm">
            <div>
              <h4 className="font-bold mb-2">User Links</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  <Link href="#home" className="hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  </svg>
                  <Link href="#about-us" className="hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  <Link href="#vision-mission" className="hover:text-gray-300">
                    Vision & Mission
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <Link href="#fee-refund" className="hover:text-gray-300">
                    Fee Refund Policy
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <Link href="#contact" className="hover:text-gray-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Education Details</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  <Link href="#courses" className="hover:text-gray-300">
                    Courses
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  <Link href="#facilities" className="hover:text-gray-300">
                    Facilities
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
                  </svg>
                  <Link href="#downloads" className="hover:text-gray-300">
                    Downloads
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" />
                  </svg>
                  <Link href="#gallery" className="hover:text-gray-300">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                  <Link href="#committees" className="hover:text-gray-300">
                    Committee & Cells
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
