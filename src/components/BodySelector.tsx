import { useCreationStore } from '@/store/useCreationStore'
import { bodyTypes, poses } from '@/data/petOptions'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export default function BodySelector() {
  const { config, setBodyType, setPose, nextStep } = useCreationStore()

  const canProceed = config.bodyType && config.pose

  return (
    <div className="py-6">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-fredoka text-3xl font-bold text-brand-brown mb-2"
        >
          体型与姿态
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-nunito text-brand-brown-light"
        >
          选择你宠物的体型和可爱姿态
        </motion.p>
      </div>

      <div className="mb-8">
        <h3 className="font-nunito font-bold text-brand-brown mb-4 flex items-center gap-2">
          <span className="text-xl">🧸</span> 体型
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {bodyTypes.map((body, idx) => (
            <motion.button
              key={body.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setBodyType(body.id, body.promptValue)}
              className={cn(
                'option-card p-4 rounded-xl border-2 bg-white flex flex-col items-center gap-2',
                config.bodyType === body.id
                  ? 'selected border-brand-orange'
                  : 'border-brand-peach/40 hover:border-brand-orange/40'
              )}
            >
              <div className="text-3xl">{body.emoji}</div>
              <span className="font-nunito font-bold text-brand-brown text-xs text-center">
                {body.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-nunito font-bold text-brand-brown mb-4 flex items-center gap-2">
          <span className="text-xl">💫</span> 姿态
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {poses.map((pose, idx) => (
            <motion.button
              key={pose.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.05, type: 'spring', stiffness: 200 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setPose(pose.id, pose.promptValue)}
              className={cn(
                'option-card p-4 rounded-xl border-2 bg-white flex flex-col items-center gap-2',
                config.pose === pose.id
                  ? 'selected border-brand-orange'
                  : 'border-brand-peach/40 hover:border-brand-orange/40'
              )}
            >
              <div className="text-3xl">{pose.emoji}</div>
              <span className="font-nunito font-bold text-brand-brown text-xs text-center">
                {pose.name}
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
