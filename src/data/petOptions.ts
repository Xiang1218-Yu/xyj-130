export type PetType = 'cat' | 'dog'

export type Step = 'petType' | 'breed' | 'coat' | 'face' | 'body' | 'accessory' | 'generate'

export const STEPS: { key: Step; label: string; icon: string }[] = [
  { key: 'petType', label: '宠物类型', icon: '🐾' },
  { key: 'breed', label: '品种', icon: '🏷️' },
  { key: 'coat', label: '毛色花纹', icon: '🎨' },
  { key: 'face', label: '面部特征', icon: '👀' },
  { key: 'body', label: '体型姿态', icon: '🧸' },
  { key: 'accessory', label: '配饰', icon: '🎀' },
  { key: 'generate', label: '生成', icon: '✨' },
]

export interface BreedOption {
  id: string
  name: string
  type: PetType
  emoji: string
  promptName: string
}

export interface FeatureOption {
  id: string
  name: string
  emoji: string
  promptValue: string
}

export interface ColorOption {
  id: string
  name: string
  color: string
  promptValue: string
}

export const catBreeds: BreedOption[] = [
  { id: 'british-shorthair', name: '英短', type: 'cat', emoji: '🐱', promptName: '英国短毛猫' },
  { id: 'persian', name: '波斯猫', type: 'cat', emoji: '🐱', promptName: '波斯猫' },
  { id: 'siamese', name: '暹罗猫', type: 'cat', emoji: '🐱', promptName: '暹罗猫' },
  { id: 'ragdoll', name: '布偶猫', type: 'cat', emoji: '🐱', promptName: '布偶猫' },
  { id: 'orange-tabby', name: '橘猫', type: 'cat', emoji: '🐱', promptName: '橘猫' },
  { id: 'scottish-fold', name: '折耳猫', type: 'cat', emoji: '🐱', promptName: '苏格兰折耳猫' },
  { id: 'american-shorthair', name: '美短', type: 'cat', emoji: '🐱', promptName: '美国短毛猫' },
  { id: 'maine-coon', name: '缅因猫', type: 'cat', emoji: '🐱', promptName: '缅因猫' },
]

export const dogBreeds: BreedOption[] = [
  { id: 'golden-retriever', name: '金毛', type: 'dog', emoji: '🐶', promptName: '金毛寻回犬' },
  { id: 'husky', name: '哈士奇', type: 'dog', emoji: '🐶', promptName: '哈士奇' },
  { id: 'corgi', name: '柯基', type: 'dog', emoji: '🐶', promptName: '威尔士柯基' },
  { id: 'poodle', name: '泰迪', type: 'dog', emoji: '🐶', promptName: '贵宾犬泰迪' },
  { id: 'shiba', name: '柴犬', type: 'dog', emoji: '🐶', promptName: '柴犬' },
  { id: 'samoyed', name: '萨摩耶', type: 'dog', emoji: '🐶', promptName: '萨摩耶' },
  { id: 'french-bulldog', name: '法斗', type: 'dog', emoji: '🐶', promptName: '法国斗牛犬' },
  { id: 'border-collie', name: '边牧', type: 'dog', emoji: '🐶', promptName: '边境牧羊犬' },
]

export const coatColors: ColorOption[] = [
  { id: 'white', name: '白色', color: '#FAFAFA', promptValue: '白色' },
  { id: 'black', name: '黑色', color: '#2C2C2C', promptValue: '黑色' },
  { id: 'orange', name: '橘色', color: '#E8943A', promptValue: '橘色' },
  { id: 'gray', name: '灰色', color: '#9E9E9E', promptValue: '灰色' },
  { id: 'brown', name: '棕色', color: '#8B5E3C', promptValue: '棕色' },
  { id: 'cream', name: '奶油色', color: '#F5DEB3', promptValue: '奶油色' },
  { id: 'golden', name: '金色', color: '#DAA520', promptValue: '金色' },
  { id: 'blue', name: '蓝灰色', color: '#7B8D9E', promptValue: '蓝灰色' },
]

