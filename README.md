# qoq-static

static file serving middleware based on [koa-static](https://github.com/koajs/static).

# Installation

```bash
yarn add qoq-static
```

# Usage

```typescript
import { WebSlotManager } from 'qoq';
import { Static } from 'qoq-static';

const webSlots = WebSlotManager.use(new Static(root, options));
```

# Options

@see [koa-static](https://github.com/koajs/static/blob/master/Readme.md)
