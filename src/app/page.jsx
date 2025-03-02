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
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Component() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="relative">
        {/* Top Header with Logo and Institution Name */}
        <div className="bg-gradient-to-b from-sky-200 to-sky-100 py-4 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/logo.png" // Replace with your logo (e.g., the "P" logo from the image)
              alt="KKMVNS College Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="text-black">
              <h1 className="text-xl font-bold tracking-tight">
                प्रतिभा उच्च शिक्षा संस्थान
              </h1>
              <p className="text-sm">KKMVNS College, Varanasi, Uttar Pradesh</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-700">
            <span>📞 8707046593 | 8795317303</span>
            <span>
              🌐{" "}
              <Link href="https://kkmvns.edu" className="underline">
                kkmvns.edu
              </Link>
            </span>
            <Link href="https://facebook.com/kkmvns" className="text-blue-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.691v-3.621h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.311h3.587l-.467 3.621h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-blue-800 text-white py-2 px-6">
          <div className="flex items-center justify-between">
            {/* Hamburger for Mobile */}
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

            {/* Desktop Navigation */}
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

          {/* Mobile Navigation */}
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

      <main className="flex-1 overflow-y-auto bg-white">
        <section className="flex items-center justify-center w-full min-h-screen py-16 text-center bg-white">
          <div id="home" className="container space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-black lg:leading-tighter/none sm:text-3xl md:text-5xl xl:text-7xl">
              Welcome to KKMVNS College
            </h1>
            <p className="mx-auto  max-w-[600px] text-black md:text-lg sm:text-md dark:text-black">
              Where the future is bright and the learning never stops.
            </p>
          </div>
        </section>
        <div className="mt-4">
          <img
            src="/WhatsApp Image 2024-03-14 at 21.32.12.jpeg"
            alt="hero"
            className="mx-auto"
          />
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div id="about-us" className="container space-y-12 mx-auto ">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="space-y-8">
                {/* About Us Header */}
                <h2 className="text-3xl font-bold text-blue-800 tracking-tight text-center uppercase">
                  About Us
                </h2>

                {/* Content and Image Layout */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Text Content */}
                  <div className="md:w-1/2 text-left text-gray-700 leading-relaxed">
                    <p>
                      Welcome to our esteemed institution, offering a
                      comprehensive Bachelor of Arts (B.A.) program approved by
                      the prestigious Mahatma Gandhi Kashi Vidyapeeth in
                      Varanasi, Uttar Pradesh. Situated in the vibrant city of
                      Varanasi, our college campus is located in the heart of
                      Gaur Mirzamurad, pulsating with the rich cultural heritage
                      and academic fervor that characterizes this historical
                      city. At our institution, we take pride in providing a
                      well-rounded education that encompasses a diverse range of
                      subjects tailored to nurture the intellectual curiosity
                      and holistic development of our students. Our B.A. program
                      offers a dynamic curriculum featuring a myriad of subjects
                      including Hindi, English, Education, Sanskrit, Home
                      Science, History, and Sociology, ensuring students receive
                      a multifaceted education that equips them with a broad
                      spectrum of knowledge and skills. With a focus on academic
                      excellence, our faculty comprises experienced educators
                      and scholars who are committed to fostering a stimulating
                      learning environment where students are encouraged to
                      engage critically with their subjects and explore their
                      passions. Through innovative teaching methods,
                      collaborative projects, and experiential learning
                      opportunities, we aim to inspire intellectual growth and
                      cultivate the analytical thinking, communication skills,
                      and cultural awareness essential for success in today's
                      interconnected world. Beyond academics, our college offers
                      a supportive community where students can thrive
                      personally and professionally. Whether through student
                      clubs, extracurricular activities, or community outreach
                      initiatives, we strive to empower our students to become
                      active participants in society and leaders in their chosen
                      fields. As you embark on your academic journey, we invite
                      you to join our vibrant community and discover the endless
                      possibilities that await you at our institution. Together,
                      let us embark on a transformative educational experience
                      that will shape your future and empower you to make a
                      meaningful impact in the world.
                    </p>
                  </div>

                  {/* Campus Image */}
                  <div className="md:w-1/2">
                    <img
                      src="/campus.jpg" // Replace with your campus image (e.g., similar to the reference image)
                      alt="KKMVNS College Campus"
                      className="w-full rounded-lg shadow-md"
                    />
                    {/* GPS Map Camera Icon (Placeholder) */}
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
                      <span className="ml-2 text-gray-500 text-sm">
                        GPS Map Camera
                      </span>
                    </div>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="text-center mt-6">
                  <Button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 px-6 py-2 rounded">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            {/* <div id="facilities" className="space-y-4">
              <h2 className="text-3xl font-bold text-black tracking-tighter lg:leading-tighter/none sm:text-4xl md:text-5xl text-center">
                Facilities
              </h2>
              <ul className="text-black dark:text-black text-center ">
                <li className="py-2">✦WiFi-enabled campus</li>
                <li className="py-2">✦CCTV surveillance across the campus</li>
                <li className="py-2">
                  ✦Travel vehicles available for students
                </li>
                <li className="py-2"> ✦Well-equipped laboratories</li>
                <li className="py-2">✦Spacious playing ground</li>
                <li className="py-2">
                  ✦ Smart classrooms with modern technology
                </li>
                <li className="py-2">✦Biometric attendance system</li>
              </ul>
            </div> */}
            <section id="facilities" className="py-16 bg-white">
              <div className="container mx-auto px-4 max-w-5xl">
                <div className="space-y-8">
                  {/* Facilities Header */}
                  <h2 className="text-3xl font-bold text-blue-800 tracking-tight text-center uppercase">
                    Our Facilities
                  </h2>

                  {/* Introductory Paragraph */}
                  <p className="text-gray-700 text-left max-w-3xl mx-auto leading-relaxed">
                    At KKMVNS College, we provide exceptional facilities to
                    enhance the learning experience. Our well-equipped
                    infrastructure is designed to support both academic and
                    extracurricular activities.
                  </p>

                  {/* Facilities Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: "Zoology Lab", src: "/zoology-lab.jpg" },
                      { name: "Botany Lab", src: "/botany-lab.jpg" },
                      { name: "Physics Lab", src: "/physics-lab.jpg" },
                      { name: "Chemistry Lab", src: "/chemistry-lab.jpg" },
                      { name: "Library", src: "/library.jpg" },
                      { name: "Sick Room", src: "/sick-room.jpg" },
                      { name: "Seminar Hall", src: "/seminar-hall.jpg" },
                      { name: "Games & Sport", src: "/games-sport.jpg" },
                    ].map((facility) => (
                      <div key={facility.name} className="text-center">
                        <img
                          src={facility.src} // Replace with your actual facility images
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
            </section>

            <h2 className="text-3xl font-bold mb-4 text-center text-black">
              Courses
            </h2>
            <div
              id="courses"
              className="grid max-w-3xl gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-3 xl:gap-8"
            >
              <Card className="md:h-15rem lg:col-span-1 xl:col-span-1 ">
                <CardHeader>
                  <h2 className="card-title text-lg md:text-xl lg:text-lg text-center xl:text-lg">
                    Bachelor of Arts (B.A.) in Hindi
                  </h2>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter className=" md:text-center">
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="card-title text-lg md:text-xl text-center lg:text-lg xl:text-lg">
                    {" "}
                    Bachelor of Arts (B.A.) in Sanskrit
                  </h2>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="card-title text-lg md:text-xl text-center lg:text-lg xl:text-lg">
                    {" "}
                    Bachelor of Arts (B.A.) in English
                  </h2>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="card-title text-lg md:text-xl text-center lg:text-lg xl:text-lg">
                    {" "}
                    Bachelor of Arts (B.A.) in Home Science
                  </h2>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="card-title text-lg md:text-xl text-center lg:text-lg xl:text-lg">
                    {" "}
                    Bachelor of Arts (B.A.) in History
                  </h2>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="card-title text-lg md:text-xl text-center lg:text-lg xl:text-lg">
                    {" "}
                    Bachelor of Arts (B.A.) in Sociology
                  </h2>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="card-title text-lg md:text-xl text-center lg:text-lg xl:text-lg">
                    {" "}
                    Bachelor of Arts (B.A.) in Education
                  </h2>
                </CardHeader>
                <CardContent></CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-4 text-center text-black">
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
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-4 text-center text-black">
            Boards of Trustees
          </h2>
          <div className="container space-y-12 mx-auto">
            <div className="grid max-w-3xl gap-4 mx-auto lg:grid-cols-1 xl:gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <img
                    alt="Events"
                    className="w-full h-auto rounded-t-xl object-cover"
                    height={250}
                    src="/WhatsApp Image 2024-03-14 at 21.38.08.jpeg"
                    width={250}
                  />
                  <CardContent>
                    <p className="font-bold text-center mb-4">Manager</p>
                    <p className="font-bold text-center">Sanjay Singh</p>
                  </CardContent>
                </Card>
                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardContent className="flex flex-col justify-center items-center h-full">
                      <p className="font-bold text-center mb-4">President</p>
                      <p className="font-bold text-center">Saksham Singh</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex flex-col justify-center items-center h-full">
                      <p className="font-bold text-center mb-4">
                        Treasure Manager
                      </p>
                      <p className="font-bold text-center">Shivanee Singh</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="flex flex-col justify-center items-center h-full">
                      <p className="font-bold text-center mb-4">
                        Vice President{" "}
                      </p>
                      <p className="font-bold text-center">Anuradha Singh</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {[
                { name: "Facilities", icon: "microscope", link: "#facilities" },
                { name: "Virtual Tour", icon: "360", link: "#virtual-tour" },
                { name: "News & Notices", icon: "news", link: "#news" },
                { name: "Event Calendar", icon: "calendar", link: "#events" },
                { name: "Downloads", icon: "download", link: "#downloads" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="relative w-24 h-24 bg-blue-800 text-white flex flex-col items-center justify-center rounded-lg transition-all duration-300 ease-in-out hover:rounded-full hover:bg-red-500 hover:w-24 hover:h-24"
                >
                  {/* Icon */}
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
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 px-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    {/* Logo and Contact Info */}
    <div className="flex flex-col items-start mb-4 md:mb-0">
      <div className="flex items-center space-x-4">
        <Image
          src="/logo.png" // Replace with your logo (e.g., the "P" logo from the image)
          alt="KKMVNS College Logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="text-white">
          <h3 className="text-lg font-bold">प्रतिभा उच्च शिक्षा संस्थान</h3>
          <p className="text-sm">KKMVNS College, Varanasi, Uttar Pradesh</p>
        </div>
      </div>
      <div className="mt-2 text-sm">
        <p>📍 Firozpur urf Shekhpur, Phulpur Town, Prayagraj, Uttar Pradesh</p>
        <p>📞 8707046593 | 8795317303 | 9305233603</p>
        <p>✉️ Pratibhaus8@gmail.com</p>
      </div>
    </div>

    {/* Links Columns */}
    <div className="flex flex-col md:flex-row gap-8 text-sm">
      {/* User Links */}
      <div>
        <h4 className="font-bold mb-2">User Links</h4>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <Link href="#home" className="hover:text-gray-300">Home</Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
            <Link href="#about-us" className="hover:text-gray-300">About Us</Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <Link href="#vision-mission" className="hover:text-gray-300">Vision & Mission</Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <Link href="#fee-refund" className="hover:text-gray-300">Fee Refund Policy</Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <Link href="#contact" className="hover:text-gray-300">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Education Details */}
      <div>
        <h4 className="font-bold mb-2">Education Details</h4>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <Link href="#courses" className="hover:text-gray-300">Courses</Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <Link href="#facilities" className="hover:text-gray-300">Facilities</Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            </svg>
            <Link href="#downloads" className="hover:text-gray-300">Downloads</Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z" />
            </svg>
            <Link href="#gallery" className="hover:text-gray-300">Gallery</Link>
          </li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-bold mb-2">Quick Links</h4>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            <Link href="#university" className="hover:text-gray-300">Prof. Rajendra Singh (Raju Bhaiya) University</Link>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
            <Link href="#committees" className="hover:text-gray-300">Committee & Cells</Link>
          </li>
        </ul>
      </div>
    </div>

    {/* Scroll to Top Button */}
    <div className="mt-4 md:mt-0">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
