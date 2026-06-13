import { useNavigate } from 'react-router-dom'
import { useCreationStore } from '@/store/useCreationStore'
import StepNav from '@/components/StepNav'
import PetTypeSelector from '@/components/PetTypeSelector'
import BreedSelector from '@/components/BreedSelector'
import CoatSelector from '@/components/CoatSelector'
import FaceSelector from '@/components/FaceSelector'
import BodySelector from '@/components/BodySelector'
import AccessorySelector from '@/components/AccessorySelector'
import PreviewPanel from '@/components/PreviewPanel'
import GeneratePanel from '@/components/GeneratePanel'
import { PawPrint, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Create() {
  const navigate = useNavigate()
  const { currentStep, prevStep, reset } = useCreationStore()

  const handleBack = () => {
    if (currentStep === 'petType') {
      reset()
      navigate('/')
    } else {
      prevStep()
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 'petType': return <PetTypeSelector />
      case 'breed': return <BreedSelector />
      case 'coat': return <CoatSelector />
      case 'face': return <FaceSelector />
      case 'body': return <BodySelector />
      case 'accessory': return <AccessorySelector />
      case 'generate': return <GeneratePanel />
      default: return <PetTypeSelector />
    }
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="bg-white/80 backdrop-blur-sm border-b border-brand-peach/30 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-1.5 text-brand-brown-light hover:text-brand-orange transition-colors font-nunito font-semibold text-sm"
          >
            <ArrowLeft size={18} />
            {currentStep === 'petType' ? '首页' : '上一步'}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <PawPrint className="text-brand-orange" size={22} />
          <span className="font-fredoka text-lg font-bold text-brand-brown">Pawtraits</span>
        </div>
        <div className="w-20" />
      </header>

      <StepNav />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:block w-72 shrink-0">
            <PreviewPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
