import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { 
  NgModule,
  Component,
}                                 from '@angular/core'

import { BrowserModule }          from '@angular/platform-browser'

/**
 *
 * Brolog & Angular STEP 1: import Brolog
 *
 */
import { 
  Brolog,
  LevelName,
} from 'brolog'

@Component({
  selector:     'brolog-app',
  templateUrl:  'brolog-app.component.html',
})

class BrologComponent {
  // private sourceCode: string

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

    console.log('######### start doLog with Level: %s #########', log.level())
    this.doLog(log, 'Brolog')
    console.log('######### end doLog with Level: %s #########', log.level())
  }

  test() {

    console.log('######### Start BroLog Test #########')

    const loggerList: {[name:string]: Brolog} = {
      'injected Brolog':  this.log,
      'raw Brolog':       Brolog,
    }
    
    const levels: LevelName[] = [
      'error'
      , 'warn'
      , 'info'
      , 'verbose'
      , 'silly'
    ]

    for (const loggerName in loggerList) {
      let logger = loggerList[loggerName]
      levels.forEach(level => {
        console.log('#### Logger(%s) Set Level to %s ####', loggerName, level)
        logger.level(level)
        this.doLog(logger, loggerName)
      })
    }
    
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

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ BrologComponent ],
  bootstrap:    [ BrologComponent ],
  providers: [
    {
      provide: Brolog, 
      useFactory: function brologFactory() { return Brolog.instance('verbose') }
    },
  ],
})
export class BrologModule {}

/**
 *
 * Brolog & Angular STEP 0: provide Brolog to bootstrap
 *
 */
platformBrowserDynamic()
.bootstrapModule(BrologModule)
