"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

const lecturers = [
  {
    id: 1,
    name: "Prof. N.Wayi-Mgwebi ",
    position: "Head of School",
    department: "Computing",
    image: "https://media.nextgensell.com/files/hos.png"
  },
  {
    id: 1,
    name: "Ms. Lilly Kunene",
    position: "Admin Assistant",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/lilly.jpg"
  },
  
  {
    id: 2,
    name: "Prof. Kalema",
    position: "Professor",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/b.jpg"
  },
  {
    id: 3,
    name: "Dr. Norwell Zhakata ",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Zhaka.jpg"
  },
  {
    id: 3,
    name: "Dr. Olalekan Samuel Ogunleye",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20O.png"
  },
  {
    id: 4,
    name: "Dr. Hope Mauwa",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Hope.png"
  },
  {
    id: 4,
    name: "Dr. Motselisi Chere",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Chere.png"
  },
  {
    id: 4,
    name: "Dr. Blessing Maoneke",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Maoneke.png"
  },
  {
    id: 4,
    name: "Dr.Tanki Motsepe ",
    position: "Lecturer",
    department: "Mathemetics",
    image: "https://media.nextgensell.com/files/ump/Dr%20Tankie.jpg"
  },
  {
    id: 4,
    name: "Dr. Yeyisani Makhubele",
    position: "Lecturer",
    department: "Mathematics",
    image: "https://media.nextgensell.com/files/ump/Dr%20Yeyisane.png"
  }
  ,
  {
    id: 4,
    name: "Dr. Phumzile Mseteka",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Dr%20Phumzile.png"
  }
  ,
  {
    id: 4,
    name: "Dr. Yves Semegni",
    position: "Lecturer",
    department: "Mathematics",
    image: "https://media.nextgensell.com/files/ump/Dr%20Yves.jpeg"
  },
  {
    id: 4,
    name: "Dr. Oluwaseun Awosejo",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Olu.png"
  } ,
  {
    id: 4,
    name: "Ms. Masuku",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Masuku.jpg"
  } ,
  {
    id: 4,
    name: "Mr. Rivalani Hlangwani",
    position: "Lecturer",
    department: "Chemistry",
    image: "https://media.nextgensell.com/files/ump/Mr%20Riva.jpg"
  } 
  ,

  {
    id: 4,
    name: "Mr. Charlie Ndlovu",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Mr%20Ndlovu.jpg"
  } ,
  {
    id: 4,
    name: "Ms. Issah Ngomane",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Ms%20Ngomane.jpg"
  } ,
  {
    id: 4,
    name: "Ms. Phumla Sithole",
    position: "Lecturer",
    department: "Mathematics",
    image: "https://media.nextgensell.com/files/ump/Pumla.jpg"
  } 
,
  {
    id: 4,
    name: "Ms. Temhlanga Malindzisa",
    position: "Lecturer",
    department: "Computing",
    image: "https://media.nextgensell.com/files/ump/Temhla.png"
  } 
,
{
  id: 4,
  name: "Ms. Precious Leutle",
  position: "ATSP and Associate Lecturer",
  department: "Computing",
  image: "https://media.nextgensell.com/files/ump/Precious.jpg"
} ,

{
  id: 4,
  name: "Mr. Armstrong Makome",
  position: "ATSP and Associate Lecturer",
  department: "Computing",
  image: "https://media.nextgensell.com/files/ump/Mr%20Makome.png"
},

{
  id: 4,
  name: "Mr. Percy Ndlovu",
  position: "Associate Lecturer",
  department: "Computing - Siyabuswa",
  image: "https://media.nextgensell.com/files/ump/percy.png"
} 
,

{
  id: 4,
  name: "Mr. Sanele Dlamini",
  position: "Lecturer",
  department: "Physics",
  image: "https://media.nextgensell.com/files/ump/percy.png"
} ,

{
  id: 4,
  name: "Mr. Kgomotso Tlhong",
  position: "Lecturer",
  department: "Communication Studies",
  image: "https://media.nextgensell.com/files/ump/percy.png"
} 





]

export default function Component() {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">

<header style={{height:"200px"}}>
  <img src="https://media.nextgensell.com/files/ump/main%20logo.jpg" alt=""  style={{float:"left"}}/>
  <img src="https://media.nextgensell.com/files/ump/ten%20yearz.png" alt="" style={{float:"right"}}/>
</header>
    
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#242853] mb-4">School Of Computing</h1>
          <span className="text-2xl font-bold text-[#242853] mb-4">2024 Staff Members</span><br />
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
            "It's not that I am so smart, it is just that i stay with my problems longer."
          </blockquote>
          <p className="text-center text-lg font-semibold">- Albert Einstein </p>
        </motion.div>
      </div>













    </div>
  )
}

