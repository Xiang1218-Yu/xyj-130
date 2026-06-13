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
  { id: 'british-shorthair', name: '英短', type: 'cat', emoji: '🐱', promptName: 'british shorthair cat' },
  { id: 'persian', name: '波斯猫', type: 'cat', emoji: '🐱', promptName: 'persian cat' },
  { id: 'siamese', name: '暹罗猫', type: 'cat', emoji: '🐱', promptName: 'siamese cat' },
  { id: 'ragdoll', name: '布偶猫', type: 'cat', emoji: '🐱', promptName: 'ragdoll cat' },
  { id: 'orange-tabby', name: '橘猫', type: 'cat', emoji: '🐱', promptName: 'orange tabby cat' },
  { id: 'scottish-fold', name: '折耳猫', type: 'cat', emoji: '🐱', promptName: 'scottish fold cat' },
  { id: 'american-shorthair', name: '美短', type: 'cat', emoji: '🐱', promptName: 'american shorthair cat' },
  { id: 'maine-coon', name: '缅因猫', type: 'cat', emoji: '🐱', promptName: 'maine coon cat' },
]

export const dogBreeds: BreedOption[] = [
  { id: 'golden-retriever', name: '金毛', type: 'dog', emoji: '🐶', promptName: 'golden retriever' },
  { id: 'husky', name: '哈士奇', type: 'dog', emoji: '🐶', promptName: 'husky' },
  { id: 'corgi', name: '柯基', type: 'dog', emoji: '🐶', promptName: 'corgi' },
  { id: 'poodle', name: '泰迪', type: 'dog', emoji: '🐶', promptName: 'toy poodle' },
  { id: 'shiba', name: '柴犬', type: 'dog', emoji: '🐶', promptName: 'shiba inu' },
  { id: 'samoyed', name: '萨摩耶', type: 'dog', emoji: '🐶', promptName: 'samoyed' },
  { id: 'french-bulldog', name: '法斗', type: 'dog', emoji: '🐶', promptName: 'french bulldog' },
  { id: 'border-collie', name: '边牧', type: 'dog', emoji: '🐶', promptName: 'border collie' },
]

export const coatColors: ColorOption[] = [
  { id: 'white', name: '白色', color: '#FAFAFA', promptValue: 'white' },
  { id: 'black', name: '黑色', color: '#2C2C2C', promptValue: 'black' },
  { id: 'orange', name: '橘色', color: '#E8943A', promptValue: 'orange' },
  { id: 'gray', name: '灰色', color: '#9E9E9E', promptValue: 'gray' },
  { id: 'brown', name: '棕色', color: '#8B5E3C', promptValue: 'brown' },
  { id: 'cream', name: '奶油色', color: '#F5DEB3', promptValue: 'cream' },
  { id: 'golden', name: '金色', color: '#DAA520', promptValue: 'golden' },
  { id: 'blue', name: '蓝灰色', color: '#7B8D9E', promptValue: 'blue-gray' },
]

export const coatPatterns: FeatureOption[] = [
  { id: 'solid', name: '纯色', emoji: '⬜', promptValue: 'solid color' },
  { id: 'bicolor', name: '双色', emoji: '🔲', promptValue: 'bicolor' },
  { id: 'tricolor', name: '三花', emoji: '🎨', promptValue: 'tricolor calico' },
  { id: 'tabby', name: '虎斑', emoji: '🐅', promptValue: 'tabby striped' },
  { id: 'spotted', name: '斑点', emoji: '🟤', promptValue: 'spotted' },
  { id: 'tuxedo', name: '燕尾服', emoji: '🐧', promptValue: 'tuxedo pattern' },
  { id: 'merle', name: '大理石', emoji: '🌀', promptValue: 'merle pattern' },
  { id: 'pointed', name: '重点色', emoji: '🎯', promptValue: 'colorpoint' },
]

export const eyeShapes: FeatureOption[] = [
  { id: 'round', name: '圆眼', emoji: '👁️', promptValue: 'big round eyes' },
  { id: 'almond', name: '杏仁眼', emoji: '🙃', promptValue: 'almond shaped eyes' },
  { id: 'narrow', name: '细长眼', emoji: '😐', promptValue: 'narrow eyes' },
  { id: 'cute', name: '卖萌大眼', emoji: '🥺', promptValue: 'huge cute anime eyes' },
  { id: 'sleepy', name: '瞌睡眼', emoji: '😴', promptValue: 'sleepy half-closed eyes' },
  { id: 'heterochromia', name: '异瞳', emoji: '🔮', promptValue: 'heterochromia eyes different colors' },
]

export const earTypes: FeatureOption[] = [
  { id: 'pointed', name: '尖耳朵', emoji: '🔺', promptValue: 'pointed ears' },
  { id: 'floppy', name: '垂耳', emoji: '🫠', promptValue: 'floppy droopy ears' },
  { id: 'folded', name: '折耳', emoji: '📎', promptValue: 'folded ears' },
  { id: 'round', name: '圆耳朵', emoji: '⭕', promptValue: 'small round ears' },
  { id: 'big', name: '大耳朵', emoji: '🛰️', promptValue: 'large bat-like ears' },
  { id: 'tufted', name: '簇毛耳', emoji: '🌿', promptValue: 'tufted lynx-like ears' },
]

export const bodyTypes: FeatureOption[] = [
  { id: 'slim', name: '苗条', emoji: '📏', promptValue: 'slim slender body' },
  { id: 'standard', name: '标准', emoji: '🐕', promptValue: 'normal proportioned body' },
  { id: 'chubby', name: '圆润', emoji: '🎈', promptValue: 'chubby round plump body' },
  { id: 'fluffy', name: '蓬松', emoji: '☁️', promptValue: 'very fluffy poofy body' },
  { id: 'muscular', name: '健壮', emoji: '💪', promptValue: 'muscular sturdy body' },
  { id: 'long', name: '修长', emoji: '🦊', promptValue: 'long sleek body' },
]

export const poses: FeatureOption[] = [
  { id: 'sitting', name: '坐着', emoji: '🪑', promptValue: 'sitting pose facing forward' },
  { id: 'standing', name: '站着', emoji: '🧍', promptValue: 'standing pose' },
  { id: 'lying', name: '趴着', emoji: '🛋️', promptValue: 'lying down resting pose' },
  { id: 'playing', name: '玩耍', emoji: '🎾', promptValue: 'playful dynamic pose' },
  { id: 'curious', name: '好奇张望', emoji: '🔍', promptValue: 'curious tilted head pose' },
  { id: 'sleeping', name: '蜷缩睡觉', emoji: '💤', promptValue: 'curled up sleeping pose' },
]

export const accessories: FeatureOption[] = [
  { id: 'none', name: '无配饰', emoji: '✖️', promptValue: '' },
  { id: 'collar', name: '项圈', emoji: '📿', promptValue: 'wearing a cute collar' },
  { id: 'bow', name: '蝴蝶结', emoji: '🎀', promptValue: 'wearing a bow' },
  { id: 'hat', name: '帽子', emoji: '🎩', promptValue: 'wearing a small hat' },
  { id: 'scarf', name: '围巾', emoji: '🧣', promptValue: 'wearing a scarf' },
  { id: 'glasses', name: '眼镜', emoji: '👓', promptValue: 'wearing glasses' },
  { id: 'crown', name: '皇冠', emoji: '👑', promptValue: 'wearing a tiny crown' },
  { id: 'bandana', name: '头巾', emoji: '🧜', promptValue: 'wearing a bandana' },
]

export const STEP_ORDER: Step[] = ['petType', 'breed', 'coat', 'face', 'body', 'accessory', 'generate']
