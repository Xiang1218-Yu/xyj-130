import { create } from 'zustand'
import type { PetType, Step, BreedOption } from '@/data/petOptions'
import { STEP_ORDER } from '@/data/petOptions'

export interface PetConfig {
  type: PetType | null
  breed: string
  breedPromptName: string
  coatColor: string
  coatColorPrompt: string
  coatPattern: string
  coatPatternPrompt: string
  eyeShape: string
  eyeShapePrompt: string
  earType: string
  earTypePrompt: string
  bodyType: string
  bodyTypePrompt: string
  pose: string
  posePrompt: string
  accessory: string
  accessoryPrompt: string
}

interface CreationState {
  currentStep: Step
  config: PetConfig
  generatedImageUrl: string | null
  isGenerating: boolean
  showExportModal: boolean

  nextStep: () => void
  prevStep: () => void
  goToStep: (step: Step) => void
  setType: (type: PetType, breed?: BreedOption) => void
  setBreed: (breed: BreedOption) => void
  setCoatColor: (id: string, prompt: string) => void
  setCoatPattern: (id: string, prompt: string) => void
  setEyeShape: (id: string, prompt: string) => void
  setEarType: (id: string, prompt: string) => void
  setBodyType: (id: string, prompt: string) => void
  setPose: (id: string, prompt: string) => void
  setAccessory: (id: string, prompt: string) => void
  setGeneratedImage: (url: string | null) => void
  setIsGenerating: (val: boolean) => void
  setShowExportModal: (val: boolean) => void
  reset: () => void
}

const initialConfig: PetConfig = {
  type: null,
  breed: '',
  breedPromptName: '',
  coatColor: '',
  coatColorPrompt: '',
  coatPattern: '',
  coatPatternPrompt: '',
  eyeShape: '',
  eyeShapePrompt: '',
  earType: '',
  earTypePrompt: '',
  bodyType: '',
  bodyTypePrompt: '',
  pose: '',
  posePrompt: '',
  accessory: '',
  accessoryPrompt: '',
}

export const useCreationStore = create<CreationState>((set, get) => ({
  currentStep: 'petType',
  config: initialConfig,
  generatedImageUrl: null,
  isGenerating: false,
  showExportModal: false,

  nextStep: () => {
    const { currentStep } = get()
    const idx = STEP_ORDER.indexOf(currentStep)
    if (idx < STEP_ORDER.length - 1) {
      set({ currentStep: STEP_ORDER[idx + 1] })
    }
  },

  prevStep: () => {
    const { currentStep } = get()
    const idx = STEP_ORDER.indexOf(currentStep)
    if (idx > 0) {
      set({ currentStep: STEP_ORDER[idx - 1] })
    }
  },

  goToStep: (step: Step) => {
    set({ currentStep: step })
  },

  setType: (type: PetType) => {
    set(state => ({
      config: {
        ...state.config,
        type,
        breed: '',
        breedPromptName: '',
      },
    }))
  },

  setBreed: (breed: BreedOption) => {
    set(state => ({
      config: {
        ...state.config,
        breed: breed.name,
        breedPromptName: breed.promptName,
      },
    }))
  },

  setCoatColor: (id: string, prompt: string) => {
    set(state => ({
      config: {
        ...state.config,
        coatColor: id,
        coatColorPrompt: prompt,
      },
    }))
  },

  setCoatPattern: (id: string, prompt: string) => {
    set(state => ({
      config: {
        ...state.config,
        coatPattern: id,
        coatPatternPrompt: prompt,
      },
    }))
  },

  setEyeShape: (id: string, prompt: string) => {
    set(state => ({
      config: {
        ...state.config,
        eyeShape: id,
        eyeShapePrompt: prompt,
      },
    }))
  },

  setEarType: (id: string, prompt: string) => {
    set(state => ({
      config: {
        ...state.config,
        earType: id,
        earTypePrompt: prompt,
      },
    }))
  },

  setBodyType: (id: string, prompt: string) => {
    set(state => ({
      config: {
        ...state.config,
        bodyType: id,
        bodyTypePrompt: prompt,
      },
    }))
  },

  setPose: (id: string, prompt: string) => {
    set(state => ({
      config: {
        ...state.config,
        pose: id,
        posePrompt: prompt,
      },
    }))
  },

  setAccessory: (id: string, prompt: string) => {
    set(state => ({
      config: {
        ...state.config,
        accessory: id,
        accessoryPrompt: prompt,
      },
    }))
  },

  setGeneratedImage: (url: string | null) => {
    set({ generatedImageUrl: url })
  },

  setIsGenerating: (val: boolean) => {
    set({ isGenerating: val })
  },

  setShowExportModal: (val: boolean) => {
    set({ showExportModal: val })
  },

  reset: () => {
    set({
      currentStep: 'petType',
      config: initialConfig,
      generatedImageUrl: null,
      isGenerating: false,
      showExportModal: false,
    })
  },
}))
