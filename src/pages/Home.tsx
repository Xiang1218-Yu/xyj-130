import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sparkles, PawPrint, Palette, Wand2, Download, Heart } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: '丰富特征选择',
    desc: '品种、毛色、花纹、眼睛、耳朵、体型...全方位定制',
    color: 'text-brand-orange',
    bg: 'bg-brand-orange-light',
  },
  {
    icon: Wand2,
    title: 'AI智能生成',
    desc: '基于AI技术，生成独一无二的卡通宠物形象',
    color: 'text-brand-mint',
    bg: 'bg-brand-mint-light',
  },
  {
    icon: Download,
    title: '一键导出',
    desc: '支持多种尺寸和格式，高清图片随时下载',
    color: 'text-brand-brown',
    bg: 'bg-brand-peach',
  },
]

const galleryPrompts = [
  'cute cartoon kawaii style illustration of a british shorthair cat, with orange tabby striped fur, big round eyes, small round ears, chubby round plump body, sitting pose facing forward, kawaii style, simple clean pastel background, digital illustration, vibrant colors, flat design, chibi proportions, adorable, high quality',
  'cute cartoon kawaii style illustration of a golden retriever, with golden solid color fur, big round eyes, floppy droopy ears, standard normal proportioned body, sitting pose facing forward, wearing a cute collar, kawaii style, simple clean pastel background, digital illustration, vibrant colors, flat design, chibi proportions, adorable, high quality',
  'cute cartoon kawaii style illustration of a ragdoll cat, with cream bicolor fur, huge cute anime eyes, pointed ears, fluffy very fluffy poofy body, curious tilted head pose, wearing a bow, kawaii style, simple clean pastel background, digital illustration, vibrant colors, flat design, chibi proportions, adorable, high quality',
  'cute cartoon kawaii style illustration of a corgi, with brown and white bicolor fur, big round eyes, pointed ears, chubby round plump body, standing pose, kawaii style, simple clean pastel background, digital illustration, vibrant colors, flat design, chibi proportions, adorable, high quality',
  'cute cartoon kawaii style illustration of a persian cat, with white solid color fur, sleepy half-closed eyes, small round ears, very fluffy poofy body, curled up sleeping pose, kawaii style, simple clean pastel background, digital illustration, vibrant colors, flat design, chibi proportions, adorable, high quality',
  'cute cartoon kawaii style illustration of a shiba inu, with orange solid color fur, almond shaped eyes, pointed ears, muscular sturdy body, playful dynamic pose, wearing a bandana, kawaii style, simple clean pastel background, digital illustration, vibrant colors, flat design, chibi proportions, adorable, high quality',
]

