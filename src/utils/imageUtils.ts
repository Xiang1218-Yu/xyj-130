import type { PetConfig } from '@/store/useCreationStore'

export function buildPrompt(config: PetConfig): string {
  const parts: string[] = []

  parts.push('可爱的卡通风格插画，一只')

  if (config.breedPromptName) {
    parts.push(config.breedPromptName)
  } else if (config.type === 'cat') {
    parts.push('猫咪')
  } else if (config.type === 'dog') {
    parts.push('狗狗')
  }

  if (config.coatColorPrompt && config.coatPatternPrompt) {
    parts.push(`，${config.coatColorPrompt}${config.coatPatternPrompt}的毛发`)
  } else if (config.coatColorPrompt) {
    parts.push(`，${config.coatColorPrompt}的毛发`)
  } else if (config.coatPatternPrompt) {
    parts.push(`，${config.coatPatternPrompt}的毛发`)
  }

  if (config.eyeShapePrompt) {
    parts.push(`，${config.eyeShapePrompt}`)
  }

  if (config.earTypePrompt) {
    parts.push(`，${config.earTypePrompt}`)
  }

  if (config.bodyTypePrompt) {
    parts.push(`，${config.bodyTypePrompt}`)
  }

  if (config.posePrompt) {
    parts.push(`，${config.posePrompt}`)
  }

  if (config.accessoryPrompt) {
    parts.push(`，${config.accessoryPrompt}`)
  }

  parts.push('。Q版卡通风格，简洁干净的背景，数字插画，鲜艳的色彩，扁平化设计，可爱的比例，超萌，高质量，宠物外形和真实品种保持一致')

  return parts.join('')
}

export function generateImageUrl(config: PetConfig): string {
  const prompt = buildPrompt(config)
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=square_hd`
}

export async function downloadImage(url: string, filename: string): Promise<void> {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error('Failed to fetch image')

    const blob = await response.blob()
    const blobUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(blobUrl)
  } catch {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

export function getExportFilename(config: PetConfig): string {
  const typeStr = config.type === 'cat' ? '猫咪' : config.type === 'dog' ? '狗狗' : '宠物'
  const breedStr = config.breed || 'custom'
  return `pawtrait_${typeStr}_${breedStr}_${Date.now()}.png`
}
