<template>
  <canvas ref="canvasRef" class="fixed inset-0 -z-10 pointer-events-none w-full h-full" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { temaAtual } from '@/store/theme'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const resizeCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)

  const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'

  const fontSize: number = 16

  let columns: number = Math.floor(canvas.width / fontSize)

  let rainDrops: number[] = []

  const initRain = () => {
    columns = Math.floor(canvas.width / fontSize)
    rainDrops = Array(columns)
      .fill(1)
      .map(() => Math.floor((Math.random() * -canvas.height) / fontSize))
  }
  initRain()

  window.addEventListener('resize', initRain) // Se a janela mudar de tamanho

  const draw = () => {
    if (temaAtual.value !== 'matrix') {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      return
    }

    ctx.fillStyle = 'rgba(3, 7, 4, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.font = `${fontSize}px monospace`

    for (let i = 0; i < rainDrops.length; i++) {
      const currentDrop: number = rainDrops[i] ?? 0 // evita erros de undefined

      const text: string = alphabet.charAt(Math.floor(Math.random() * alphabet.length))

      const x: number = i * fontSize
      const y: number = currentDrop * fontSize

      if (Math.random() > 0.98) {
        ctx.fillStyle = '#ffffff'
      } else {
        ctx.fillStyle = '#00ff41'
      }

      ctx.fillText(text, x, y)

      if (y > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0
      } else {
        rainDrops[i] = currentDrop + 1
      }
    }
  }

  const ticker = () => {
    draw()
    animationFrameId = requestAnimationFrame(ticker)
  }

  if (temaAtual.value === 'matrix') {
    ticker()
  }

  watch(temaAtual, (novoTema) => {
    if (novoTema === 'matrix') {
      cancelAnimationFrame(animationFrameId)
      ticker()
    } else {
      cancelAnimationFrame(animationFrameId)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvas)
    window.removeEventListener('resize', initRain)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>
