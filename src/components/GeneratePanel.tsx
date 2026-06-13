import { useState, useCallback } from 'react'
import { useCreationStore } from '@/store/useCreationStore'
import { generateImageUrl, buildPrompt } from '@/utils/imageUtils'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, RefreshCw, Sparkles, Share2 } from 'lucide-react'
import ExportModal from './ExportModal'

export default function GeneratePanel() {
  const {
    config,
    generatedImageUrl,
    isGenerating,
    setGeneratedImage,
    setIsGenerating,
    setShowExportModal,
    prevStep,
  } = useCreationStore()

  const [imageKey, setImageKey] = useState(0)
  const [imageLoading, setImageLoading] = useState(false)

  const handleGenerate = useCallback(() => {
    setIsGenerating(true)
    setImageLoading(true)
    setGeneratedImage(null)
    setImageKey(prev => prev + 1)

    const imgUrl = generateImageUrl(config)
    setGeneratedImage(imgUrl)
  }, [config, setGeneratedImage, setIsGenerating])

  const handleImageLoad = () => {
    setImageLoading(false)
    if (isGenerating) {
      setIsGenerating(false)
    }
  }

  const handleImageError = () => {
    setImageLoading(false)
    if (isGenerating) {
      setIsGenerating(false)
    }
  }

  const promptText = buildPrompt(config)
  const displayUrl = generatedImageUrl || generateImageUrl(config)

  return (
    <div className="py-6">
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-fredoka text-3xl font-bold text-brand-brown mb-2 flex items-center gap-3"
        >
          <Sparkles className="text-brand-orange" />
          生成你的专属宠物
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-nunito text-brand-brown-light"
        >
          点击生成按钮，让魔法开始吧！
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl shadow-xl shadow-brand-orange/10 border border-brand-peach/30 p-6 mb-6"
      >
        <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-brand-cream to-brand-orange-light/30">
          <AnimatePresence mode="wait">
            {(isGenerating || imageLoading) && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-brand-cream/90 backdrop-blur-sm"
              >
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-brand-orange-light border-t-brand-orange rounded-full animate-spin" />
                  <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-orange animate-pulse" size={28} />
                </div>
                <p className="mt-6 font-nunito font-bold text-brand-brown text-lg">
                  正在绘制可爱的卡通形象...
                </p>
                <p className="mt-2 font-nunito text-brand-brown-light text-sm">
                  请稍等片刻 ✨
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {generatedImageUrl && (
            <motion.div
              key={`image-${imageKey}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <img
                key={imageKey}
                src={displayUrl}
                alt="Generated pet portrait"
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </motion.div>
          )}

          {!isGenerating && !generatedImageUrl && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-brown-light/50">
              <Sparkles size={64} strokeWidth={1.5} />
              <p className="mt-4 font-nunito font-semibold">点击下方按钮生成</p>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-nunito font-bold bg-brand-mint text-white hover:bg-brand-mint/90 shadow-lg shadow-brand-mint/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw size={18} className={isGenerating ? 'animate-spin' : ''} />
            重新生成
          </button>

          <button
            onClick={() => setShowExportModal(true)}
            disabled={!generatedImageUrl || isGenerating}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-nunito font-bold bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={18} />
            导出图片
          </button>

          <button
            onClick={prevStep}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-nunito font-bold bg-white text-brand-brown border-2 border-brand-peach hover:border-brand-orange/50 transition-all"
          >
            返回修改
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-brand-mint-light/50 rounded-2xl p-5 border border-brand-mint/20"
      >
        <h3 className="font-nunito font-bold text-brand-brown mb-3 flex items-center gap-2">
          <Share2 size={18} className="text-brand-mint" />
          你的宠物配置
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
          <div className="bg-white/80 rounded-xl p-3">
            <span className="font-nunito text-brand-brown-light text-xs">类型</span>
            <p className="font-nunito font-bold text-brand-brown">
              {config.type === 'cat' ? '🐱 猫咪' : '🐶 狗狗'}
            </p>
          </div>
          <div className="bg-white/80 rounded-xl p-3">
            <span className="font-nunito text-brand-brown-light text-xs">品种</span>
            <p className="font-nunito font-bold text-brand-brown">{config.breed || '-'}</p>
          </div>
          <div className="bg-white/80 rounded-xl p-3">
            <span className="font-nunito text-brand-brown-light text-xs">毛色花纹</span>
            <p className="font-nunito font-bold text-brand-brown">{config.coatPattern || '-'}</p>
          </div>
          <div className="bg-white/80 rounded-xl p-3">
            <span className="font-nunito text-brand-brown-light text-xs">配饰</span>
            <p className="font-nunito font-bold text-brand-brown">{config.accessory ? config.accessory : '无'}</p>
          </div>
        </div>
        <div className="mt-3">
          <details className="text-xs">
            <summary className="cursor-pointer font-nunito text-brand-brown-light hover:text-brand-mint transition-colors">
              查看生成提示词
            </summary>
            <p className="mt-2 p-3 bg-white/60 rounded-lg font-mono text-brand-brown-light break-all">
              {promptText}
            </p>
          </details>
        </div>
      </motion.div>

      <ExportModal />
    </div>
  )
}
