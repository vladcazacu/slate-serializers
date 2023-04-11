import { ChildNode, Element, Text } from 'domhandler'

interface ElementTagTransform {
  [key: string]: ({
    node,
    attribs,
    children,
  }: {
    node?: any
    attribs?: { [key: string]: string }
    children?: ChildNode[]
  }) => Element
}

interface MarkTransform {
  [key: string]: (params: { node: any; textChildren?: any }) => (Element | Text)[]
}

export interface Config {
  markMap: { [key: string]: string[] }
  markTransforms?: MarkTransform
  elementMap: { [key: string]: string }
  elementStyleMap?: {
    [key: string]: string
  }
  elementTransforms: ElementTagTransform
  defaultTag?: string
  encodeEntities?: boolean
  alwaysEncodeCodeEntities?: boolean
  convertLineBreakToBr?: boolean
}
