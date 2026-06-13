import { useCreationStore } from '@/store/useCreationStore'
import { accessories } from '@/data/petOptions'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export default function AccessorySelector() {
  const { config, setAccessory, nextStep } = useCreationStore()

  const handleSelect = (id: string, prompt: string) => {
    setAccessory(id, prompt)
  }

  return (
    <div className="py-6">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-fredoka text-3xl font-bold text-brand-brown mb-2"
        >
          选择配饰
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-nunito text-brand-brown-light"
        >
          给你的宠物添加一些可爱的装饰吧（可选）
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {accessories.map((acc, idx) => (
          <motion.button
            key={acc.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelect(acc.id, acc.promptValue)}
            className={cn(
              'option-card p-5 rounded-2xl border-2 bg-white flex flex-col items-center gap-2',
              config.accessory === acc.id
                ? 'selected border-brand-orange'
                : 'border-brand-peach/40 hover:border-brand-orange/40'
            )}
          >
            <div className="text-5xl mb-1">{acc.emoji}</div>
            <span className="font-nunito font-bold text-brand-brown text-sm">
              {acc.name}
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
          onClick={nextStep}
          className="flex items-center gap-2 px-8 py-3 rounded-full font-nunito font-bold bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/40 transition-all"
        >
          去生成
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </div>
  )
}
