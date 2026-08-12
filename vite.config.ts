import { defineConfig, type Plugin } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import mockjs from 'mockjs'
import url from 'node:url'

// vite 插件
const viteMockServer = (): Plugin => {
  return {
    name: 'vite-mock-server',
    configureServer(server) {
      server.middlewares.use('/api/list', (req, res) => {
        const parseUrl = url.parse(req.originalUrl, true).query
        const data = mockjs.mock({
          'list|1000': [
            {
              'id|+1': 1,
              'address': '@county(true)',
              name: parseUrl.keyWord,
            }
          ]
        })
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(data))
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    viteMockServer(),
  ],
})
