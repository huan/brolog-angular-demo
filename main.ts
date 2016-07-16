import {
  Component
  , OpaqueToken
  , Injectable
  , Inject
  , provide
} from '@angular/core'
import { bootstrap } from '@angular/platform-browser-dynamic'

import { Brolog } from 'brolog'

@Component({
  selector: 'test-log'
  , template: `
  <h1 align="center">BroLog &amp; Angular Demo</h1>
  <div align="center">
    <a href="https://github.com/zixia/brolog" target="_blank">BroLog Project on Github</a>
    |
    <a href="https://github.com/zixia/brolog-angular-demo/blob/master/main.ts" target="_blank">Source Code of This Component</a>
  </div>
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

  <div align="center">
    <button (click)="test()">Click me, Then see console log</button>
  </div>
  `
  , providers: []
})

class LogApp {
  constructor(
    @Inject(Brolog) private log
  ) {
    log.verbose('LogApp', 'constructor()')

    console.log('######### start doLog with default Level: %s #########', log.defaultLevel())
    this.doLog(log, 'Brolog')
    console.log('######### end doLog with default Level: %s #########', log.defaultLevel())

    this.test()
  }

  test() {

    console.log('######### Start BroLog Test #########')

    const loggerList = [
          [Brolog, 'raw Brolog']
      , [this.log, 'injected Brolog']
    ]
    
    const levels = [
      'ERROR'
      , 'WARN'
      , 'INFO'
      , 'VERBOSE'
      , 'SILLY'
    ]

    loggerList.forEach(([logger, loggerName]) => {
      levels.forEach(level => {
        console.log('#### Logger(%s) Set Level to %s ####', loggerName, level)
        logger.level(level)
        this.doLog(logger, loggerName)
      })
    })
    
    console.log('######### End BroLog Test #########')

  }

  doLog(logger: Brolog, loggerName) {
    logger.error('LogApp', 'error')
    logger.warn('LogApp', 'warn')
    logger.info('LogApp', 'info')
    logger.verbose('LogApp', 'verbose')
    logger.silly('LogApp', 'silly')
  }
}

bootstrap(LogApp, [
  Brolog.factory('VERBOSE')
])
