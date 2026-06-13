import { useCreationStore } from '@/store/useCreationStore'
import { coatColors, coatPatterns } from '@/data/petOptions'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export default function CoatSelector() {
  const { config, setCoatColor, setCoatPattern, nextStep } = useCreationStore()

  const canProceed = config.coatColor && config.coatPattern

  return (
    <div className="py-6">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-fredoka text-3xl font-bold text-brand-brown mb-2"
        >
          毛色与花纹
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-nunito text-brand-brown-light"
        >
          选择你宠物的毛色和花纹样式
        </motion.p>
      </div>

      <div className="mb-8">
        <h3 className="font-nunito font-bold text-brand-brown mb-4 flex items-center gap-2">
          <span className="text-xl">🎨</span> 主色调
        </h3>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
          {coatColors.map((color, idx) => (
            <motion.button
              key={color.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.03, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCoatColor(color.id, color.promptValue)}
              className={cn(
                'flex flex-col items-center gap-1.5 p-2 rounded-xl transition-all',
                config.coatColor === color.id
                  ? 'bg-brand-orange-light ring-2 ring-brand-orange'
                  : 'hover:bg-brand-cream'
              )}
            >
              <div
                className="w-10 h-10 rounded-full shadow-md border-2 border-white"
                style={{ backgroundColor: color.color }}
              />
              <span className="text-xs font-nunito font-medium text-brand-brown">
                {color.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-nunito font-bold text-brand-brown mb-4 flex items-center gap-2">
          <span className="text-xl">🐾</span> 花纹样式
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {coatPatterns.map((pattern, idx) => (
            <motion.button
              key={pattern.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.05, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setCoatPattern(pattern.id, pattern.promptValue)}
              className={cn(
                'option-card p-4 rounded-xl border-2 bg-white flex flex-col items-center gap-2',
                config.coatPattern === pattern.id
                  ? 'selected border-brand-orange'
                  : 'border-brand-peach/40 hover:border-brand-orange/40'
              )}
            >
              <div className="text-3xl">{pattern.emoji}</div>
              <span className="font-nunito font-bold text-brand-brown text-sm">
                {pattern.name}
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
