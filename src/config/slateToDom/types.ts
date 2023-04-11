import { ChildNode, Element, Text } from 'domhandler'

export type ElementTagTransformFunction = ({
  node,
  attribs,
  children,
}: {
  node?: any
  attribs?: { [key: string]: string }
  children?: ChildNode[]
}) => Element

interface ElementTagTransform {
  [key: string]: ElementTagTransformFunction
}

export type MarkTransformFunction = (params: { node: any; textChildren?: any }) => (Element | Text)[]

interface MarkTransform {
  [key: string]: MarkTransformFunction
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
