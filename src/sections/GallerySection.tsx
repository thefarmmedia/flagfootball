import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'

const galleryPhotos = [
  '/images/photos/jpg/1.webp',
  '/images/photos/jpg/8.webp',
  '/images/photos/jpg/14.webp',
  '/images/photos/jpg/18.webp',
  '/images/photos/jpg/22.webp',
  '/images/photos/jpg/28.webp',
  '/images/photos/jpg/33.webp',
  '/images/photos/jpg/38.webp',
  '/images/photos/jpg/42.webp',
  '/images/photos/jpg/48.webp',
  '/images/photos/jpg/53.webp',
  '/images/photos/jpg/58.webp',
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red font-bold text-xs uppercase tracking-[0.25em]">Action Shots</span>
            <div className="w-8 h-px bg-brand-red" />
          </div>
          <h2 className="font-display font-black text-white uppercase tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.0 }}>
            Game Day<br />
            <span className="text-brand-gold">Gallery</span>
          </h2>
        </div>

        {/* Video highlight block */}
        <div className="relative mb-10 rounded-2xl overflow-hidden aspect-video bg-black group cursor-pointer"
          onClick={() => setShowVideo(true)}>
          <img
            src="/images/photos/jpg/10.webp"
            alt="Missouri EPIC highlight video"
            width="1280"
            height="1280"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-brand-red/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
              <Play size={36} className="text-white ml-1" />
            </div>
            <span className="text-white font-bold text-sm uppercase tracking-widest bg-black/50 px-4 py-2 rounded-full">
              Watch Highlights
            </span>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {galleryPhotos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setLightbox(src)}
            >
              <img
                src={src}
                alt={`Flag football action ${i + 1}`}
                width="1280"
                height="1280"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photo lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-brand-red transition-colors" aria-label="Close">
              <X size={28} />
            </button>
            <img
              src={lightbox}
              alt="Flag football"
              width="1280"
              height="1280"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video lightbox */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-brand-red transition-colors" aria-label="Close">
              <X size={28} />
            </button>
            <video
              src="/videos/highlight2.mp4"
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