export const coatPatterns: FeatureOption[] = [
  { id: 'solid', name: '纯色', emoji: '⬜', promptValue: '纯色' },
  { id: 'bicolor', name: '双色', emoji: '🔲', promptValue: '双色' },
  { id: 'tricolor', name: '三花', emoji: '🎨', promptValue: '三花色' },
  { id: 'tabby', name: '虎斑', emoji: '🐅', promptValue: '虎斑条纹' },
  { id: 'spotted', name: '斑点', emoji: '🟤', promptValue: '斑点花纹' },
  { id: 'tuxedo', name: '燕尾服', emoji: '🐧', promptValue: '燕尾服花纹' },
  { id: 'merle', name: '大理石', emoji: '🌀', promptValue: '大理石花纹' },
  { id: 'pointed', name: '重点色', emoji: '🎯', promptValue: '重点色' },
]

export const eyeShapes: FeatureOption[] = [
  { id: 'round', name: '圆眼', emoji: '👁️', promptValue: '圆圆的大眼睛' },
  { id: 'almond', name: '杏仁眼', emoji: '🙃', promptValue: '杏仁形眼睛' },
  { id: 'narrow', name: '细长眼', emoji: '😐', promptValue: '细长的眼睛' },
  { id: 'cute', name: '卖萌大眼', emoji: '🥺', promptValue: '超萌的大眼睛' },
  { id: 'sleepy', name: '瞌睡眼', emoji: '😴', promptValue: '半睁的瞌睡眼' },
  { id: 'heterochromia', name: '异瞳', emoji: '🔮', promptValue: '两只眼睛颜色不同' },
]

export const earTypes: FeatureOption[] = [
  { id: 'pointed', name: '尖耳朵', emoji: '🔺', promptValue: '尖尖的耳朵' },
  { id: 'floppy', name: '垂耳', emoji: '🫠', promptValue: '下垂的耳朵' },
  { id: 'folded', name: '折耳', emoji: '📎', promptValue: '向前折叠的耳朵' },
  { id: 'round', name: '圆耳朵', emoji: '⭕', promptValue: '圆圆的小耳朵' },
  { id: 'big', name: '大耳朵', emoji: '🛰️', promptValue: '大大的耳朵' },
  { id: 'tufted', name: '簇毛耳', emoji: '🌿', promptValue: '耳朵顶端有簇毛' },
]

export const bodyTypes: FeatureOption[] = [
  { id: 'slim', name: '苗条', emoji: '📏', promptValue: '苗条的身材' },
  { id: 'standard', name: '标准', emoji: '🐕', promptValue: '标准匀称的身材' },
  { id: 'chubby', name: '圆润', emoji: '🎈', promptValue: '圆滚滚胖乎乎的身材' },
  { id: 'fluffy', name: '蓬松', emoji: '☁️', promptValue: '毛发蓬松的身材' },
  { id: 'muscular', name: '健壮', emoji: '💪', promptValue: '肌肉发达的健壮身材' },
  { id: 'long', name: '修长', emoji: '🦊', promptValue: '修长流线型的身材' },
]

export const poses: FeatureOption[] = [
  { id: 'sitting', name: '坐着', emoji: '🪑', promptValue: '坐姿，面向前方' },
  { id: 'standing', name: '站着', emoji: '🧍', promptValue: '站姿' },
  { id: 'lying', name: '趴着', emoji: '🛋️', promptValue: '趴着休息的姿势' },
  { id: 'playing', name: '玩耍', emoji: '🎾', promptValue: '活泼玩耍的动态姿势' },
  { id: 'curious', name: '好奇张望', emoji: '🔍', promptValue: '歪着头好奇张望的姿势' },
  { id: 'sleeping', name: '蜷缩睡觉', emoji: '💤', promptValue: '蜷缩着睡觉的姿势' },
]

export const accessories: FeatureOption[] = [
  { id: 'none', name: '无配饰', emoji: '✖️', promptValue: '' },
  { id: 'collar', name: '项圈', emoji: '📿', promptValue: '戴着可爱的项圈' },
  { id: 'bow', name: '蝴蝶结', emoji: '🎀', promptValue: '戴着蝴蝶结' },
  { id: 'hat', name: '帽子', emoji: '🎩', promptValue: '戴着小帽子' },
  { id: 'scarf', name: '围巾', emoji: '🧣', promptValue: '围着围巾' },
  { id: 'glasses', name: '眼镜', emoji: '👓', promptValue: '戴着眼镜' },
  { id: 'crown', name: '皇冠', emoji: '👑', promptValue: '戴着小王冠' },
  { id: 'bandana', name: '头巾', emoji: '🧜', promptValue: '戴着头巾' },
]

export const STEP_ORDER: Step[] = ['petType', 'breed', 'coat', 'face', 'body', 'accessory', 'generate']
