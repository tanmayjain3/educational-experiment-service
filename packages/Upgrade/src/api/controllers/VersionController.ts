import { JsonController, Get } from 'routing-controllers';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { env } from '../../env';

/**
 * @swagger
 * tags:
 *   - name: Version
 *     description: Get version details
 */

@JsonController('/version')
export class VersionController {
    constructor(@Logger(__filename) private log: LoggerInterface) { }

    /**
     * @swagger
     * /stats/versionNumber:
     *    post:
     *       description: Get current version number
     */
    @Get('/')
    public async getVersionNumber(): Promise<string> {
        this.log.info('Request recieved for version');
        return env.app.version;
    }
}
