import type { ReactNode } from 'react'

import Post0001 from './_posts/post-0001'
import Post0002 from './_posts/post-0002'
import Post0003 from './_posts/post-0003'

export const POST_COMPONENTS: Record<string, () => ReactNode> = {
  'post-0001': Post0001,
  'post-0002': Post0002,
  'post-0003': Post0003,
}
