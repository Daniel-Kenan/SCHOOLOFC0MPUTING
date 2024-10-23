"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { QuoteIcon, Home, Book, Users, Info, LucideIcon } from "lucide-react"




const lecturers = [
  {
    id: 1,
    name: "Prof. N.Wayi-Mgwebi ",
    position: "Head of School",
    department: "Computing",
    image: "https://media.nextgensell.com/files/hos.png"
  },
  {
    id: 2,
    name: "Ms. Lilly Kunene",
    position: "Admin Assistant",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/lilly.jpg"
  },
  {
    id: 3,
    name: "Prof. Kalema",
    position: "Professor",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/b.jpg"
  },
  {
    id: 4,
    name: "Dr. Norwell Zhakata ",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Zhaka.jpg"
  },
  {
    id: 5,
    name: "Dr. Olalekan Samuel Ogunleye",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20O.png"
  },
  {
    id: 6,
    name: "Dr. Hope Mauwa",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Hope.png"
  },
  {
    id: 7,
    name: "Dr. Motselisi Chere",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Chere.png"
  },
  {
    id: 8,
    name: "Dr. Blessing Maoneke",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Maoneke.png"
  },
  {
    id: 9,
    name: "Dr.Tanki Motsepe ",
    position: "Lecturer",
    department: "Mathemetics",
    image: "https://media.nextgensell.com/files/ump/Dr%20Tankie.jpg"
  },
  {
    id: 10,
    name: "Dr. Yeyisani Makhubele",
    position: "Lecturer",
    department: "Mathematics",
    image: "https://media.nextgensell.com/files/ump/Dr%20Yeyisane.png"
  },
  {
    id: 11,
    name: "Dr. Phumzile Mseteka",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Phumzile.png"
  },
  {
    id: 12,
    name: "Dr. Yves Semegni",
    position: "Lecturer",
    department: "Mathematics",
    image: "https://media.nextgensell.com/files/ump/Dr%20Yves.jpeg"
  },
  {
    id: 13,
    name: "Dr. Oluwaseun Awosejo",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Olu.png"
  },
  {
    id: 14,
    name: "Ms. Masuku",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Masuku.jpg"
  },
  {
    id: 15,
    name: "Mr. Rivalani Hlangwani",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/Mr%20Riva.jpg"
  },
  {
    id: 16,
    name: "Mr. Charlie Ndlovu",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Mr%20Ndlovu.jpg"
  },
  {
    id: 17,
    name: "Ms. Issah Ngomane",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Ms%20Ngomane.jpg"
  },
  {
    id: 18,
    name: "Ms. Phumla Sithole",
    position: "Lecturer",
    department: "Mathematics",
    image: "https://media.nextgensell.com/files/ump/Pumla.jpg"
  },
  {
    id: 19,
    name: "Ms. Temhlanga Malindzisa",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Temhla.png"
  },
  {
    id: 20,
    name: "Ms. Precious Leutle",
    position: "ATSP and Associate Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Precious.jpg"
  },
  {
    id: 21,
    name: "Mr. Armstrong Makome",
    position: "ATSP and Associate Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Mr%20Makome.png"
  },
  {
    id: 22,
    name: "Mr. Percy Ndlovu",
    position: "Associate Lecturer",
    department: "Computing - Siyabuswa",
    image: "https://media.nextgensell.com/files/ump/percy.png"
  },
  {
    id: 23,
    name: "Mr. Sanele Dlamini",
    position: "Lecturer",
    department: "Physics",
    image: "https://media.nextgensell.com/files/ump/percy.png"
  },
  {
    id: 24,
    name: "Mr. Kgomotso Tlhong",
    position: "Lecturer",
    department: "Communication Studies",
    image: "https://media.nextgensell.com/files/ump/percy.png"
  }
]

export default function StaffDirectory() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-[#242853] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image src="https://media.nextgensell.com/files/ump/main%20logo.jpg" alt="University Logo" width={100} height={100} />
            <h1 className="text-2xl font-bold">University of Mpumalanga</h1>
          </div>
          <Image src="https://media.nextgensell.com/files/ump/ten%20yearz.png" alt="10 Years Anniversary" width={100} height={100} />
        </div>
      </header>

      <nav className="bg-yellow-500 p-4">
        <div className="max-w-7xl mx-auto flex justify-center space-x-4">
          {[
            { icon: Home, label: "Home" },
            { icon: Book, label: "Courses" },
            { icon: Users, label: "Students" },
            { icon: Info, label: "About" },
          ].map(({ icon: Icon, label }) => (
            <Button key={label} variant="ghost" className="text-[#242853] hover:bg-yellow-600 transition-colors">
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </Button>
          ))}
        </div>
      </nav>

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#242853] mb-4">School Of Computing</h2>
            <span className="text-2xl font-bold text-[#242853] mb-4">2024 Staff Members</span>
            <div className="w-32 h-1 bg-yellow-500 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lecturers.map((lecturer, index) => (
              <motion.div
                key={lecturer.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-[#242853]">
                  <div className="relative">
                    <Image
                      src={lecturer.image}
                      alt={`Portrait of ${lecturer.name}`}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-[#242853] bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-center px-4 text-lg">{lecturer.department}</p>
                    </div>
                  </div>
                  <CardHeader className="border-t-4 border-yellow-500 p-6">
                    <CardTitle className="text-xl font-semibold text-[#242853]">{lecturer.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <p className="text-md text-gray-600">{lecturer.position}</p>
                    <div className="w-12 h-0.5 bg-red-500 mt-3"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-[#242853] text-white p-12 rounded-lg shadow-lg mt-16"
          >
            <QuoteIcon className="w-16 h-16 text-yellow-500 mb-6 mx-auto" />
            <blockquote className="text-2xl text-center italic mb-6">
  &quot;It&apos;s not that I am so smart, it is just that I stay with my problems longer.&quot;
</blockquote>

            <p className="text-center text-lg font-semibold">- Albert Einstein </p>
          </motion.div>
        </div>
      </main>

      <footer className="bg-[#242853] text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p>&copy; 2024 University of Mpumalanga. All rights reserved.</p>
          <Link href="https://www.ump.ac.za" className="text-yellow-500 hover:underline">
            Visit Official Website
          </Link>
        </div>
      </footer>
    </div>
  )
}