import { useCreationStore } from '@/store/useCreationStore'
import { generateImageUrl } from '@/utils/imageUtils'
import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, Sparkles } from 'lucide-react'

export default function PreviewPanel() {
  const { config, generatedImageUrl, isGenerating } = useCreationStore()
  const previewUrl = generatedImageUrl || generateImageUrl(config)

  const hasConfig = config.type !== null

  return (
    <div className="sticky top-6">
      <div className="bg-white rounded-3xl shadow-xl shadow-brand-orange/10 border border-brand-peach/30 overflow-hidden">
        <div className="bg-gradient-to-r from-brand-orange to-brand-orange-dark px-5 py-3 flex items-center justify-between">
          <span className="font-fredoka font-bold text-white text-lg flex items-center gap-2">
            <Sparkles size={18} />
            实时预览
          </span>
        </div>

        <div className="p-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-brand-cream to-brand-orange-light/50">
            <AnimatePresence mode="wait">
              {isGenerating && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-brand-cream/80 backdrop-blur-sm z-10"
                >
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-brand-orange-light border-t-brand-orange rounded-full animate-spin" />
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-orange" size={20} />
                  </div>
                  <p className="mt-4 font-nunito font-semibold text-brand-brown">
                    正在生成中...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {hasConfig ? (
              <motion.div
                key="image"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <img
                  src={previewUrl}
                  alt="Pet preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </motion.div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-brown-light/50">
                <ImageIcon size={48} strokeWidth={1.5} />
                <p className="mt-3 font-nunito text-sm">选择宠物开始创作</p>
              </div>
            )}

            {generatedImageUrl && !isGenerating && (
              <div className="absolute top-3 right-3 bg-brand-mint text-white px-3 py-1 rounded-full text-xs font-nunito font-bold shadow-lg">
                已生成 ✨
              </div>
            )}
          </div>

          {hasConfig && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 space-y-2"
            >
              <div className="flex items-center justify-between text-sm">
                <span className="font-nunito text-brand-brown-light">宠物类型</span>
                <span className="font-nunito font-semibold text-brand-brown">
                  {config.type === 'cat' ? '🐱 猫咪' : config.type === 'dog' ? '🐶 狗狗' : '-'}
                </span>
              </div>
              {config.breed && (
                <div className="flex items-center justify-between text-sm">
                  <span className="font-nunito text-brand-brown-light">品种</span>
                  <span className="font-nunito font-semibold text-brand-brown">
                    {config.breed}
                  </span>
                </div>
              )}
              {config.coatColor && (
                <div className="flex items-center justify-between text-sm">
                  <span className="font-nunito text-brand-brown-light">毛色花纹</span>
                  <span className="font-nunito font-semibold text-brand-brown">
                    {config.coatPattern || '纯色'}
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
