import { useCreationStore } from '@/store/useCreationStore'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function PetTypeSelector() {
  const { config, setType, nextStep } = useCreationStore()

  const handleSelect = (type: 'cat' | 'dog') => {
    setType(type)
    setTimeout(() => nextStep(), 300)
  }

  return (
    <div className="py-8">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-fredoka text-4xl font-bold text-brand-brown mb-3"
        >
          选择你的宠物
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-nunito text-brand-brown-light text-lg"
        >
          是可爱的猫咪还是忠诚的狗狗呢？
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSelect('cat')}
          className={cn(
            'option-card relative overflow-hidden rounded-3xl p-8 border-2 transition-all',
            config.type === 'cat'
              ? 'border-brand-orange bg-gradient-to-br from-brand-orange-light to-brand-peach/50'
              : 'border-brand-peach/50 bg-white hover:border-brand-orange/50'
          )}
        >
          <div className="absolute -top-6 -right-6 text-9xl opacity-10">🐱</div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-8xl mb-4 animate-bounce-gentle">🐱</div>
            <h3 className="font-fredoka text-3xl font-bold text-brand-brown mb-2">
              猫咪
            </h3>
            <p className="font-nunito text-brand-brown-light text-center">
              优雅神秘的小精灵<br />
              <span className="text-sm opacity-70">英短、布偶、橘猫、暹罗...</span>
            </p>
          </div>
          <div className="mt-6 w-full">
            <div className={cn(
              'w-full py-3 rounded-2xl font-nunito font-bold text-center transition-all',
              config.type === 'cat'
                ? 'bg-brand-orange text-white'
                : 'bg-brand-orange-light text-brand-orange'
            )}>
              选择猫咪
            </div>
          </div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSelect('dog')}
          className={cn(
            'option-card relative overflow-hidden rounded-3xl p-8 border-2 transition-all',
            config.type === 'dog'
              ? 'border-brand-orange bg-gradient-to-br from-brand-orange-light to-brand-peach/50'
              : 'border-brand-peach/50 bg-white hover:border-brand-orange/50'
          )}
        >
          <div className="absolute -top-6 -right-6 text-9xl opacity-10">🐶</div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-8xl mb-4 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>🐶</div>
            <h3 className="font-fredoka text-3xl font-bold text-brand-brown mb-2">
              狗狗
            </h3>
            <p className="font-nunito text-brand-brown-light text-center">
              热情忠诚的好伙伴<br />
              <span className="text-sm opacity-70">金毛、柯基、柴犬、哈士奇...</span>
            </p>
          </div>
          <div className="mt-6 w-full">
            <div className={cn(
              'w-full py-3 rounded-2xl font-nunito font-bold text-center transition-all',
              config.type === 'dog'
                ? 'bg-brand-orange text-white'
                : 'bg-brand-orange-light text-brand-orange'
            )}>
              选择狗狗
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  )
}
