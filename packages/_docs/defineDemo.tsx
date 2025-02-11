import { storiesOf } from '@storybook/vue'
import { defineComponent } from 'vue-demi'
import { ShowDocs } from './showdocs'

export function defineDemo(
  { module, category, name, docs }: { module: NodeModule; category: string; name: string; docs: string},
  Demo: any,
) {
  const Wrapper = defineComponent({
    render(this: Vue & any) {
      // @ts-ignore
      const Docs: any = <ShowDocs md={docs} />

      return (
        <div>
          <div id="demo">
            <Demo/>
          </div>
          {Docs}
        </div>
      )
    },
  })

  storiesOf(category, module)
    .add(name, () => Wrapper as any)
}

export function html(...data: any[]) {
  // @ts-ignore
  return String.raw(...data).trim()
}