function encodePrompt(prompt: string) {
  return `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=square_hd`
}

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-brand-cream relative overflow-hidden">
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float select-none">🐾</div>
      <div className="absolute top-40 right-20 text-5xl opacity-10 animate-float-delayed select-none">🐱</div>
      <div className="absolute bottom-40 left-1/4 text-7xl opacity-10 animate-float select-none" style={{ animationDelay: '2s' }}>🐶</div>
      <div className="absolute bottom-20 right-1/3 text-5xl opacity-10 animate-float-delayed select-none" style={{ animationDelay: '1.5s' }}>🎀</div>
      <div className="absolute top-1/2 left-5 text-4xl opacity-10 animate-float select-none" style={{ animationDelay: '3s' }}>✨</div>
      <div className="absolute top-1/3 right-10 text-4xl opacity-10 animate-float-delayed select-none" style={{ animationDelay: '0.5s' }}>💖</div>

      <header className="relative z-10 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-dark flex items-center justify-center shadow-lg shadow-brand-orange/30">
            <PawPrint className="text-white" size={20} />
          </div>
          <span className="font-fredoka text-2xl font-bold text-brand-brown">Pawtraits</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-nunito font-semibold text-brand-brown-light hover:text-brand-orange transition-colors">功能特色</a>
          <a href="#gallery" className="font-nunito font-semibold text-brand-brown-light hover:text-brand-orange transition-colors">作品展示</a>
          <a href="#how" className="font-nunito font-semibold text-brand-brown-light hover:text-brand-orange transition-colors">使用教程</a>
        </nav>
        <button
          onClick={() => navigate('/create')}
          className="px-6 py-2 rounded-full bg-brand-orange text-white font-nunito font-bold hover:bg-brand-orange-dark transition-all shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/40 hover:-translate-y-0.5"
        >
          开始创作
        </button>
      </header>

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-peach/50 shadow-sm mb-8"
          >
            <Sparkles className="text-brand-orange" size={16} />
            <span className="font-nunito font-semibold text-brand-brown text-sm">AI驱动 · 一键生成专属宠物卡通形象</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-fredoka text-5xl md:text-7xl font-bold text-brand-brown mb-6 leading-tight"
          >
            为你的毛孩子
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-mint">
              绘制专属卡通形象
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-nunito text-lg md:text-xl text-brand-brown-light max-w-2xl mx-auto mb-10"
          >
            只需几步，即可生成独一无二的宠物卡通画像。
            <br className="hidden md:block" />
            支持猫咪和狗狗，丰富的特征选择，让每个形象都和真实的宠物一样独特。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => navigate('/create')}
              className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-dark text-white font-nunito font-bold text-lg shadow-xl shadow-brand-orange/30 hover:shadow-2xl hover:shadow-brand-orange/40 transition-all hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Wand2 size={20} />
                立即开始创作
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <a
              href="#gallery"
              className="px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm text-brand-brown font-nunito font-bold border border-brand-peach/50 hover:border-brand-orange/50 transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Heart size={18} className="text-brand-orange" />
              查看作品
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex items-center justify-center gap-8 text-brand-brown-light/60 text-sm font-nunito"
          >
            <span>🐱 支持8+猫咪品种</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>🐶 支持8+狗狗品种</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>✨ 50+特征组合</span>
          </motion.div>
        </div>
      </section>

      <section id="features" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-fredoka text-4xl font-bold text-brand-brown mb-4">
              为什么选择 Pawtraits？
            </h2>
            <p className="font-nunito text-brand-brown-light max-w-xl mx-auto">
              简单几步，创造专属于你的宠物卡通形象
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-xl shadow-brand-orange/5 border border-brand-peach/30 hover:shadow-2xl hover:shadow-brand-orange/10 transition-all hover:-translate-y-2 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={feature.color} size={28} />
                  </div>
                  <h3 className="font-fredoka text-2xl font-bold text-brand-brown mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-nunito text-brand-brown-light leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-fredoka text-4xl font-bold text-brand-brown mb-4">
              作品展示
            </h2>
            <p className="font-nunito text-brand-brown-light max-w-xl mx-auto">
              来看看其他小伙伴创作的可爱宠物卡通形象吧
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryPrompts.map((prompt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-brand-orange-light to-brand-peach">
                  <img
                    src={encodePrompt(prompt)}
                    alt={`Pet portrait ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-nunito font-bold text-sm">点击查看详情</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => navigate('/create')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-orange text-white font-nunito font-bold shadow-lg shadow-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/40 transition-all hover:-translate-y-0.5"
            >
              <Sparkles size={20} />
              创作你的专属形象
            </button>
          </motion.div>
        </div>
      </section>

      <section id="how" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-fredoka text-4xl font-bold text-brand-brown mb-4">
              简单三步，轻松创作
            </h2>
            <p className="font-nunito text-brand-brown-light">
              无需绘画技能，每个人都能轻松上手
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: '选择宠物', desc: '选择猫咪或狗狗，以及你喜欢的品种', emoji: '🐾' },
              { step: '02', title: '定制特征', desc: '选择毛色、花纹、眼睛、耳朵、体型等特征', emoji: '🎨' },
              { step: '03', title: '生成导出', desc: '一键生成卡通形象，支持多种格式导出', emoji: '✨' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-white rounded-3xl p-8 shadow-xl shadow-brand-orange/5 border border-brand-peach/30 text-center"
              >
                <div className="text-6xl mb-4">{item.emoji}</div>
                <div className="absolute top-6 right-6 font-fredoka text-4xl font-bold text-brand-orange/10">
                  {item.step}
                </div>
                <h3 className="font-fredoka text-2xl font-bold text-brand-brown mb-3">
                  {item.title}
                </h3>
                <p className="font-nunito text-brand-brown-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-4 left-4 text-6xl opacity-20">🐱</div>
            <div className="absolute bottom-4 right-4 text-6xl opacity-20">🐶</div>

            <div className="relative z-10">
              <h2 className="font-fredoka text-4xl font-bold text-white mb-4">
                准备好开始创作了吗？
              </h2>
              <p className="font-nunito text-white/80 text-lg mb-8 max-w-xl mx-auto">
                现在就来为你的毛孩子打造独一无二的卡通形象吧！
              </p>
              <button
                onClick={() => navigate('/create')}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-brand-orange font-nunito font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <Wand2 size={20} />
                立即开始
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative z-10 py-8 px-6 border-t border-brand-peach/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <PawPrint className="text-brand-orange" size={20} />
            <span className="font-fredoka font-bold text-brand-brown">Pawtraits</span>
          </div>
          <p className="font-nunito text-sm text-brand-brown-light/60">
            © 2026 Pawtraits. 用爱为每一只毛孩子创造专属形象
          </p>
        </div>
      </footer>
    </div>
  )
}
