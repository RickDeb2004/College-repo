/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
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

export default function Component() {
  return (
    <div
      className="flex flex-col h-screen "
      style={{ backgroundColor: "#f5f5dc" }}
    >
      <nav className="flex items-center justify-between px-6 h-14 border-b border-gray-800 dark:border-gray-900">
        <div className="flex items-center space-x-4">
          <Link
            className="flex items-center space-x-2 text-sm font-medium tracking-widest uppercase"
            href="#"
          >
            <FlagIcon className="h-6 w-6 text-black" />
            <span className="sr-only">Home</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link className="font-medium text-black" href="home">
              Home
            </Link>
            <Link className="font-medium text-black" href="about-us">
              About us
            </Link>
            <Link className="font-medium text-black" href="courses">
              Courses
            </Link>
            <Link className="font-medium  text-black" href="facilities">
              Facilities
            </Link>
            <Link className="font-medium text-black" href="professors">
              Professors
            </Link>
            <Link className="font-medium text-black" href="contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <h2 className="font-bold text-black dark:text-black">ESTD:2020</h2>
        </div>
      </nav>
      <main className="flex-1 overflow-y-auto">
        <section className="flex items-center justify-center w-full min-h-screen py-16 text-center">
          <div className="container space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-black lg:leading-tighter/none sm:text-5xl md:text-6xl xl:text-7xl">
              Welcome to KKMVNS University
            </h1>
            <p className="mx-auto max-w-[600px] text-black md:text-xl dark:text-gray-400">
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
          <div className="container space-y-12 mx-auto ">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter  text-black lg:leading-tighter/none sm:text-4xl md:text-5xl text-center">
                About Us
              </h2>
              <p className=" dark:text-gray-400 text-center text-black ">
                Welcome to our esteemed institution, offering a comprehensive
                Bachelor of Arts (B.A.) program approved by the prestigious
                Mahatma Gandhi Kashi Vidyapeeth in Varanasi, Uttar Pradesh.
                Situated in the vibrant city of Varanasi, our college campus is
                located in the heart of Gaur Mirzamurad, pulsating with the rich
                cultural heritage and academic fervor that characterizes this
                historical city. At our institution, we take pride in providing
                a well-rounded education that encompasses a diverse range of
                subjects tailored to nurture the intellectual curiosity and
                holistic development of our students. Our B.A. program offers a
                dynamic curriculum featuring a myriad of subjects including
                Hindi, English, Education, Sanskrit, Home Science, History, and
                Sociology, ensuring students receive a multifaceted education
                that equips them with a broad spectrum of knowledge and skills.
                With a focus on academic excellence, our faculty comprises
                experienced educators and scholars who are committed to
                fostering a stimulating learning environment where students are
                encouraged to engage critically with their subjects and explore
                their passions. Through innovative teaching methods,
                collaborative projects, and experiential learning opportunities,
                we aim to inspire intellectual growth and cultivate the
                analytical thinking, communication skills, and cultural
                awareness essential for success in today's interconnected world.
                Beyond academics, our college offers a supportive community
                where students can thrive personally and professionally. Whether
                through student clubs, extracurricular activities, or community
                outreach initiatives, we strive to empower our students to
                become active participants in society and leaders in their
                chosen fields. As you embark on your academic journey, we invite
                you to join our vibrant community and discover the endless
                possibilities that await you at our institution. Together, let
                us embark on a transformative educational experience that will
                shape your future and empower you to make a meaningful impact in
                the world.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black tracking-tighter lg:leading-tighter/none sm:text-4xl md:text-5xl text-center">
                Facilities
              </h2>
              <ul className="text-black dark:text-gray-400 text-center ">
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
            </div>

            <h2 className="text-3xl font-bold mb-4 text-center text-black">
              Courses
            </h2>
            <div className="grid max-w-3xl gap-4 mx-auto lg:grid-cols-2 xl:gap-8">
              <Card>
                <CardHeader>
                  <h2 className="card-title">
                    Bachelor of Arts (B.A.) in Hindi
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
                  <h2 className="card-title">
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
                  <h2 className="card-title">
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
                  <h2 className="card-title">
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
                  <h2 className="card-title">
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
                  <h2 className="card-title">
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
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <h2 className="text-3xl font-bold mb-4 text-center text-black">
            Events
          </h2>
          <div className="container space-y-12 mx-auto">
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
            <div className="grid max-w-3xl gap-4 mx-auto lg:grid-cols-2 xl:gap-8">
              <Card>
                <img
                  alt="Events"
                  className="w-full h-auto rounded-t-xl object-cover"
                  height={250}
                  src="/WhatsApp Image 2024-03-14 at 21.38.08.jpeg"
                  width={400}
                />
                <CardContent>
                  <p className="font-bold">Manager: Sanjay Singh</p>
                </CardContent>
              </Card>
              <Card flex flex-col justify-end>
                <CardContent>
                  <p className="font-bold">President: Saksham Singh</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="font-bold">Traesure Manager: Shivanee Singh</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <p className="font-bold">Vice President : Anuradha Singh</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl  text-center  text-black font-bold tracking-tighter lg:leading-tighter/none sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Have a question or need more information? Send us a message.
              </p>
            </div>
            <div className="grid max-w-sm gap-4 mx-auto">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={3}
                />
              </div>
              <Button size="md" className="border border-black">
                Submit
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="flex items-center justify-center w-full h-20 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Approved by. Mahatma Gandhi Kashi Vidyapeeth varanasi.
        </p>
      </footer> */}
      <footer className="flex flex-col items-center text-black justify-center w-full h-20 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-black mb-2 font-bold">
          Approved by. Mahatma Gandhi Kashi Vidyapeeth Varanasi.
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
          <p className="text-black">Email: kkmvns4@gmail.com</p>
          <p className="text-black">Contact No: +91 7985252219 & 9956761690</p>
          <p className="text-black">
            Address: Gaur mirzamurad varanasin, Uttar Pradesh
          </p>
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
