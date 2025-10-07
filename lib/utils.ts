export type ClassValue =
  | string
  | number
  | null
  | undefined
  | boolean
  | ClassDictionary
  | ClassValue[]

interface ClassDictionary {
  [id: string]: any
}

function toVal(mix: ClassValue): string {
  let result = ''

  if (typeof mix === 'string' || typeof mix === 'number') {
    result += mix + ' '
  } else if (Array.isArray(mix)) {
    for (const inner of mix) {
      const value = toVal(inner)
      if (value) result += value + ' '
    }
  } else if (typeof mix === 'object' && mix) {
    for (const key in mix) {
      if (Object.prototype.hasOwnProperty.call(mix, key) && mix[key]) {
        result += key + ' '
      }
    }
  }

  return result.trim()
}

export function cn(...inputs: ClassValue[]): string {
  const classes = inputs.map(toVal).filter(Boolean).join(' ')
  return classes.replace(/\s+/g, ' ').trim()
}
