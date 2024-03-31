import { Configuration } from '@midwayjs/decorator';
@Configuration({
    imports: ['@midwayjs/faas-middleware-static-file'],})
export class ContainerConfiguration {}