import fs from 'fs'

export const ReadFile = filepath => fs.readFile(filepath, 'utf8')
