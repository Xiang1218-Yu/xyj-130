import { useState } from 'react'
import { useCreationStore } from '@/store/useCreationStore'
import { downloadImage, getExportFilename } from '@/utils/imageUtils'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Image, FileImage } from 'lucide-react'
import { cn } from '@/lib/utils'

type ExportSize = 'small' | 'medium' | 'large' | 'hd'
type ExportFormat = 'png' | 'jpeg'

const sizeOptions: { id: ExportSize; label: string; size: string; pixel: string }[] = [
  { id: 'small', label: '小图', size: '512×512', pixel: '0.26MP' },
  { id: 'medium', label: '中图', size: '1024×1024', pixel: '1MP' },
  { id: 'large', label: '大图', size: '1536×1536', pixel: '2.36MP' },
  { id: 'hd', label: '高清', size: '2048×2048', pixel: '4.19MP' },
]

const formatOptions: { id: ExportFormat; label: string; icon: typeof Image }[] = [
  { id: 'png', label: 'PNG', icon: Image },
  { id: 'jpeg', label: 'JPEG', icon: FileImage },
]

export default function ExportModal() {
  const { showExportModal, setShowExportModal, generatedImageUrl, config } = useCreationStore()
  const [selectedSize, setSelectedSize] = useState<ExportSize>('medium')
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('png')
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    if (!generatedImageUrl) return

    setIsExporting(true)
    try {
      const baseName = getExportFilename(config).replace('.png', '')
      const filename = `${baseName}_${selectedSize}.${selectedFormat}`
      await downloadImage(generatedImageUrl, filename)
    } finally {
      setIsExporting(false)
    }
  }

  const handleClose = () => {
    if (!isExporting) {
      setShowExportModal(false)
    }
  }

  return (
    <AnimatePresence>
      {showExportModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-brand-orange to-brand-orange-dark px-6 py-4 flex items-center justify-between">
              <h3 className="font-fredoka font-bold text-white text-xl flex items-center gap-2">
                <Download size={22} />
                导出图片
              </h3>
              <button
                onClick={handleClose}
                disabled={isExporting}
                className="text-white/80 hover:text-white transition-colors disabled:opacity-50"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="aspect-video rounded-xl overflow-hidden bg-brand-cream">
                {generatedImageUrl && (
                  <img
                    src={generatedImageUrl}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div>
                <h4 className="font-nunito font-bold text-brand-brown mb-3 flex items-center gap-2">
                  选择尺寸
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {sizeOptions.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={cn(
                        'p-3 rounded-xl border-2 transition-all text-center',
                        selectedSize === size.id
                          ? 'border-brand-orange bg-brand-orange-light'
                          : 'border-brand-peach/40 hover:border-brand-orange/40'
                      )}
                    >
                      <div className="font-nunito font-bold text-brand-brown text-sm">
                        {size.label}
                      </div>
                      <div className="font-nunito text-brand-brown-light text-xs mt-1">
                        {size.size}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-nunito font-bold text-brand-brown mb-3 flex items-center gap-2">
                  选择格式
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {formatOptions.map((format) => {
                    const Icon = format.icon
                    return (
                      <button
                        key={format.id}
                        onClick={() => setSelectedFormat(format.id)}
                        className={cn(
                          'p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-3',
                          selectedFormat === format.id
                            ? 'border-brand-orange bg-brand-orange-light'
                            : 'border-brand-peach/40 hover:border-brand-orange/40'
                        )}
                      >
                        <Icon
                          size={24}
                          className={selectedFormat === format.id ? 'text-brand-orange' : 'text-brand-brown-light'}
                        />
                        <span className="font-nunito font-bold text-brand-brown">
                          {format.label}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <button
                onClick={handleExport}
                disabled={isExporting || !generatedImageUrl}
                className="w-full py-4 rounded-2xl font-nunito font-bold text-lg bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isExporting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    导出中...
                  </>
                ) : (
                  <>
                    <Download size={20} />
                    立即导出
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
