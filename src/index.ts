import { Slot } from 'qoq';
import serve, { Options } from 'koa-static';

export class Static extends Slot<Slot.Web> {
  constructor(root: string, options?: Options) {
    super();
    this.use(serve(root, options));
  }
}
