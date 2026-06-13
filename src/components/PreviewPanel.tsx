import { useState, useEffect, useRef } from 'react'
import { useCreationStore } from '@/store/useCreationStore'
import { generateImageUrl } from '@/utils/imageUtils'
import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, Sparkles, AlertCircle, RefreshCw } from 'lucide-react'
import { STEP_ORDER } from '@/data/petOptions'

export default function PreviewPanel() {
  const { config, generatedImageUrl, isGenerating, currentStep } = useCreationStore()
  const [imageLoading, setImageLoading] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const timeoutRef = useRef<number | null>(null)
  const loadingRef = useRef(false)

  const currentStepIndex = STEP_ORDER.indexOf(currentStep)
  const breedStepIndex = STEP_ORDER.indexOf('breed')
  const hasEnoughConfig = config.type !== null && config.breed !== '' && currentStepIndex >= breedStepIndex

  const previewUrl = generatedImageUrl || (hasEnoughConfig ? generateImageUrl(config) : '')

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const startLoading = () => {
    clearTimer()
    loadingRef.current = true
    setImageLoading(true)
    setImageError(false)
    setErrorMsg('')
    timeoutRef.current = window.setTimeout(() => {
      if (loadingRef.current) {
        loadingRef.current = false
        setImageLoading(false)
        setImageError(true)
        setErrorMsg('加载超时，请检查网络后重试')
      }
    }, 45000)
  }

  const handleImageLoad = () => {
    clearTimer()
    loadingRef.current = false
    setImageLoading(false)
    setImageError(false)
  }

  const handleImageError = () => {
    clearTimer()
    loadingRef.current = false
    setImageLoading(false)
    setImageError(true)
    setErrorMsg('图片加载失败，请重试')
  }

  const handleRetry = () => {
    startLoading()
    const img = new Image()
    img.onload = handleImageLoad
    img.onerror = handleImageError
    img.src = previewUrl
  }

  useEffect(() => {
    if (hasEnoughConfig && !generatedImageUrl) {
      startLoading()
    }
    return () => {
      clearTimer()
      loadingRef.current = false
    }
  }, [
    config.breed,
    config.coatColor,
    config.coatPattern,
    config.eyeShape,
    config.earType,
    config.bodyType,
    config.pose,
    config.accessory,
    hasEnoughConfig,
    generatedImageUrl,
  ])

  useEffect(() => {
    return () => {
      clearTimer()
    }
  }, [])

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
              {(isGenerating || imageLoading) && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-brand-cream/90 backdrop-blur-sm z-10"
                >
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-brand-orange-light border-t-brand-orange rounded-full animate-spin" />
                    <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-orange" size={20} />
                  </div>
                  <p className="mt-4 font-nunito font-semibold text-brand-brown">
                    {isGenerating ? '正在生成中...' : '正在加载预览...'}
                  </p>
                  <p className="mt-1 font-nunito text-xs text-brand-brown-light">
                    AI 绘制需要一些时间，请耐心等待
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {hasEnoughConfig ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: imageError || imageLoading ? 0 : 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full"
              >
                <img
                  src={previewUrl}
                  alt="Pet preview"
                  className="w-full h-full object-cover"
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              </motion.div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-brown-light/50">
                <ImageIcon size={48} strokeWidth={1.5} />
                <p className="mt-3 font-nunito text-sm text-center px-4">
                  {config.type === null ? '选择宠物开始创作' : '请先选择品种'}
                </p>
              </div>
            )}

            {imageError && !imageLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-brand-cream/95 z-20"
              >
                <AlertCircle className="text-brand-orange mb-3" size={40} />
                <p className="font-nunito font-bold text-brand-brown text-center px-4">
                  {errorMsg || '图片加载失败'}
                </p>
                <button
                  onClick={handleRetry}
                  className="mt-4 px-4 py-2 bg-brand-orange text-white rounded-full font-nunito text-sm font-semibold hover:bg-brand-orange-dark transition-colors flex items-center gap-2"
                >
                  <RefreshCw size={14} />
                  重新加载
                </button>
              </motion.div>
            )}

            {generatedImageUrl && !isGenerating && !imageError && (
              <div className="absolute top-3 right-3 bg-brand-mint text-white px-3 py-1 rounded-full text-xs font-nunito font-bold shadow-lg z-30">
                已生成 ✨
              </div>
            )}
          </div>

          {hasEnoughConfig && (
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
