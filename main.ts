import { Component } from '@angular/core'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { Brolog } from 'brolog'

const log = new Brolog()
// const log = Brolog // <- this will work too

@Component({
  selector: 'test-log'
  , template: `
  <h1>BroLog &amp; Angular Demo</h1>
  <a href="https://github.com/zixia/brolog" target="_blank">BroLog Project on Github</a>
  |
  <a href="https://github.com/zixia/brolog-angular-demo/blob/master/main.ts" target="_blank">Source Code of This Component</a>
  <br />
  <ol>
    <li class="line" data-line="10"><p>Support TypeScript support(typing file <a href="https://github.com/zixia/brolog/blob/master/index.d.ts">index.d.ts</a>).</p></li>
    <li class="line" data-line="11"><p>Support Angular2 &amp; SystemJS(demo project <a href="https://github.com/zixia/brolog-angular-demo">git repository</a>)</p></li>
    <li class="line" data-line="12"><p>Support show <strong>real</strong> line number in browser console.</p>
      <blockquote class="line" data-line="13"><p>What I really get frustrated by is that I cannot wrap console.* and preserve line numbers</p>
      </blockquote>
      <p><a href="https://gist.github.com/paulirish/c307a5a585ddbcc17242">We enabled this in Chrome DevTools via blackboxing a bit ago.</a></p></li>
    <li class="line" data-line="16"><p>Also can be used with nodejs(example <a href="https://github.com/zixia/brolog/blob/master/example/npm-like-logger.js">here</a>)</p></li>
  </ol>

  <hr />

  <button (click)="test()">Click me, Then see console log</button>
  `
})

export class LogApp {
  constructor() {
    this.test()
  }

  test() {

    console.log('#### Set Level to SILLY ####')
    log.level('SILLY')
    this.doLog()

    log.level('INFO')
    console.log('#### Set Level to INFO ####')
    this.doLog()

    console.log('#### Set Level to ERR ####')
    log.level('ERR')
    this.doLog()

    console.log('#### Set Level to SILENT ####')
    log.level('SILENT')
    this.doLog()

    console.log('#### BroLog Test Done ####')

  }

  doLog() {
    log.error('LogApp', 'error')
    log.warn('LogApp', 'warn')
    log.info('LogApp', 'info')
    log.verbose('LogApp', 'verbose')
    log.silly('LogApp', 'silly')
  }
}

bootstrap(LogApp)
