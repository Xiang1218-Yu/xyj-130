import { useState, useCallback, useRef, useEffect } from 'react'
import { useCreationStore } from '@/store/useCreationStore'
import { generateImageUrl, buildPrompt } from '@/utils/imageUtils'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, RefreshCw, Sparkles, Share2, AlertCircle } from 'lucide-react'
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

  const [imageError, setImageError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const isGeneratingRef = useRef(false)
  const timeoutRef = useRef<number | null>(null)

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const handleSuccess = useCallback(() => {
    if (!isGeneratingRef.current) return
    isGeneratingRef.current = false
    clearTimer()
    setImageError(false)
    setErrorMsg('')
    setIsGenerating(false)
  }, [setIsGenerating])

  const handleFail = useCallback((msg: string) => {
    if (!isGeneratingRef.current) return
    isGeneratingRef.current = false
    clearTimer()
    setImageError(true)
    setErrorMsg(msg)
    setIsGenerating(false)
  }, [setIsGenerating])

  const handleGenerate = useCallback(() => {
    clearTimer()
    setImageError(false)
    setErrorMsg('')
    setIsGenerating(true)
    isGeneratingRef.current = true

    const imgUrl = generateImageUrl(config)
    setGeneratedImage(imgUrl)

    timeoutRef.current = window.setTimeout(() => {
      handleFail('生成超时，请检查网络后重试')
    }, 60000)
  }, [config, setGeneratedImage, setIsGenerating, handleFail])

  const handleImageLoad = () => {
    handleSuccess()
  }

  const handleImageError = () => {
    handleFail('图片生成失败，请重试')
  }

  const handleRetry = () => {
    handleGenerate()
  }

  useEffect(() => {
    if (!generatedImageUrl && !isGenerating) {
      handleGenerate()
    }
    return () => {
      clearTimer()
    }
  }, [])

  useEffect(() => {
    return () => {
      clearTimer()
      isGeneratingRef.current = false
    }
  }, [])

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
          AI 正在为你绘制独一无二的宠物卡通形象 ✨
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
            {isGenerating && (
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
                  大约需要 10-30 秒，请稍等 ✨
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {generatedImageUrl && !imageError && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: isGenerating ? 0 : 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <img
                src={displayUrl}
                alt="Generated pet portrait"
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </motion.div>
          )}

          {imageError && !isGenerating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-brand-cream/95 z-30"
            >
              <AlertCircle className="text-brand-orange mb-4" size={56} />
              <p className="font-nunito font-bold text-brand-brown text-lg text-center px-6">
                {errorMsg || '生成失败'}
              </p>
              <button
                onClick={handleRetry}
                className="mt-6 px-6 py-3 bg-brand-orange text-white rounded-full font-nunito font-semibold hover:bg-brand-orange-dark transition-colors flex items-center gap-2"
              >
                <RefreshCw size={18} />
                重新生成
              </button>
            </motion.div>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button
            onClick={handleRetry}
            disabled={isGenerating}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-nunito font-bold bg-brand-mint text-white hover:bg-brand-mint/90 shadow-lg shadow-brand-mint/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RefreshCw size={18} className={isGenerating ? 'animate-spin' : ''} />
            重新生成
          </button>

          <button
            onClick={() => setShowExportModal(true)}
            disabled={!generatedImageUrl || isGenerating || imageError}
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
