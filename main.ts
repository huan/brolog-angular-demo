import { Component } from '@angular/core'
import { bootstrap } from '@angular/platform-browser-dynamic'
import { brolog as log } from 'brolog'

@Component({
  selector: 'test-log'
  , template: `<div>hello {{ name }}</div>`
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
