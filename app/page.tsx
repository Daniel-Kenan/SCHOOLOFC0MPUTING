"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

const lecturers = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    position: "Professor",
    department: "Computer Science",
    image: "https://media.nextgensell.com/files/ump/b.jpg"
  },
  {
    id: 2,
    name: "Dr. John Doe",
    position: "Associate Professor",
    department: "Physics",
    image: "https://media.nextgensell.com/files/ump/c.jpg"
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    position: "Assistant Professor",
    department: "Mathematics",
    image: "https://media.nextgensell.com/files/ump/d.png"
  },
  {
    id: 4,
    name: "Dr. Michael Johnson",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/e.jpg"
  },
  {
    id: 4,
    name: "Dr. Michael Johnson",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/f.jpg"
  },
  {
    id: 4,
    name: "Dr. Michael Johnson",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/g.jpg"
  },
  {
    id: 4,
    name: "Dr. Michael Johnson",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/h.jpg"
  },
  {
    id: 4,
    name: "Dr. Michael Johnson",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/h.png"
  }
  ,
  {
    id: 4,
    name: "Dr. Michael Johnson",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/i.jpg"
  }
  ,
  {
    id: 4,
    name: "Dr. Michael Johnson",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/h.png"
  },
  {
    id: 4,
    name: "Dr. Michael Johnson",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/h.png"
  } 
]

export default function Component() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-[#242853] mb-4">Our Lecturers</h1>
          <div className="w-32 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {lecturers.map((lecturer, index) => (
            <motion.div
              key={lecturer.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
          className="bg-[#242853] text-white p-12 rounded-lg shadow-lg"
        >
          <QuoteIcon className="w-16 h-16 text-yellow-500 mb-6 mx-auto" />
          <blockquote className="text-2xl text-center italic mb-6">
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          </blockquote>
          <p className="text-center text-lg font-semibold">- Malcolm X</p>
        </motion.div>
      </div>
    </div>
  )
}