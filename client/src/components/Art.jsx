import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { artPieces } from '../data/art';
import SectionHeading from './SectionHeading';

// Picsum (picsum.photos) serves random real stock photos with no API key —
// Unsplash's old no-signup random endpoint (source.unsplash.com) was shut
// down in 2021, so this fills in until real artwork is added to data/art.js.
// A fresh random seed per photo means a different set every page load.
function usePlaceholderArt(count = 6) {
  return useMemo(
    () =>
      Array.from({ length: count }, () => ({
        image: `https://picsum.photos/seed/${Math.random().toString(36).slice(2)}/600/${800 + Math.floor(Math.random() * 400)}`,
        caption: null,
      })),
    []
  );
}

export default function Art() {
  const placeholderPieces = usePlaceholderArt(6);
  const pieces = artPieces.length > 0 ? artPieces : placeholderPieces;

  return (
    <section id="art" className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading title="art" />
      </motion.div>

      {artPieces.length === 0 && (
        <p className="mb-6 text-sm text-slate-500">Here's some art because you made it here :)</p>
      )}

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {pieces.map((piece, i) => (
          <motion.figure
            key={piece.image}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-navy-lightest"
          >
            <img src={piece.image} alt={piece.caption || 'Artwork'} loading="lazy" className="w-full object-cover" />
            {piece.caption && (
              <figcaption className="bg-navy-light/60 px-3 py-2 text-xs text-slate-400">
                {piece.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
