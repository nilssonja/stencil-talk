class CanvasExample extends HTMLElement {
  constructor() {
    super();
    //initializations
  }

  htmlDecode(code) {
    const replacements = [
      ['&lt;', '<'],
      ['&gt;', '>'],
      ['&amp;', '&']
    ]

    return replacements.reduce((str, [pattern, replacement]) => {
      return str.split(pattern).join(replacement)
    }, code)
  }

  jsApiWithGlobals(name, script) {
    return `
      const canvas = document.getElementById('${name}')
      const context = canvas.getContext('2d')

      context.strokeStyle = '#000000'
      context.lineWidth = 8
      context.lineCap = "round"
      context.lineJoin = "round"

      context.fillStyle = '#444444'

      ${this.htmlDecode(script)}
    `
  }

  webglWithGlobals(name, script) {
    return `
      const canvas = document.getElementById('${name}')

      function initShaders(gl, vertSource, fragSource) {
        const vertShader = gl.createShader(gl.VERTEX_SHADER)
        const fragShader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(vertShader, vertSource)
        gl.shaderSource(fragShader, fragSource)
        gl.compileShader(vertShader)
        gl.compileShader(fragShader)
        const errors = [vertShader, fragShader].map(shader => ({
          shader,
          type: gl.getShaderParameter(shader, gl.SHADER_TYPE),
          compileStatus: gl.getShaderParameter(shader, gl.COMPILE_STATUS)
        }))
        .filter(({compileStatus}) => !compileStatus)
        .map(({shader, type}) => {
          const log = gl.getShaderInfoLog(shader)
          console.log("Problem compiling shader type: ", type)
          console.log(log)
          return true
        })
        if(errors.length > 0) {
          console.log('Shaders have errors, halting...')
          return
        }
        const program = gl.createProgram()
        gl.attachShader(program, vertShader)
        gl.attachShader(program, fragShader)
        gl.linkProgram(program)
        const linkStatus = gl.getProgramParameter(program, gl.LINK_STATUS)
        if(!linkStatus) {
          console.log('Problem Linking shaders')
          console.log(gl.getProgramInfoLog(program))
          return
        }
        gl.useProgram(program)
        gl.program = program
      }

      ${this.htmlDecode(script)}
    `
  }

  connectedCallback() {
    const name = this.getAttribute("name")
    const webgl = this.hasAttribute('webgl')
    const aframe = this.hasAttribute('aframe')
    const canvasScript = this.innerHTML
    const canvasScriptWithGlobals = webgl
      ? this.webglWithGlobals(name, canvasScript)
      : this.jsApiWithGlobals(name, canvasScript)

    if(aframe) {
      this.innerHTML += `
        <h2>${name}</h2>
        <canvas id="${name}" class="with-grid"></canvas>
        <pre>
          <code class="html" data-trim>
            ${canvasScript}
          </code>
        </pre>
      `
    } else {
      this.innerHTML = `
        <h2>${name}</h2>
        <canvas id="${name}" class="with-grid"></canvas>
        <pre>
          <code class="js" data-trim>
            ${canvasScript}
          </code>
        </pre>
      `

      eval(canvasScriptWithGlobals)
    }
  }
  attributeChangeCallback() { }
  disconnectedCallback() { }
}
customElements.define('canvas-example', CanvasExample);