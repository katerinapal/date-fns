import imp_buildFormatLocale from "./build_format_locale/index.js";
import imp_buildDistanceInWordsLocale from "./build_distance_in_words_locale/index.js";
var buildDistanceInWordsLocale = imp_buildDistanceInWordsLocale
var buildFormatLocale = imp_buildFormatLocale

/**
 * @category Locales
 * @summary Croatian locale.
 * @author Matija Marohnić [@silvenon]{@link https://github.com/silvenon}
 */
mod_indexjs = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}
var mod_indexjs;
export default mod_indexjs;
