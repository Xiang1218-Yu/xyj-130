import { useCreationStore } from '@/store/useCreationStore'
import { catBreeds, dogBreeds } from '@/data/petOptions'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export default function BreedSelector() {
  const { config, setBreed, nextStep } = useCreationStore()
  const breeds = config.type === 'cat' ? catBreeds : dogBreeds

  const handleSelect = (breed: typeof breeds[0]) => {
    setBreed(breed)
  }

  const handleNext = () => {
    if (config.breed) {
      nextStep()
    }
  }

  return (
    <div className="py-6">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-fredoka text-3xl font-bold text-brand-brown mb-2"
        >
          选择品种
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-nunito text-brand-brown-light"
        >
          {config.type === 'cat' ? '你的猫咪是什么品种呢？' : '你的狗狗是什么品种呢？'}
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {breeds.map((breed, idx) => (
          <motion.button
            key={breed.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelect(breed)}
            className={cn(
              'option-card p-5 rounded-2xl border-2 bg-white flex flex-col items-center gap-2',
              config.breed === breed.name
                ? 'selected border-brand-orange'
                : 'border-brand-peach/40 hover:border-brand-orange/40'
            )}
          >
            <div className="text-5xl mb-1">{breed.emoji}</div>
            <span className="font-nunito font-bold text-brand-brown text-sm">
              {breed.name}
            </span>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-end"
      >
        <button
          onClick={handleNext}
          disabled={!config.breed}
          className={cn(
            'flex items-center gap-2 px-8 py-3 rounded-full font-nunito font-bold transition-all',
            config.breed
              ? 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/40'
              : 'bg-brand-orange-light text-brand-brown-light/50 cursor-not-allowed'
          )}
        >
          下一步
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </div>
  )
}
