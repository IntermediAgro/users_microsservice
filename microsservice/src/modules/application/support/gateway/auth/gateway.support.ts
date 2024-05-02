import { injectable } from 'inversify';
import { MODULE } from 'modules/app.registry';
import { injectGateway } from 'modules/application/gateway/gateway.module';
import { IAuthGateway } from 'modules/domain/gateway/auth/auth.gateway';

@injectable()
export abstract class AuthGatewaySupport {
  @injectGateway(MODULE.GATEWAY.AUTH.JWT)
  protected readonly _gateway!: IAuthGateway;
}
