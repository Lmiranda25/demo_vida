import { motion } from 'framer-motion'
import { whatsappLink } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow"
      aria-label="Escríbenos por WhatsApp"
    >
      <span className="absolute inset-0 animate-pulseRing rounded-full bg-[#25D366]" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </motion.a>
  )
}
