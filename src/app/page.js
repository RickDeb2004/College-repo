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
    <div className="flex flex-col h-screen">
      <nav className="flex items-center justify-between px-6 h-14 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-4">
          <Link
            className="flex items-center space-x-2 text-sm font-medium tracking-widest uppercase"
            href="#"
          >
            <FlagIcon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Home
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Courses
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Professors
            </Link>
            <Link
              className="font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button size="sm" variant="ghost">
        
          </Button>
          <Button size="sm" variant="outline">
            Sign up
          </Button>
        </div>
      </nav>
      <main className="flex-1 overflow-y-auto">
        <section className="flex items-center justify-center w-full min-h-screen py-16 text-center">
          <div className="container space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter lg:leading-tighter/none sm:text-5xl md:text-6xl xl:text-7xl">
              Welcome to Shad University
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Where the future is bright and the learning never stops.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12">
            <div className="grid max-w-3xl gap-4 mx-auto lg:grid-cols-2 xl:gap-8">
              <Card>
                <CardHeader>
                  <h2 className="card-title">
                    Introduction to Quantum Computing
                  </h2>
                  <p className="card-subtitle">with Dr. A. Bell</p>
                </CardHeader>
                <CardContent>
                  <p>
                    Learn the basics of quantum computing and its potential
                    applications in this introductory course.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="card-title">The Art of Storytelling</h2>
                  <p className="card-subtitle">with Prof. A. King</p>
                </CardHeader>
                <CardContent>
                  <p>
                    Unleash your creativity and master the art of storytelling
                    with this engaging course.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="card-title">Ancient History: Myth & Legend</h2>
                  <p className="card-subtitle">with Prof. A. Athena</p>
                </CardHeader>
                <CardContent>
                  <p>
                    Explore the captivating world of ancient myths and legends
                    with our expert professor.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Course
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <h2 className="card-title">The Science of Chocolate</h2>
                  <p className="card-subtitle">with Prof. W. Wonka</p>
                </CardHeader>
                <CardContent>
                  <p>
                    Delve into the delicious world of chocolate and uncover the
                    sweet secrets of this delectable treat.
                  </p>
                </CardContent>
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
          <div className="container space-y-12">
            <div className="grid max-w-3xl gap-4 mx-auto lg:grid-cols-2 xl:gap-8">
              <Card>
                <img
                  alt="Professor"
                  className="aspect-[1.6] rounded-t-xl object-cover"
                  height={250}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="space-y-2">
                  <h3 className="font-bold">Prof. M. Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Professor of Astrophysics
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="xs" variant="outline">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <img
                  alt="Professor"
                  className="aspect-[1.6] rounded-t-xl object-cover"
                  height={250}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="space-y-2">
                  <h3 className="font-bold">Prof. S. Lee</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Professor of History
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="xs" variant="outline">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <img
                  alt="Professor"
                  className="aspect-[1.6] rounded-t-xl object-cover"
                  height={250}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="space-y-2">
                  <h3 className="font-bold">Prof. E. Martinez</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Professor of Literature
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="xs" variant="outline">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <img
                  alt="Professor"
                  className="aspect-[1.6] rounded-t-xl object-cover"
                  height={250}
                  src="/placeholder.svg"
                  width={400}
                />
                <CardContent className="space-y-2">
                  <h3 className="font-bold">Prof. A. Singh</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Professor of Computer Science
                  </p>
                </CardContent>
                <CardFooter>
                  <Button size="xs" variant="outline">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter lg:leading-tighter/none sm:text-4xl md:text-5xl">
                Contact Us
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
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
              <Button size="md">Submit</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center w-full h-20 border-t border-gray-200 dark:border-gray-800">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Made with love by Shadcn
        </p>
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
