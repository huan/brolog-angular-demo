import {
  Component
  , ViewEncapsulation
} from '@angular/core'

import { bootstrap } from '@angular/platform-browser-dynamic'

/**
 *
 * Brolog & Angular STEP 1: import Brolog
 *
 */
import { Brolog } from 'brolog'

@Component({
  selector: 'brolog-app'
  , templateUrl: 'brolog-app.component.html'
  ,encapsulation: ViewEncapsulation.None
})

class BrologApp {
  private sourceCode: string

  /**
   *
   * Brolog & Angular STEP 2: @Inject(Brolog)
   *
   */
  // @Injectable()
  constructor(
    /* @Inject(Brolog) */ private log: Brolog
  ) {
    /**
     *
     * Brolog & Angular STEP 3: use it like Npmlog!
     *
     */
    log.verbose('LogApp', 'constructor()')

    /**
     *
     * this message `THIS_MESSAGE_MEANS_BROLOG_ANGULAR_GOOD`
     * is used by brolog End to End test:
     * https://github.com/zixia/brolog/tree/master/test/e2e
     *
     */
    log.error('LogApp', 'THIS_MESSAGE_MEANS_BROLOG_ANGULAR_GOOD')

    console.log('######### start doLog with default Level: %s #########', log.defaultLevel())
    this.doLog(log, 'Brolog')
    console.log('######### end doLog with default Level: %s #########', log.defaultLevel())
  }

  test() {

    console.log('######### Start BroLog Test #########')

    const loggerList = [
      [this.log, 'injected Brolog']
      , [Brolog, 'raw Brolog']
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

  doLog(logger: Brolog, loggerName: string) {
    logger.error('LogApp', 'error messsage from %s', loggerName)
    logger.warn('LogApp', 'warn message from %s', loggerName)
    logger.info('LogApp', 'info message from %s', loggerName)
    logger.verbose('LogApp', 'verbose message from %s', loggerName)
    logger.silly('LogApp', 'silly message from %s', loggerName)
  }

}

/**
 *
 * Brolog & Angular STEP 0: provide Brolog to bootstrap
 *
 */
bootstrap(BrologApp, [
  Brolog('VERBOSE')
  // Brolog
])