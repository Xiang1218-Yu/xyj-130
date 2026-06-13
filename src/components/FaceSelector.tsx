import { useCreationStore } from '@/store/useCreationStore'
import { eyeShapes, earTypes } from '@/data/petOptions'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export default function FaceSelector() {
  const { config, setEyeShape, setEarType, nextStep } = useCreationStore()

  const canProceed = config.eyeShape && config.earType

  return (
    <div className="py-6">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-fredoka text-3xl font-bold text-brand-brown mb-2"
        >
          面部特征
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-nunito text-brand-brown-light"
        >
          让我们来定制可爱的面部特征吧
        </motion.p>
      </div>

      <div className="mb-8">
        <h3 className="font-nunito font-bold text-brand-brown mb-4 flex items-center gap-2">
          <span className="text-xl">👀</span> 眼睛形状
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {eyeShapes.map((eye, idx) => (
            <motion.button
              key={eye.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setEyeShape(eye.id, eye.promptValue)}
              className={cn(
                'option-card p-4 rounded-xl border-2 bg-white flex flex-col items-center gap-2',
                config.eyeShape === eye.id
                  ? 'selected border-brand-orange'
                  : 'border-brand-peach/40 hover:border-brand-orange/40'
              )}
            >
              <div className="text-3xl">{eye.emoji}</div>
              <span className="font-nunito font-bold text-brand-brown text-xs text-center">
                {eye.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-nunito font-bold text-brand-brown mb-4 flex items-center gap-2">
          <span className="text-xl">👂</span> 耳朵形态
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {earTypes.map((ear, idx) => (
            <motion.button
              key={ear.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.05, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setEarType(ear.id, ear.promptValue)}
              className={cn(
                'option-card p-4 rounded-xl border-2 bg-white flex flex-col items-center gap-2',
                config.earType === ear.id
                  ? 'selected border-brand-orange'
                  : 'border-brand-peach/40 hover:border-brand-orange/40'
              )}
            >
              <div className="text-3xl">{ear.emoji}</div>
              <span className="font-nunito font-bold text-brand-brown text-xs text-center">
                {ear.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex justify-end"
      >
        <button
          onClick={nextStep}
          disabled={!canProceed}
          className={cn(
            'flex items-center gap-2 px-8 py-3 rounded-full font-nunito font-bold transition-all',
            canProceed
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
