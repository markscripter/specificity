import cssStats from 'cssstats'
import { ReadFile } from './util/read-file'

/**
 * specificity
 *
 * @param FileArray (array) - An array of the file(s) that need to be reviewed
 * @param Options (object) - An object of different settings for the file(s)
 * @returns Stats (object) - An object of the stats found from the file(s)
 */
export const specificity = (FileArray = [], Options = {}) => {
  FileArray
    .map(file => ReadFile(file))
    .map(cssString => cssStats(cssString))
    .map(output => console.log(output))
}
