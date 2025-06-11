"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  X,
  Clock,
  MapPin,
  Music,
  Heart,
  DotIcon as Dove,
  Home,
  Calendar,
  User,
  Camera,
  BookOpen,
  MessageCircle,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Badge } from "@/components/ui/badge"

// Import memorial data
import { memorialData, biographyContent } from "@/data/memorial-data"
import Link from "next/link"

export default function FuneralProgram() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("home")
  const [isGalleryLightboxOpen, setIsGalleryLightboxOpen] = useState(false)
  const [isTributeLightboxOpen, setIsTributeLightboxOpen] = useState(false)
  const [isBiographyFullscreenOpen, setIsBiographyFullscreenOpen] = useState(false)
  const [selectedTributeIndex, setSelectedTributeIndex] = useState(0)

  // Destructure data from imported memorial data
  const { person, service, galleryImages, programSchedule, hymns, biblePassages, tributes, contacts, bankDetails } =
    memorialData

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const openGalleryLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setIsGalleryLightboxOpen(true)
  }

  const openTributeLightbox = (index: number) => {
    setSelectedTributeIndex(index)
    setIsTributeLightboxOpen(true)
  }

  const nextTribute = () => {
    setSelectedTributeIndex((prev) => (prev + 1) % tributes.length)
  }

  const prevTribute = () => {
    setSelectedTributeIndex((prev) => (prev - 1 + tributes.length) % tributes.length)
  }

  const OliveBranch = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C12 2 8 6 8 10C8 12 10 14 12 14C14 14 16 12 16 10C16 6 12 2 12 2Z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M8 10C8 10 6 12 4 14C3 15 3 16 4 17C5 18 6 18 7 17C9 15 11 13 11 13"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 10C16 10 18 12 20 14C21 15 21 16 20 17C19 18 18 18 17 17C15 15 13 13 13 13"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M12 14C12 14 12 16 12 18C12 20 12 22 12 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )

  const renderHomeTab = () => (
    <div className="space-y-0">
      {/* Fullscreen Hero Card */}
      <Card className="overflow-hidden bg-amber-100 __bg-gradient-to-br from-amber-900 via-amber-800 to-blue-900 text-white shadow-2xl h-screen -m-4 rounded-none">
        <CardContent className="p-0 h-full">
          <div className="relative h-full">
            <Image
              src={person.heroImage}
              alt={person.fullName}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0 bg-red-500__ bg-gradient-to-t from-gray-800 from-25% __via-amber-800 via-20% to-transparent" />

            {/* Content positioned at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 pb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-3 text-amber-300">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-center mb-3">{person.fullName}</h1>

              {/* Quote Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4 border border-amber-300/30">
                <p className="text-amber-200 text-center mb-3 text-lg">{person.title}</p>
                <p className="text-white/80 font-bold text-center mb-3">
                  {person.birthDate} - {person.deathDate}
                </p>
              
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setActiveTab("biography")}
                  className="h-16 bg-blue-600/80 hover:bg-blue-600 backdrop-blur-sm text-white shadow-lg border border-white/20"
                >
                  <div className="text-center">
                    <User className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-sm font-medium">About</span>
                  </div>
                </Button>
                <Button
                  onClick={() => setActiveTab("tributes")}
                  className="h-16 bg-amber-600/80 hover:bg-amber-600 backdrop-blur-sm text-white shadow-lg border border-white/20"
                >
                  <div className="text-center">
                    <MessageCircle className="h-6 w-6 mx-auto mb-1" />
                    <span className="text-sm font-medium">Tributes</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProgramTab = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-blue-50 to-white shadow-lg border border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Calendar className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-blue-900">Order of Service</h2>
          </div>
          <p className="text-amber-700 text-sm mb-4">A Celebration of Peace, Love & Acceptance</p>

          <div className="bg-blue-900 p-3 rounded-md mb-4 ">
            <div className="flex items-center mb-3">
              <MapPin className="h-5 w-5 text-amber-300 mr-3" />
              <h3 className="text-lg font-semibold text-white">Service of Songs</h3>
            </div>
            <div className="space-y-1 text-white/90">
              <p className="text-sm">{service.address}</p>
              <p className="text-sm font-medium text-amber-200">{service.date}</p>
            </div>
          </div>

          <div className="space-y-4">
            {programSchedule.map((item, index) => (
              <button title={item.activity} 
                onClick={() => item.tab ? setActiveTab(item.tab) : ""} 
                className="block w-full "
              >
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-blue-100"
                >
                  <div className="flex items-center space-x-2 min-w-0 flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-amber-600" />
                    {/* <span className="font-semibold text-blue-800 text-sm">{item.duration}</span> */}
                  </div>
                  <div className="flex flex-1 flex-col items-start">
                    <p className="text-blue-900 font-medium text-sm">{item.activity}</p>
                    {item.speaker && <p className="text-amber-600 text-xs mt-1">Led by {item.speaker}</p>}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hymns Preview */}
      {/* <Card className="bg-gradient-to-br from-amber-50 to-white shadow-lg border border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Music className="h-5 w-5 text-amber-600 mr-3" />
              <h3 className="text-lg font-semibold text-blue-900">Featured Hymns</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab("scripture")}
              className="text-amber-600 hover:text-amber-700"
            >
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {hymns.slice(0, 2).map((hymn, index) => (
              <div key={index} className="p-3 bg-white rounded-lg border border-amber-100">
                <p className="font-medium text-blue-800 text-sm">{hymn.title}</p>
                <p className="text-blue-600 text-xs mt-1 line-clamp-2">{hymn.verses[0]}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card> */}
    </div>
  )

  const renderBiographyTab = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-amber-50 to-white shadow-lg border border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-amber-600 mr-3" />
            <h2 className="text-xl font-bold text-blue-900">Summary</h2>
          </div>

          <div className="space-y-4">
            {biographyContent.paragraphs.slice(0, 4).map((paragraph, index, arr) => (
              <div className="text-blue-900">
              {index === arr.length-1 || index === 0 ? <p className="italic text-sm">{paragraph}</p> : <p key={index} className=" leading-relaxed">
                {paragraph}
              </p>}
            </div>))}
          </div>

          <div className="mt-6 pt-4 border-t border-amber-200">
            <Button
              onClick={() => setIsBiographyFullscreenOpen(true)}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg"
            >
              Read the stories
            </Button>

            <Button
              onClick={() => setActiveTab('gallery')}
              className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
            >
              See Photos
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bible Passages */}
      {/* <Card className="bg-gradient-to-br from-blue-50 to-white shadow-lg border border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="h-5 w-5 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold text-blue-900">Bible Reading</h3>
          </div>
          <div className="space-y-4">
            {biblePassages.slice(0, 1).map((passage, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-800 text-sm mb-2">{passage.title}</h4>
                <blockquote className="text-blue-700 text-xs leading-relaxed mb-2 line-clamp-3">
                  {passage.passage}
                </blockquote>
                <cite className="text-amber-600 text-xs">- {passage.reference}</cite>
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setActiveTab("scripture")}
            className="w-full mt-4 text-blue-600 hover:text-blue-700"
          >
            View All Scripture
          </Button>
        </CardContent>
      </Card> */}

    </div>
  )

  const renderGalleryTab = () => (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg border border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Camera className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-blue-900">Memories</h2>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl shadow-md cursor-pointer group border-2 border-amber-200 hover:border-amber-400 transition-all duration-300"
                onClick={() => openGalleryLightbox(index)}
              >
                <Image
                  src={`gallery/${image}`}
                  alt={`Memory ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-900/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderScriptureTab = () => (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Link
          href={"#bible-reading"}
          className="w-full rounded-lg py-2 text-center border border-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-blue-600 shadow-md"
        >
          Scriptures
        </Link>        
        {/* <Link
          href={"#bible-reading"}
          className="w-full rounded-lg py-2 text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md"
        >
          Scriptures
        </Link> */}
      </div>
      {/* Hymns */}
      <Card className="bg-gradient-to-br from-amber-50 to-white shadow-lg border border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Music className="h-6 w-6 text-amber-600 mr-3" />
            <h2 className="text-xl font-bold text-blue-900">Hymns of Faith</h2>
          </div>

          <div className="space-y-4">
            {hymns.map((hymn, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-amber-100">
                <h3 className="font-semibold text-blue-800 mb-3">{hymn.title}</h3>
                <div className="space-y-3">
                  {hymn.verses.map((verse, verseIndex) => (
                    <div
                      key={verseIndex}
                      className="text-blue-700 text-sm leading-relaxed whitespace-pre-line bg-amber-50/50 p-3 rounded-md"
                    >
                      {verse}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bible Passages */}
      <Card id="bible-reading" className="bg-gradient-to-br from-blue-50 to-white shadow-lg border border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-xl font-bold text-blue-900">Scripture Readings</h2>
          </div>

          <div className="space-y-4">
            {biblePassages.map((passage, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-blue-100">
                {/* <h3 className="font-semibold text-blue-800 mb-3">{passage.title}</h3> */}
                <div className="flex items-center space-x-2 mb-3">
                  <h3 className="font-semibold text-blue-800">{passage.title}</h3>
                  <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-700">
                    {passage.reference}
                  </Badge>
                </div>
                <blockquote className="text-blue-700 text-sm leading-relaxed mb-3">{passage.passage}</blockquote>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderTributesTab = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-amber-50 to-white shadow-lg border border-amber-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <MessageCircle className="h-6 w-6 text-amber-600 mr-3" />
            <h2 className="text-xl font-bold text-blue-900">Tributes</h2>
          </div>
          <div className="space-y-4">
            {tributes.map((tribute, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-sm border border-amber-100 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => openTributeLightbox(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full flex-shrink-0">
                    <Image src={tribute.image || "/placeholder.svg"} alt={tribute.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-blue-800 text-sm">{tribute.name}</h3>
                      <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-700">
                        {tribute.relationship}
                      </Badge>
                    </div>
                    <p className="text-blue-700 text-xs font-bold">{tribute.message[0]}</p>
                    <p className="text-blue-700 text-xs line-clamp-3">{tribute.message.slice(1, -1)}</p>
                    <p className="text-amber-600 text-xs mt-2">Tap to read full tribute</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact & Donation Info */}
      <Card className="bg-gradient-to-br from-blue-50 to-white shadow-lg border border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <Phone className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold text-blue-900">Contact & Donations</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-blue-800 text-sm mb-2">Contacts</h4>
              <div className="space-y-2">
                {contacts.slice(0, 3).map((contact, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 bg-white rounded border border-blue-100"
                  >
                    <div>
                      <p className="font-medium text-blue-800 text-xs">{contact.name}</p>
                      <p className="text-blue-600 text-xs">{contact.relationship}</p>
                    </div>
                    <p className="text-amber-600 text-xs font-medium">{contact.phone}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-blue-800 text-sm mb-2">Donations & Support</h4>
              <div className="p-3 bg-white rounded border border-blue-100">
              <p className="font-medium text-amber-600 font-bold mb-1">{bankDetails.account}</p>
              <p className="font-medium text-blue-800 text-xs mb-1">{bankDetails.fundName}</p>
                <p className="text-blue-800 text-xs">{bankDetails.bankName}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return renderHomeTab()
      case "program":
        return renderProgramTab()
      case "biography":
        return renderBiographyTab()
      case "gallery":
        return renderGalleryTab()
      case "scripture":
        return renderScriptureTab()
      case "tributes":
        return renderTributesTab()
      default:
        return renderHomeTab()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* App Header */}
      {/* <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-sm">
        <div className="flex items-center justify-between p-4">
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Dove className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-blue-900">Memorial</h1>
              <p className="text-xs text-blue-600">In Loving Memory</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-amber-500">
              <OliveBranch />
              <Heart className="h-4 w-4" />
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className={activeTab === "home" ? "" : "p-4"}>{renderContent()}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-blue-200 shadow-lg">
        <div className="grid grid-cols-6 h-16">
          {[
            { id: "home", icon: Home, label: "Home" },
            { id: "biography", icon: User, label: "About" },
            { id: "tributes", icon: MessageCircle, label: "Tributes" },
            { id: "gallery", icon: Camera, label: "Gallery" },
            { id: "scripture", icon: BookOpen, label: "Readings" },
            { id: "program", icon: Calendar, label: "Program" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                activeTab === tab.id ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-blue-600"
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* All the existing modals remain the same */}
      {/* Biography Fullscreen Modal */}
      <Dialog open={isBiographyFullscreenOpen} onOpenChange={setIsBiographyFullscreenOpen}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-gradient-to-br from-amber-50 to-white">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-blue-900 text-center pt-8">
            Celebrating a Beautiful Life
          </DialogTitle>
          <div className="relative w-full h-full overflow-y-auto">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-blue-800 shadow-md"
              onClick={() => setIsBiographyFullscreenOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="p-6 md:p-8">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center mb-4">
                    <Heart className="h-8 w-8 text-amber-600" />
                  </div>
                  <p className="text-lg text-amber-700 font-medium">A Legacy of Love and Acceptance</p>
                  <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto mt-4 rounded-full" />
                </div>

                <div className="prose prose-lg prose-slate max-w-none">
                  {biographyContent.paragraphs.slice(4, -1).map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg leading-relaxed mb-2 text-blue-800"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="text-center mt-8 pt-6 border-t border-amber-200">
                  <div className="flex items-center justify-center space-x-4 text-amber-600 mb-4">
                    <Heart className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Gallery Lightbox */}
      <Dialog open={isGalleryLightboxOpen} onOpenChange={setIsGalleryLightboxOpen}>
        <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black">
          <VisuallyHidden>
            <DialogTitle>Photo Gallery</DialogTitle>
          </VisuallyHidden>
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={() => setIsGalleryLightboxOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="relative w-full h-full">
              <Image
                src={`gallery/${galleryImages[currentImageIndex]}`}
                alt={`Memory ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Tribute Lightbox */}
      <Dialog open={isTributeLightboxOpen} onOpenChange={setIsTributeLightboxOpen}>
        <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <VisuallyHidden>
            <DialogTitle>Tribute Details</DialogTitle>
          </VisuallyHidden>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-0 right-0 z-10"
              onClick={() => setIsTributeLightboxOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>

            {tributes[selectedTributeIndex] && (
              <div className="space-y-6">
                {tributes[selectedTributeIndex].image &&
                  <div className="relative h-64 overflow-hidden rounded-lg">                    
                    <Image
                      src={tributes[selectedTributeIndex].image || "/placeholder.svg"}
                      alt={tributes[selectedTributeIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                }

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-800">{tributes[selectedTributeIndex].name}</h3>
                    <p className="text-amber-600">{tributes[selectedTributeIndex].relationship}</p>
                  </div>
                  <p className="text-lg text-blue-700 font-bold m-0 p-0">{tributes[selectedTributeIndex].message[0]}</p>
                  
                  {tributes[selectedTributeIndex].message.slice(1, tributes[selectedTributeIndex].message.length).map((paragraph, index) => <p key={index} className="text-lg text-blue-700 mt-0">
                    {paragraph}
                  </p>)}
                  
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={prevTribute}
                    disabled={tributes.length <= 1}
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    onClick={nextTribute}
                    disabled={tributes.length <= 1}
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
