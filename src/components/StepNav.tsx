import { useCreationStore } from '@/store/useCreationStore'
import { STEPS } from '@/data/petOptions'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { STEP_ORDER } from '@/data/petOptions'

export default function StepNav() {
  const { currentStep, goToStep } = useCreationStore()
  const currentIdx = STEP_ORDER.indexOf(currentStep)

  return (
    <div className="bg-white/60 backdrop-blur-sm border-b border-brand-peach/30 py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {STEPS.map((step, idx) => {
            const isActive = idx === currentIdx
            const isCompleted = idx < currentIdx
            const isClickable = idx <= currentIdx

            return (
              <div
                key={step.key}
                className="flex items-center flex-1 last:flex-none"
              >
                <button
                  onClick={() => isClickable && goToStep(step.key)}
                  className={cn(
                    'flex flex-col items-center gap-1.5 group',
                    isClickable ? 'cursor-pointer' : 'cursor-default'
                  )}
                  disabled={!isClickable}
                >
                  <div
                    className={cn(
                      'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
                      isActive && 'bg-brand-orange text-white scale-110 shadow-lg shadow-brand-orange/30',
                      isCompleted && 'bg-brand-mint text-white',
                      !isActive && !isCompleted && 'bg-brand-orange-light text-brand-brown-light'
                    )}
                  >
                    {isCompleted ? (
                      <Check size={18} strokeWidth={3} />
                    ) : (
                      <span>{idx + 1}</span>
                    )}
                  </div>
                  <span
                    className={cn(
                      'text-xs font-nunito font-semibold transition-colors',
                      isActive && 'text-brand-orange',
                      isCompleted && 'text-brand-mint',
                      !isActive && !isCompleted && 'text-brand-brown-light/60'
                    )}
                  >
                    {step.label}
                  </span>
                </button>

                {idx < STEPS.length - 1 && (
                  <div
                    className={cn(
                      'flex-1 h-0.5 mx-2 rounded-full transition-colors duration-300',
                      idx < currentIdx ? 'bg-brand-mint' : 'bg-brand-orange-light'
                    )}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
