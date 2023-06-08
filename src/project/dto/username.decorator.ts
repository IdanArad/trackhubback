import { createParamDecorator, ExecutionContext } from '@nestjs/common';

const Username = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.username;
  }
);

export default Username;
